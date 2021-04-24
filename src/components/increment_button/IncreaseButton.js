import React from "react";
import { useDispatch } from "react-redux";
import { Increment } from "../../actions/actions";
import "./styles.scss";

const IncrementButton = () => {
  const dispatch = useDispatch();

  const IncrementCount = () => {
    dispatch(Increment());
  };

  return (
    <>
      <button className="increment_btn" onClick={IncrementCount}>
        Increase
      </button>
    </>
  );
};

export default IncrementButton;
