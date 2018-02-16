import React from 'react';

import CreateNewNotePage from '../CreateNewNotePage';
import AllNotes from '../AllNotes';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Pages
    // NewNote: 0
    // AllNotes: 1

    this.state = {
      notes: [],
      currentPage: 0,
      pagesCount: 2,
    };
  }

  switchPage() {
    this.setState((prevState) => {
      const nextPage = (prevState.currentPage + 1) % prevState.pagesCount;
      return { currentPage: nextPage };
    });
  }


  render = () => (
    this.state.currentPage % this.state.pagesCount === 0 ?
      <CreateNewNotePage
        notes={this.state.notes}
        switchPage={() => this.switchPage()}
      /> :
      <AllNotes
        notes={this.state.notes}
        switchPage={() => this.switchPage()}
      />
  );
}

export default App;
