import { useState } from "react";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import TaskCard from "./components/TaskCard";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useLocalStorage("list", []);
  const [showCompleted, setShowCompleted] = useState(true);
  const [sortByNew, setSortByNew] = useState(true);

  const newItem = {
    id: crypto.randomUUID(),
    text: input,
    completed: false,
  };
  const handleAdd = () => {
    if (input.trim() !== "") {
      const newItem = {
        id: crypto.randomUUID(),
        created: new Date().toISOString(),
        text: input,
        completed: false,
      };
      setItems((prev) => [...prev, newItem]);
      setInput("");
    }
  };
  // delete tasks
  const handleDelete = (id) => {
    setList(list.filter((task) => task.id !== id));
  };
  // toggle complete
  const toggleComplete = (id) => {
    setList(
      list.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  // edit task
  const editTask = (id, newText) => {
    setList(
      list.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };
  const filteredList = showCompleted
    ? list
    : list.filter((task) => !task.completed);
  return (
    <>
      <button onClick={() => setShowCompleted(!showCompleted)}>
        {showCompleted ? "Hide" : "Show"} Completed
      </button>
      <button onClick={() => setSortByNew(!sortByNew)}>
        {sortByNew ? "Sort by Oldest" : "Sort by Newest"}
      </button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAdd();
          }
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {list
          .filter((task) => showCompleted || !task.completed)
          .sort((a, b) => {
            return sortByNew ? b.created - a.created : a.created - b.created;
          })
          .map((item) => (
            <TaskCard
              key={item.id}
              task={item}
              onDelete={() => handleDelete(item.id)}
              onToggleComplete={() => toggleComplete(item.id)}
              onEdit={(newText) => editTask(item.id, newText)}
            />
          ))}
      </ul>
    </>
  );
}
export default App;
