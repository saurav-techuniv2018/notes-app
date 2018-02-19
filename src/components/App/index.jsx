import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import NotePage from '../NotePage';
import AllNotes from '../AllNotes';
import { currentNote, switchPage } from '../../redux/actions';

import './App.css';

class App extends React.Component {
  static mapStateToProps = state => ({
    currentPage: state.app.currentPage,
    currentNote: {
      ...state.app.currentNote,
    },
  });

  static mapDispatchToProps = dispatch => ({
    setCurrentNote: (note) => { dispatch(currentNote(note)); },
    switchPage: (page, note) => { dispatch(switchPage(page, note)); },
  });

  constructor(props) {
    super(props);

    // Pages
    // NewNote: 0
    // AllNotes: 1
    // EditNote: 2

    App.propTypes = {
      currentPage: PropTypes.number.isRequired,
      currentNote: PropTypes.shape({
        note: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
      switchPage: PropTypes.func.isRequired,
    };
  }

  renderCurrentPage() {
    switch (this.props.currentPage) {
      case 0:
        return (
          <NotePage
            currentNote={{
              title: '',
              note: '',
            }}
            switchPage={() => this.props.switchPage(1, undefined)}
          />
        );

      case 1:
        return (
          <AllNotes
            switchPage={() => this.props.switchPage(0, this.props.currentNote)}
          />
        );

      default:
        return (
          <NotePage
            currentNote={this.props.currentNote}
            switchPage={() => this.props.switchPage(1, undefined)}
          />
        );
    }
  }

  render = () => (
    this.renderCurrentPage()
  );
}

export default connect(App.mapStateToProps, App.mapDispatchToProps)(App);
