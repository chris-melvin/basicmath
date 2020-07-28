import React, { useState, useMemo, useRef, useEffect } from "react";
import Buttons from "./Buttons";

const Operation = ({ data, difficulty, score: { score, setScore } }) => {
  const [input, setInput] = useState(``);
  const [item, setItem] = useState(1);
  const numbers = useMemo(() => data(item, difficulty), [
    data,
    item,
    difficulty,
  ]);
  const { num1, num2, sum, qoutient, difference, product, operation } = numbers;
  const inputRef = useRef();

  const theOperation = () => {
    switch (operation) {
      case 1:
        return `+`;
      case 2:
        return `-`;
      case 3:
        return `x`;
      case 4:
        return `/`;
      default:
        return `+`;
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  const checkAnswer = (value) => {
    if (operation === 1) {
      if (+value === sum) {
        setScore(score + 1);
        setItem(item + 1);
        setInput(``);
      }
    } else if (operation === 2) {
      if (+value === difference) {
        setScore(score + 1);
        setItem(item + 1);
        setInput(``);
      }
    } else if (operation === 3) {
      if (+value === product) {
        setScore(score + 1);
        setItem(item + 1);
        setInput(``);
      }
    } else if (operation === 4) {
      if (+value === qoutient) {
        setScore(score + 1);
        setItem(item + 1);
        setInput(``);
      }
    }
  };

  return (
    <div>
      <div className="questionBox">
        <p className="question">
          {num1} {theOperation()} {num2}
        </p>
      </div>

      <div className="inputBox">
        <input
          className="numberInput"
          type="number"
          ref={inputRef}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            checkAnswer(e.target.value);
          }}
        />
        <Buttons in={{ input, setInput }} />

        <div className="bottom-buttons">
          <button
            className="clear-button button"
            onClick={() => {
              setInput(``);
            }}
          >
            Clear
          </button>
          <button
            className="skip-button button"
            onClick={() => setItem(item + 1)}
          >
            Skip
          </button>
          <button
            className=" submit-button button"
            onClick={() => checkAnswer(inputRef.current.value)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Operation;
