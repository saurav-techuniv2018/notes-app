import { PropTypes } from 'prop-types';
import React from 'react';

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
    };

    this.state = {
      note: '',
      limitReaching: false,
      charactersLimit: this.props.charactersLimit,
    };
  }

  onNoteTextChanged(e) {
    const newNote = e.target.value;

    this.setState({
      note: newNote,
      limitReaching: newNote.length >= this.state.charactersLimit,
    });
  }

  render() {
    return (
      <article>
        <section id="new-note-heading">
          <h2 id="new-note-title">{this.props.title}</h2>
          <button id="language">en</button>
        </section>

        <input
          type="text"
          id="note-title-input"
          placeholder={this.props.noteTitlePlaceholder}
        />

        <section className="note-heading">
          <h3>Please type your note below</h3>
          <MaterialIcon icon={this.props.newNoteIcon} />
        </section>

        <textarea
          id="notes"
          value={this.note}
          maxLength={this.state.charactersLimit}
          className={this.state.limitReaching ? 'textarea-warning' : ''}
          onChange={e => this.onNoteTextChanged(e)}
        />
        <section className="action-section">
          <button id="save-button">Save</button>
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
