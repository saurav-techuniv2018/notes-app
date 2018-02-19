import { currentNote, switchPage, syncData } from './app';
import { addOrEditNote, putNotes } from './notes';

export { switchPage, currentNote, addOrEditNote, syncData, putNotes };

const actionGenerator = actionTypeName => ({
  type: actionTypeName,
});

export default actionGenerator;
