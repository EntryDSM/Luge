import { ADD_COUNT, MINUS_COUNT, SET_COUNT } from "../../action/test/interface";
import { CountActionType } from "../../action/test";
import { initialStateType } from "./interface/test";

const initialState: initialStateType = {
  value: 0,
};

const CountReducer = (
  state: initialStateType = initialState,
  action: CountActionType
) => {
  switch (action.type) {
    case ADD_COUNT: {
      return {
        ...state,
        value: state.value + 1,
      };
    }
    case MINUS_COUNT: {
      return {
        ...state,
        value: state.value - 1,
      };
    }
    case SET_COUNT: {
      return {
        ...state,
        diff: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default CountReducer;
