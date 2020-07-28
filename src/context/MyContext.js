import { createContext } from "react";

export const MyContext = createContext(0);

export const MyReducer = (state, action) => {
  switch (action.type) {
    case `add`:
      return state + 1;
    case `subtract`:
      return state - 1;
    default:
      return `something`;
  }
};
