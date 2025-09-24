import { useState } from "react";
export default function TaskCard({
  id,
  created,
  completed,
  text,
  onDelete,
  onToggleComplete,
  onEdit,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
  const saveEdit = () => {
    if (newText.trim() !== "") {
      onEdit(id, newText);
      toggleEdit();
    }
  };
  return (
    <div style={{ border: "solid black" }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggleComplete(id)}
      />
      <p>{new Date(created).toLocaleString()}</p>
      {isEditing ? (
        <>
          <input
            onChange={(e) => setNewText(e.target.value)}
            value={newText}
            type="text"
          />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <h3 onClick={() => toggleEdit(id)}>{text}</h3>
      )}
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
