import { useState } from "react";
import reactLogo from "./assets/react.svg";
function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  // checks if there is anything in text and replaces list with a new array containing the old list and the new text
  const updateList = () => {
    if (text.trim() !== "") {
      setList((prevList) => [...prevList, text]);
      setText("");
    }
  };
  return (
    <>
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={updateList}>Add</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
