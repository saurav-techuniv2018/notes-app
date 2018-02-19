const ADD_NOTE = 'ADD_NOTE';

export { ADD_NOTE };

const addNote = note => ({
  type: ADD_NOTE,
  payload: note,
});

export { addNote };
