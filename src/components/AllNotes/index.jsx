import { PropTypes } from 'prop-types';
import React from 'react';

import Footer from '../Footer';
import NoteItem from '../NoteItem';
import Title from '../Title';

import { noteShape } from '../../models/note';

import './AllNotes.css';

class AllNotes extends React.Component {
  constructor(props) {
    super(props);

    AllNotes.propTypes = {
      notes: PropTypes.arrayOf(PropTypes.shape(noteShape)).isRequired,
      switchPage: PropTypes.func.isRequired,
    };
  }

  renderNotes = () => this.props.notes.reduce((accumulator, note) => {
    const notes = accumulator;
    notes.push((
      <div key={note.id}>
        <NoteItem
          note={note.note}
          title={note.title}
          onEdit={() => this.props.switchPage(2, note)}
        />
      </div>
    ));
    return notes;
  }, []);

  render = () => (
    <div className="AllNotes-container">
      <div className="AllNotes-header">
        <Title value="Saved Notes" />
      </div>
      <div className="AllNotes-main">
        {this.renderNotes()}
      </div>
      <Footer
        label="Create New Note"
        onClick={() => this.props.switchPage(0)}
      />
    </div>
  );
}

export default AllNotes;
