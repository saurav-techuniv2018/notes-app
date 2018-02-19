import { PropTypes } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { addOrEditNote, switchPage } from '../../redux/actions';

import Title from '../Title';
import NewNote from '../NewNote';
import Footer from '../Footer';

import { noteShape } from '../../models/note';

import './NotePage.css';

class NotePage extends React.Component {
  static mapDispatchToProps = dispatch => ({
    onSave: ((note) => {
      dispatch(addOrEditNote(note));
      dispatch(switchPage(1, undefined));
    }),
  });

  constructor(props) {
    super(props);

    NotePage.propTypes = {
      currentNote: PropTypes.shape(noteShape).isRequired,
      onSave: PropTypes.func.isRequired,
    };
  }

  render = () => (
    <div className="NotePage-container">
      <header className="NotePage-header">
        <Title value="Start taking notes" />
      </header>
      <main className="NotePage-main">
        <NewNote
          title="Note Title"
          noteTitlePlaceholder="Tasks for today"
          newNoteIcon="&#xE14F;"
          charactersLimit={120}
          note={this.props.currentNote}
          noteHint="Please type your note below"
          onSave={note => this.props.onSave(note)}
        />
      </main>
      <Footer
        label="About Us"
        onClick={() => { }}
      />
    </div>
  );
}

export default connect(null, NotePage.mapDispatchToProps)(NotePage);
