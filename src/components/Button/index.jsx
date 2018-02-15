import { PropTypes } from 'prop-types';
import React from 'react';

import './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);

    Button.propTypes = {
      label: PropTypes.string,
      onClick: PropTypes.func,
    };

    Button.defaultProps = {
      label: '',
      onClick: () => { },
    };
  }

  render = () => (
    <button
      className="NewNote-button"
      onClick={args => this.props.onClick(args)}
    >
      {this.props.label}
    </button>
  );
}

export default Button;
