import React from 'react';
import { PropTypes } from 'prop-types';

import './NewItem.css';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    NoteItem.propTypes = {
      title: PropTypes.string.isRequired,
      note: PropTypes.string.isRequired,
    };
  }

  render = () => (
    <div className="NoteItem-container">
      <h3 className="NoteItem-title">{this.props.title}</h3>
      <pre className="NoteItem-note">{this.props.note}</pre>
    </div>
  );
}

export default NoteItem;
