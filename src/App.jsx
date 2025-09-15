import { useState } from "react";
import reactLogo from "./assets/react.svg";
function App() {
  const [text, setText] = useState("");
  const updateText = (e) => {
    setText(e.target.value);
    console.log(text);
  };
  return (
    <>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button>Add</button>
      <ul>Display</ul>
    </>
  );
}

export default App;
