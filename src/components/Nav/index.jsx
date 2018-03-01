import { PropTypes } from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

import Button from '../Button';

import * as styles from './Nav.style';

const Nav = props => (
  <div style={styles.container}>
    <h1 style={styles.header}>Notes App</h1>
    <Button
      label="Create new note"
      onClick={() => props.history.push('/new')}
      style={styles.link}
    />
    <Button
      label="All notes"
      onClick={() => props.history.push('/all')}
      style={styles.link}
    />
  </div>
);

Nav.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Nav);
