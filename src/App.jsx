import { useState } from "react";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useLocalStorage("list", []);

  const newItem = {
    id: crypto.randomUUID(),
    text: input,
    completed: false,
  };
  const handleAdd = () => {
    setList([...list, newItem]);
    setInput("");
  };

  return (
    <>
      <button>Show/hide completed</button>
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
        {list.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
}
export default App;
