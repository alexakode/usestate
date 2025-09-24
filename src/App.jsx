import { useState } from "react";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import TaskCard from "./components/Toolbar/TaskCard";
import TaskList from "./components/Toolbar/TaskList";
import Toolbar from "./components/Toolbar/Toolbar";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useLocalStorage("list", []);
  const [showCompleted, setShowCompleted] = useState(true);
  const [sortMode, setSortMode] = useState("newFirst");
  const [query, setQuery] = useState("");

  const newItem = {
    id: crypto.randomUUID(),
    text: input,
    completed: false,
  };
  const sortList = (a, b) => {
    switch (sortMode) {
      case "newFirst":
        return new Date(b.created) - new Date(a.created);
      case "oldFirst":
        return new Date(a.created) - new Date(b.created);
      case "A-Å":
        return a.text.localeCompare(b.text);
      case "Å-A":
        return b.text.localeCompare(a.text);
      default:
        return 0;
    }
  };
  const handleAdd = () => {
    if (input.trim() !== "") {
      const newItem = {
        id: crypto.randomUUID(),
        created: Date.now(),
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
      <button onClick={() => setShowCompleted(!showCompleted)}>
        {showCompleted ? "Hide" : "Show"} Completed
      </button>
      <select name="" id="">
        <option value="newFirst">Newest First</option>
        <option value="oldFirst">Oldest First</option>
        <option value="A-Å">A-Å</option>
        <option value="Å-A">Å-A</option>
      </select>
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
      <Toolbar
        setShowCompleted={setShowCompleted}
        query={query}
        setQuery={setQuery}
        sortMode={sortMode}
        showCompleted={showCompleted}
        setSortMode={setSortMode}
      />
      <TaskList
        showCompleted={showCompleted}
        list={list}
        onDelete={handleDelete}
        onToggle={toggleComplete}
        onEdit={editTask}
        query={query}
      />
    </>
  );
}
export default App;
