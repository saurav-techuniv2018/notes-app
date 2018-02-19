import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import './NewItem.css';
import MaterialIcon from '../MaterialIcon';
import { noteShape } from '../../models/note';
import { switchPage } from '../../redux/actions';

class NoteItem extends React.Component {
  static mapDispatchToProps = dispatch => ({
    onEdit: (note) => {
      dispatch(switchPage(2, note));
    },
  });

  constructor(props) {
    super(props);

    NoteItem.propTypes = {
      note: PropTypes.shape(noteShape).isRequired,
      onEdit: PropTypes.func.isRequired,
    };
  }

  render = () => (
    <div className="NoteItem-container">
      <div className="NoteItem-title-container">
        <h3 className="NoteItem-title">{this.props.note.title}</h3>
        <MaterialIcon
          icon="&#xE254;"
          onClick={() => this.props.onEdit(this.props.note)}
          style={{
            cursor: 'pointer',
          }}
        />
      </div>
      <div className="NoteItem-note">{this.props.note.note}</div>
    </div>
  );
}

export default connect(null, NoteItem.mapDispatchToProps)(NoteItem);
