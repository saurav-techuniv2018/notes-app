import React from 'react';

import Title from './components/title';
import NewNote from './components/new-note';
import AboutUs from './components/about-us';

const App = () =>
  (
    <div className="App">
      <header>
        <Title />
      </header>
      <main >
        <NewNote />
      </main>
      <footer>
        <AboutUs />
      </footer>
    </div>
  );

export default App;
