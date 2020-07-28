import React, { useState } from "react";
// import { MyContext, MyReducer } from "../context/MyContext";
const Operation = ({ data, id, score: { score, setScore } }) => {
  const [input, setInput] = useState(null);
  const { num1, num2, sum, qoutient, difference, product } = data;
  // const myScore = useContext(MyContext);
  // const [something, dispatch] = useReducer(MyReducer, myScore);
  console.log("HELLO");
  const checkAnswer = (e) => {
    if (e.keyCode === 9) {
      if (+input === sum) {
        setScore(score + 1);
      }
    }
  };
  console.log(id);
  return (
    <div style={{ width: `150px`, margin: `1rem` }}>
      <p>{num1}</p>
      <p>{num2}</p>
      <span>+</span>
      <hr />
      <input
        onKeyDown={(e) => checkAnswer(e)}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default Operation;
