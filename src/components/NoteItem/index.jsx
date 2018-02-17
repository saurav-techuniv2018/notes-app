import React from 'react';
import { PropTypes } from 'prop-types';

import './NewItem.css';
import MaterialIcon from '../MaterialIcon';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    NoteItem.propTypes = {
      title: PropTypes.string.isRequired,
      note: PropTypes.string.isRequired,
      onEdit: PropTypes.func,
    };

    NoteItem.defaultProps = {
      onEdit: () => { },
    };
  }

  render = () => (
    <div className="NoteItem-container">
      <div className="NoteItem-title-container">
        <h3 className="NoteItem-title">{this.props.title}</h3>
        <MaterialIcon
          icon="&#xE254;"
          onClick={() => this.props.onEdit()}
          style={{
            cursor: 'pointer',
          }}
        />
      </div>
      <div className="NoteItem-note">{this.props.note}</div>
    </div>
  );
}

export default NoteItem;
