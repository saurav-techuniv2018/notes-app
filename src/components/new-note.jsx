import React from 'react';

import './new-note.css';

class NewNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      limitReaching: false,
    };
    this.note = '';
  }

  onNoteTextChanged(e) {
    this.note = e.target.value;

    if (this.note.length >= 120) {
      this.note = this.note.slice(0, 120);
    }

    this.setState({
      limitReaching: this.note.length >= 120,
    });
  }

  render() {
    return (
      <article>
        <section className="title-section">
          <h2 id="new-note-title">Note Title</h2>
          <button id="language" >en</button>
        </section>

        <input type="text" id="note-title-input" placeholder="Tasks for today" />

        <section className="note-heading">
          <h3>Please type your note below</h3>
          <span><i className="material-icons">&#xE14F;</i></span>
        </section>

        <textarea
          id="notes"
          value={this.note}
          className={this.state.limitReaching ? 'textarea-warning' : ''}
          onChange={e => this.onNoteTextChanged(e)}
        />
        <section className="action-section">
          <button id="save-button">Save</button>
          <p>{`${120 - this.note.length} characters`}</p>
        </section>

      </article>
    );
  }
}

export default NewNote;
