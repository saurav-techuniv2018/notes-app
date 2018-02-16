import { PropTypes } from 'prop-types';
import React from 'react';

import Footer from '../Footer';
import NoteItem from '../NoteItem';
import Title from '../Title';

import './AllNotes.css';

class AllNotes extends React.Component {
  constructor(props) {
    super(props);

    AllNotes.propTypes = {
      notes: PropTypes.arrayOf({
        note: PropTypes.string,
        title: PropTypes.string,
      }).isRequired,
      switchPage: PropTypes.func.isRequired,
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
    <div className="AllNotes-container">
      <div className="AllNotes-header">
        <Title value="Saved Notes" />
      </div>
      <div className="AllNotes-main">
        {this.renderNotes()}
      </div>
      <Footer
        label="Create New Note"
        onClick={() => this.props.switchPage()}
      />
    </div>
  );
}

export default AllNotes;
