export default function TaskCard({ task, onDelete, onToggleComplete }) {
  return (
    <div style={{ border: "solid white" }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
      />
      <h3>{task.text}</h3>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}
