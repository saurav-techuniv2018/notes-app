import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import NotePage from '../NotePage';
import AllNotes from '../AllNotes';
import actionGenerator, { switchPage, currentNote, putNotes } from '../../redux/actions';
import { SYNC_DATA_STARTED, SYNC_DATA_SUCCEEDED, SYNC_DATA_FAILED } from '../../redux/actions/app';

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
    fetchNotesStarted: () => { dispatch(actionGenerator(SYNC_DATA_STARTED)); },
    fetchNotesSucceeded: () => { dispatch(actionGenerator(SYNC_DATA_SUCCEEDED)); },
    fetchNotesFailed: () => { dispatch(actionGenerator(SYNC_DATA_FAILED)); },
    putNotes: notes => dispatch(putNotes(notes)),
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
      fetchNotesStarted: PropTypes.func.isRequired,
      fetchNotesSucceeded: PropTypes.func.isRequired,
      fetchNotesFailed: PropTypes.func.isRequired,
      putNotes: PropTypes.func.isRequired,
    };
  }

  componentDidMount() {
    this.props.fetchNotesStarted();
    fetch('/api/notes')
      .then(response => response.json())
      .then((payload) => {
        console.log('done');
        // TODO Check result status
        const notes = payload.data;
        this.props.putNotes(notes);
        this.props.fetchNotesSucceeded();
      })
      .catch(() => {
        this.props.fetchNotesFailed();
      });
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
