import React from 'react';
import { PropTypes } from 'prop-types';

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
      <h4 className="NoteItem-title">{this.props.title}</h4>
      <p className="NoteItem-note">{this.props.note}</p>
    </div>
  );
}

export default NoteItem;
