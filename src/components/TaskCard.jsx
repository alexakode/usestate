export default function TaskCard({
  id,
  created,
  completed,
  text,
  onDelete,
  onToggleComplete,
}) {
  return (
    <div style={{ border: "solid white" }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggleComplete(id)}
      />
      <p>{new Date(created).toDateString()}</p>
      <h3>{text}</h3>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
