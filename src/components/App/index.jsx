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
    };
  }

  renderCurrentPage() {
    switch (this.props.currentPage) {
      case 0:
        return (
          <NotePage note={{
            title: '',
            note: '',
          }}
          />
        );

      case 1:
        return (
          <AllNotes />
        );

      default:
        return (
          <NotePage note={this.props.currentNote} />
        );
    }
  }

  render = () => (
    this.renderCurrentPage()
  );
}

export default connect(App.mapStateToProps, App.mapDispatchToProps)(App);
