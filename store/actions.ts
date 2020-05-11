import { AsyncAction, Action, rehydrate } from "overmind";

export const changePage = ({ state }, mutations) => {
  rehydrate(state, mutations || []);

  switch (state.page) {
    case "Index":
      // Do some additional logic
      break;
    case "About":
      // Do some additional logic
      break;
    default:
      break;
  }
};

/**
 * Export AsyncAction and Action
 */
