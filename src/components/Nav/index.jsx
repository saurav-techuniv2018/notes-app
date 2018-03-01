import React from 'react';
import { Link } from 'react-router-dom';

import * as styles from './Nav.style';

const Nav = () => (
  <div style={styles.container}>
    <Link to="/new" href="/new" style={styles.link}>Create new note</Link>
    <Link to="/all" href="/all" style={styles.link}>All notes</Link>
  </div>
);

export default Nav;
