import { INCREASE, DECREASE, RESET } from "./actionTypes";

export const Increment = () => ({
  type: INCREASE,
});

export const Decrement = () => ({
  type: DECREASE,
});

export const Reset = () => ({
  type: RESET,
});
