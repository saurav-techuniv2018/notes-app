import React from 'react';

import Title from './components/title';
import NewNote from './components/new-note';
import AboutUs from './components/about-us';

import './App.css';

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
