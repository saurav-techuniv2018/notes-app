const SWITCH_PAGE = 'SWITCH_PAGE';
const CURRENT_NOTE = 'CURRENT_NOTE';

export { SWITCH_PAGE, CURRENT_NOTE };

const switchPage = page => ({
  type: SWITCH_PAGE,
  payload: page,
});

const currentNote = note => ({
  type: CURRENT_NOTE,
  payload: note,
});

export { switchPage, currentNote };
