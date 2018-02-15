import React from 'react';

import Title from '../title/title';
import NewNote from '../new-note/new-note';
import AboutUs from '../about-us/about-us';

import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };
  }

  saveNewNote = (note) => {
    this.setState((previousState) => {
      const previousNotes = previousState.notes;

      previousNotes.push(note);

      return {
        notes: previousNotes,
      };
    });
  }

  render = () => (
    <div className="App">
      <header>
        <Title value="Start taking notes" />
      </header>
      <main >
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
