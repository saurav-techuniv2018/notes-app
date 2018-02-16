import { PropTypes } from 'prop-types';
import React from 'react';

import Title from '../Title';
import NewNote from '../NewNote';
import AboutUs from '../AboutUs';

import './CreateNewNotePage.css';

class CreateNewNotePage extends React.Component {
  constructor(props) {
    super(props);

    CreateNewNotePage.propTypes = {
      notes: PropTypes.arrayOf({
        note: PropTypes.string,
        title: PropTypes.string,
      }).isRequired,
      switchPage: PropTypes.func.isRequired,
    };
  }

  saveNewNote = (note) => {
    const prevNotes = this.props.notes;
    prevNotes.push(note);

    this.props.switchPage();
  }


  render = () => (
    <div className="CreateNewNotePage-container">
      <header className="CreateNewNotePage-header">
        <Title value="Start taking notes" />
      </header>
      <main className="CreateNewNotePage-main">
        <NewNote
          title="Note Title"
          noteTitlePlaceholder="Tasks for today"
          newNoteIcon="&#xE14F;"
          charactersLimit={120}
          noteHint="Please type your note below"
          onSave={note => this.saveNewNote(note)}
        />
      </main>
      <AboutUs />
    </div>
  );
}

export default CreateNewNotePage;
