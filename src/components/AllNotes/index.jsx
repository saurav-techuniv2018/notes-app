import { PropTypes } from 'prop-types';
import React from 'react';

import NoteItem from '../NoteItem';

class AllNotes extends React.Component {
  constructor(props) {
    super(props);

    AllNotes.propTypes = {
      notes: PropTypes.arrayOf({
        note: PropTypes.string,
        title: PropTypes.string,
      }).isRequired,
    };
  }

  renderNotes = () => this.props.notes.reduce((accumulator, note) => {
    const notes = accumulator;
    notes.push(<NoteItem
      key={new Date()}
      note={note.note}
      title={note.title}
    />);
    return notes;
  }, []);

  render = () => (
    <ol className="AllNotes-container">
      {this.renderNotes()}
    </ol>
  );
}

export default AllNotes;
