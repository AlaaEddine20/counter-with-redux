import React from "react";
import { useSelector } from "react-redux";
import DecrementButton from "../decrement_button/DecrementButton";
import IncrementButton from "../increment_button/IncrementButton";
import "./styles.css";

const Counter = ({ title }) => {
  return (
    <div className="counter_container">
      <h1>{title}</h1>
      <div className="buttons">
        <IncrementButton />
        <DecrementButton />
      </div>
    </div>
  );
};

export default Counter;
