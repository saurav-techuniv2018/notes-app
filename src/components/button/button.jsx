import { PropTypes } from 'prop-types';
import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);

    Button.propTypes = {
      label: PropTypes.string,
    };

    Button.defaultProps = {
      label: '',
    };
  }

  render = () => (
    <button id="save-button">{this.props.label}</button>
  );
}

export default Button;
