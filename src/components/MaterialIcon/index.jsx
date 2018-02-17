import React from 'react';
import { PropTypes } from 'prop-types';

import './MaterialIcon.css';

class MaterialIcon extends React.Component {
  constructor(props) {
    super(props);

    MaterialIcon.propTypes = {
      icon: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      style: PropTypes.object,
    };

    MaterialIcon.defaultProps = {
      onClick: () => { },
      style: {},
    };
  }

  render() {
    return (
      <div
        className="MaterialIcon-container"
        onClick={() => this.props.onClick()}
        onKeyPress={() => this.props.onClick()}
        role="button"
        tabIndex={0}
      >
        <span >
          <i
            className="material-icons"
            style={this.props.style}
          >{this.props.icon}
          </i>
        </span>
      </div>
    );
  }
}

export default MaterialIcon;
