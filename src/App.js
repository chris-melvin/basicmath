import React, { useState, useMemo } from "react";
import "./App.css";
import { RandomNumbers } from "./components/RandomNumbers";
import Operation from "./components/Operation";
// import { MyContext } from "./context/MyContext";
import myNumber from "./myNumbers.json";

function App() {
  const myArray = useMemo(() => RandomNumbers(), []);
  const [score, setScore] = useState(0);

  return (
    <div className="container">
      <h1>{score}</h1>

      {myArray.map((d, i) => (
        <Operation key={i} id={i} data={d} score={{ score, setScore }} />
      ))}
    </div>
  );
}

export default App;
