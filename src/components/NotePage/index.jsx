import { PropTypes } from 'prop-types';
import React from 'react';

import Title from '../Title';
import NewNote from '../NewNote';
import Footer from '../Footer';

import { noteShape, Note } from '../../models/note';

import './NotePage.css';

class NotePage extends React.Component {
  constructor(props) {
    super(props);

    NotePage.propTypes = {
      notes: PropTypes.arrayOf(PropTypes.shape(noteShape)).isRequired,
      currentNote: PropTypes.shape(noteShape).isRequired,
      switchPage: PropTypes.func.isRequired,
    };
  }

  saveNewNote = (newNote) => {
    const prevNotes = this.props.notes;

    if (!newNote.id) {
      // New Note
      prevNotes.push(new Note(newNote.title, newNote.note));
    } else {
      // Edit note
      const noteToEdit = prevNotes.find(note => note.id === newNote.id);
      if (noteToEdit) {
        noteToEdit.title = newNote.title;
        noteToEdit.note = newNote.note;
      }
    }
    this.props.switchPage(1);
  }


  render = () => (
    <div className="NotePage-container">
      <header className="NotePage-header">
        <Title value="Start taking notes" />
      </header>
      <main className="NotePage-main">
        <NewNote
          title="Note Title"
          noteTitlePlaceholder="Tasks for today"
          newNoteIcon="&#xE14F;"
          charactersLimit={120}
          note={this.props.currentNote}
          noteHint="Please type your note below"
          onSave={note => this.saveNewNote(note)}
        />
      </main>
      <Footer
        label="About Us"
        onClick={() => { }}
      />
    </div>
  );
}

export default NotePage;
