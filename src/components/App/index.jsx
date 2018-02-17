import React from 'react';

import NotePage from '../NotePage';
import AllNotes from '../AllNotes';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Pages
    // NewNote: 0
    // AllNotes: 1
    // EditNote: 2

    this.state = {
      notes: [],
      currentPage: 0,
      currentNote: {
        title: '',
        note: '',
      },
    };
  }

  switchPage = (page, currentNote) => {
    if (currentNote) {
      this.setState(prevState => ({
        ...prevState,
        currentNote,
      }), () => {
        this.setState(prevState => ({
          ...prevState,
          currentPage: page,
        }));
      });
    } else {
      this.setState(prevState => ({
        ...prevState,
        currentPage: page,
      }));
    }
  }

  renderCurrentPage() {
    switch (this.state.currentPage) {
      case 0:
        return (
          <NotePage
            notes={this.state.notes}
            currentNote={{
              title: '',
              note: '',
            }}
            switchPage={this.switchPage}
          />
        );

      case 1:
        return (
          <AllNotes
            notes={this.state.notes}
            switchPage={this.switchPage}
          />
        );

      default:
        return (
          <NotePage
            notes={this.state.notes}
            currentNote={this.state.currentNote}
            switchPage={this.switchPage}
          />
        );
    }
  }

  render = () => (
    this.renderCurrentPage()
  );
}

export default App;
