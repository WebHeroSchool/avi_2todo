import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = ({ activeTaskCount, noActiveTaskCount }) => (
  <div className={styles.wrapper}>
    <p>Осталось сделать: {activeTaskCount}</p>
    <p>Готово: {noActiveTaskCount}</p>
  </div>);

Footer.propTypes = {
  activeTaskCount: PropTypes.number.isRequired,
  noActiveTaskCount: PropTypes.number.isRequired
};

export default Footer;