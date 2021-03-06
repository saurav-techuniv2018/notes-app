import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './NewItem.css';
import MaterialIcon from '../MaterialIcon';
import { noteShape } from '../../models/note';
import { setCurrentNote } from '../../redux/actions';

class NoteItem extends React.Component {
  static mapDispatchToProps = dispatch => ({
    onEdit: (note, ownProps) => {
      dispatch(setCurrentNote(note));
      ownProps.history.push('/edit-note');
    },
  });

  render = () => (
    <div className="NoteItem-container">
      <div className="NoteItem-title-container">
        <h3 className="NoteItem-title">{this.props.note.title}</h3>
        <MaterialIcon
          icon="&#xE254;"
          onClick={() => this.props.onEdit(this.props.note, this.props)}
          style={{
            cursor: 'pointer',
          }}
        />
      </div>
      <div className="NoteItem-note">{this.props.note.note}</div>
    </div>
  );
}

NoteItem.propTypes = {
  note: PropTypes.shape(noteShape).isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default withRouter(connect(null, NoteItem.mapDispatchToProps)(NoteItem));
