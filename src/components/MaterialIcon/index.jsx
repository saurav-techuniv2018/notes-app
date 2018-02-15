import React from 'react';
import { PropTypes } from 'prop-types';

class MaterialIcon extends React.Component {
  constructor(props) {
    super(props);

    MaterialIcon.propTypes = {
      icon: PropTypes.string.isRequired,
    };
  }

  render() {
    return (
      <span><i className="material-icons">{this.props.icon}</i></span>
    );
  }
}

export default MaterialIcon;
