import { PropTypes } from 'prop-types';
import React from 'react';

import './Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    Footer.propTypes = {
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    };
  }

  render = () => (
    <footer className="Footer-container" >
      <button
        className="Footer-button"
        onClick={() => this.props.onClick()}
      >{this.props.label}
      </button>
    </footer>
  );
}
export default Footer;
