// hooks, state
// vi kan importere hooks fra react; useXXX
// state is immutable, conditional rendering
import { useState } from "react";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {isVisible && <p>This is a toggled message!</p>}
    </div>
  );
}
