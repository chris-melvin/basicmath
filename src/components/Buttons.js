import React from "react";
import styles from "./buttons.module.css";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Buttons = ({ in: { input, setInput } }) => {
  return (
    <div className={`${styles.container}`}>
      {numbers.map((d) => (
        <button
          className={`${styles.box}`}
          value={d}
          onClick={(e) => {
            setInput(`${input}${e.target.value}`);
          }}
        >
          {d}
        </button>
      ))}
      <button
        className={styles.box0}
        value={0}
        onClick={(e) => {
          setInput(`${input}${e.target.value}`);
        }}
      >
        0
      </button>
    </div>
  );
};

export default Buttons;
