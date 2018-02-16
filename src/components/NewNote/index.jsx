import { PropTypes } from 'prop-types';
import React from 'react';

import Button from '../Button';
import MaterialIcon from '../MaterialIcon';
import RemainingCharacters from '../RemainingCharacters';

import { Note } from '../../models/note';

import './NewNote.css';

class NewNote extends React.Component {
  constructor(props) {
    super(props);

    NewNote.propTypes = {
      title: PropTypes.string.isRequired,
      noteTitlePlaceholder: PropTypes.string.isRequired,
      newNoteIcon: PropTypes.string.isRequired,
      charactersLimit: PropTypes.number.isRequired,
      noteHint: PropTypes.string.isRequired,
      onSave: PropTypes.func.isRequired,
    };

    this.state = {
      note: '',
      noteTitle: '',
      limitReaching: false,
      charactersLimit: this.props.charactersLimit,
    };
  }

  render() {
    return (
      <article className="NewNote-container">
        <section className="NewNote-heading">
          <h2 className="NewNote-title">{this.props.title}</h2>
          <Button
            class="NewNote-button"
            label="en"
          />
        </section>
        <input
          type="text"
          className="NewNote-title-input"
          placeholder={this.props.noteTitlePlaceholder}
          value={this.state.noteTitle}
          onChange={(e) => {
            const newTitle = e.target.value;

            this.setState({
              noteTitle: newTitle,
            });
          }}
        />
        <section className="NewNote-note-heading">
          <h3 className="NewNote-note-hint">{this.props.noteHint}</h3>
          <MaterialIcon icon={this.props.newNoteIcon} />
        </section>
        <textarea
          value={this.state.note}
          maxLength={this.state.charactersLimit}
          className={`NewNote-notes ${this.state.limitReaching ? 'NewNote-textarea-warning' : ''}`}
          onChange={(e) => {
            const newNote = e.target.value;

            this.setState({
              note: newNote,
              limitReaching: newNote.length >= this.state.charactersLimit,
            });
          }}
        />
        <section className="NewNote-action-section">
          <Button
            className="NewNote-button"
            label="Save"
            onClick={() => {
              if (
                this.state.noteTitle === '' ||
                this.state.note === '') {
                return;
              }

              this.props.onSave(new Note(this.state.noteTitle, this.state.note));
              this.setState({
                noteTitle: '',
                note: '',
                limitReaching: false,
              });
            }}
          />
          <RemainingCharacters
            count={this.state.charactersLimit - this.state.note.length}
            itemLabel="characters"
          />
        </section>
      </article>
    );
  }
}

export default NewNote;
