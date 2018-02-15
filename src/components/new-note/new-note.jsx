import { PropTypes } from 'prop-types';
import React from 'react';

import Button from '../button/button';
import MaterialIcon from '../material-icon/material-icon';

import './new-note.css';
import RemainingCharacters from '../remaining-characters/remaining-characters';

class NewNote extends React.Component {
  constructor(props) {
    super(props);

    NewNote.propTypes = {
      title: PropTypes.string.isRequired,
      noteTitlePlaceholder: PropTypes.string.isRequired,
      newNoteIcon: PropTypes.string.isRequired,
      charactersLimit: PropTypes.string.isRequired,
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
      <article>
        <section id="new-note-heading">
          <h2 id="new-note-title">{this.props.title}</h2>
          <Button
            id="language"
            label="en"
          />
        </section>

        <input
          type="text"
          id="note-title-input"
          placeholder={this.props.noteTitlePlaceholder}
          value={this.state.noteTitle}
          onChange={(e) => {
            const newTitle = e.target.value;

            this.setState({
              noteTitle: newTitle,
            });
          }}
        />

        <section className="note-heading">
          <h3>{this.props.noteHint}</h3>
          <MaterialIcon icon={this.props.newNoteIcon} />
        </section>

        <textarea
          id="notes"
          value={this.state.note}
          maxLength={this.state.charactersLimit}
          className={this.state.limitReaching ? 'textarea-warning' : ''}
          onChange={(e) => {
            const newNote = e.target.value;

            this.setState({
              note: newNote,
              limitReaching: newNote.length >= this.state.charactersLimit,
            });
          }}
        />
        <section className="action-section">
          <Button
            label="Save"
            onClick={() => {
              this.props.onSave({
                title: this.state.noteTitle,
                note: this.state.note,
              });
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
