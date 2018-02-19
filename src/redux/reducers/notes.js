import { ADD_NOTE } from '../actions/notes';

const defaultState = {
  allNotes: [],
};

const notes = (currentState = defaultState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        allNotes: [
          ...currentState.allNotes,
          action.payload,
        ],
      };

    default:
      return currentState;
  }
};

export default notes;
