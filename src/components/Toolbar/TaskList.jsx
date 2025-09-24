import TaskCard from "./TaskCard.jsx";
import { makeSorter, sortModes } from "../utils/sorters.js";
export default function TaskList({
  showCompleted,
  list,
  onDelete,
  onToggle,
  onEdit,
  query,
}) {
  return (
    <ul>
      {list
        .filter((task) => showCompleted || !task.completed)
        .filter((task) =>
          task.text.toLowerCase().includes(query.trim().toLowerCase())
        )
        .sort(makeSorter(sortModes))
        .map((item) => (
          <TaskCard key={item.id} {...item} />
        ))}
    </ul>
  );
}
