import { PropTypes } from 'prop-types';
import React from 'react';

import './Title.css';

class Title extends React.Component {
  constructor(props) {
    super(props);

    Title.propTypes = {
      value: PropTypes.string.isRequired,
    };
  }

  render() {
    return (
      <h1>{this.props.value}</h1>
    );
  }
}

export default Title;
