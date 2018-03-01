import { PropTypes } from 'prop-types';
import React from 'react';

import './Button.css';

const Button = props => (
  <button
    className="NewNote-button"
    onClick={args => props.onClick(args)}
    style={props.style}
  >
    {props.label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

Button.defaultProps = {
  label: '',
  onClick: () => { },
  style: {},
};

export default Button;
