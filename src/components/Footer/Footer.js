import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = ({ count }) => (<div className={styles.wrapper}>Осталось сделать: {count}</div>);

Footer.propTypes = {
  count: PropTypes.number.isRequired
};

export default Footer;