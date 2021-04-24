import React from "react";
import { useSelector } from "react-redux";
import DecrementButton from "../decrement_button/DecrementButton";
import IncrementButton from "../increment_button/IncrementButton";
import "./styles.css";

const Counter = ({ title }) => {
  const count = useSelector((state) => state.count);
  return (
    <div className="counter_container">
      <h1>{title}</h1>
      <h2 className={count % 2 === 0 ? "black_color" : "red_color"}>{count}</h2>
      <div className="buttons">
        <DecrementButton />
        <IncrementButton />
      </div>
    </div>
  );
};

export default Counter;
