import React from 'react';

import Title from '../title/title';
import NewNote from '../new-note/new-note';
import AboutUs from '../about-us/about-us';

import './app.css';

const App = () =>
  (
    <div className="App">
      <header>
        <Title />
      </header>
      <main >
        <NewNote />
      </main>
      <AboutUs />
    </div>
  );

export default App;
