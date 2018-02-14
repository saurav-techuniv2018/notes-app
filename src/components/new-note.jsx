import React from 'react';

const NewNote = () => (
  <article>
    <h2 id="new-note-title">Note Title</h2>
    <button id="language" />

    <input type="text" id="note-title-input" />

    <h3>Please type your note below</h3>
    {/* icon */}

    <textarea id="notes" />

    <button id="save-button">Save</button>

    <p>150 characters</p>
  </article>
);

export default NewNote;
