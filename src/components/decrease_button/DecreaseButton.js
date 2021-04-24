import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Decrement } from "../../actions/actions";
import "./styles.scss";

const DecrementButton = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const DecrementCount = () => {
    if (count > 0) {
      dispatch(Decrement());
    } else {
      alert("The count can't be lower than 0!");
    }
  };

  return (
    <div>
      <button className="decrement_btn" onClick={DecrementCount}>
        Decrease
      </button>
    </div>
  );
};

export default DecrementButton;
