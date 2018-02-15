import React from 'react';

import Title from '../title/title';
import NewNote from '../new-note/new-note';
import AboutUs from '../about-us/about-us';

import './app.css';

const App = () =>
  (
    <div className="App">
      <header>
        <Title value="Start taking notes" />
      </header>
      <main >
        <NewNote
          title="Note Title"
          noteTitlePlaceholder="Tasks for today"
          newNoteIcon="&#xE14F;"
          charactersLimit={10}
          noteHint="Please type your note below"
        />
      </main>
      <AboutUs />
    </div>
  );

export default App;
