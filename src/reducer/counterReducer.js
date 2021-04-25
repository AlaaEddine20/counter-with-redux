import { INCREASE, DECREASE, RESET } from "./../actions/actionTypes";

const initialState = {
  count: 0,
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + 1 };

    case DECREASE:
      return { ...state, count: state.count - 1 };

    case RESET:
      return { ...state, count: (state.count = 0) };

    default:
      return state;
  }
}
