import React from 'react';

import './new-note.css';

const NewNote = () => (
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

    <textarea id="notes" />
    <section className="action-section">
      <button id="save-button">Save</button>
      <p>150 characters</p>
    </section>

  </article>
);

export default NewNote;
