// hooks, state
// vi kan importere hooks fra react; useXXX
// state is immutable, conditional rendering
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount((prev) => prev + 1);
  }
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
