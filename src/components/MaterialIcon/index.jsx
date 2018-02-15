import React from 'react';
import { PropTypes } from 'prop-types';

import './MaterialIcon.css';

class MaterialIcon extends React.Component {
  constructor(props) {
    super(props);

    MaterialIcon.propTypes = {
      icon: PropTypes.string.isRequired,
    };
  }

  render() {
    return (
      <span className="MaterialIcon-container">
        <i className="material-icons">{this.props.icon}</i>
      </span>
    );
  }
}

export default MaterialIcon;
