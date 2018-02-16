import { PropTypes } from 'prop-types';

const noteShape = {
  id: PropTypes.string,
  note: PropTypes.string,
  title: PropTypes.string,
};

class Note {
  constructor(title, note) {
    this.id = new Date().toString();
    this.title = title;
    this.note = note;
  }
}

export { Note, noteShape };

export default Note;
