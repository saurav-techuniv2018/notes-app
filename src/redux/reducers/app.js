import { CURRENT_NOTE, SWITCH_PAGE } from '../actions/app';

const defaultState = {
  currentPage: 0,
  currentNote: {
    title: '',
    note: '',
  },
};

const app = (currentState = defaultState, action) => {
  switch (action.type) {
    case CURRENT_NOTE:
      return {
        ...currentState,
        currentNote: action.payload,
      };

    case SWITCH_PAGE:
      return {
        ...currentState,
        currentPage: action.payload,
      };

    default:
      return currentState;
  }
};

export default app;
