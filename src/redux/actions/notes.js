const ADD_OR_EDIT_NOTE = 'ADD_OR_EDIT_NOTE';

export { ADD_OR_EDIT_NOTE };

const addOrEditNote = note => ({
  type: ADD_OR_EDIT_NOTE,
  payload: note,
});

export { addOrEditNote };
