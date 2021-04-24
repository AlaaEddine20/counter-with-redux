import React from "react";
import { useDispatch } from "react-redux";
import { Increment } from "../../actions/actions";

const IncrementButton = () => {
  const dispatch = useDispatch();

  const IncrementCount = () => {
    dispatch(Increment());
  };

  return (
    <>
      <button onClick={IncrementCount}>Increment</button>
    </>
  );
};

export default IncrementButton;
