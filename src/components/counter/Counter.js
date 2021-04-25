import React from "react";
import { useSelector } from "react-redux";
import DecreaseButton from "../decrease_button/DecreaseButton";
import IncreaseButton from "../increment_button/IncreaseButton";
import "./styles.scss";

const Counter = ({ title }) => {
  const count = useSelector((state) => state.count);

  return (
    <div className="counter_container">
      <h1>{title}</h1>
      <h2
        style={
          count === 0
            ? { color: "white" }
            : count % 2 === 0
            ? { color: "black" }
            : { color: "red" }
        }
      >
        {count}
      </h2>
      <div className="buttons">
        <DecreaseButton />
        <IncreaseButton />
      </div>
    </div>
  );
};

export default Counter;
