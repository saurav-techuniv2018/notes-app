import React from 'react';

import Title from '../Title';
import NewNote from '../NewNote';
import AboutUs from '../AboutUs';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };
  }

  saveNewNote = (note) => {
    if (
      !note ||
      !note.title ||
      !note.note ||
      note.title === '' ||
      note.note === '') { return; }

    this.setState((previousState) => {
      const previousNotes = previousState.notes;

      previousNotes.push(note);

      return {
        notes: previousNotes,
      };
    });
  }


  render = () => (
    <div className="App-container">
      <header className="App-header">
        <Title value="Start taking notes" />
      </header>
      <main className="App-main">
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

export default App;
