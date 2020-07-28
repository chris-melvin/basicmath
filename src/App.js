import React, { useState, useEffect } from "react";
import "./App.css";
import { RandomNumbers } from "./components/RandomNumbers";
import Operation from "./components/Operation";
console.log(RandomNumbers());
function App() {
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState(10);
  const [timer, setTimer] = useState(100);

  useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer]);

  const reset = () => {
    setScore(0);
    setTimer(15);
  };
  return (
    <div className="container">
      <div className="inner">
        {!timer ? (
          <div>
            <p>Set Difficulty</p>
            <input
              type="number"
              onChange={(e) => setDifficulty(e.target.value)}
              value={difficulty}
            />
          </div>
        ) : null}
        {timer ? (
          <div className="operation">
            <div className="timeBox">
              <h1>time: {timer}</h1>
            </div>
            {
              <Operation
                difficulty={difficulty}
                data={RandomNumbers}
                score={{ score, setScore }}
              />
            }
          </div>
        ) : (
          <div>
            <h1>Your score is: {score}</h1>
            <button onClick={() => reset()}>Play again</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
