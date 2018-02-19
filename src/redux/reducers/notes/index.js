import { ADD_OR_EDIT_NOTE } from '../../actions/notes';

import addOrEditNote from './add-edit-note';

const defaultState = {
  allNotes: [],
};

const notes = (currentState = defaultState, action) => {
  switch (action.type) {
    case ADD_OR_EDIT_NOTE:
      return addOrEditNote(currentState, action.payload);

    default:
      return currentState;
  }
};

export default notes;
