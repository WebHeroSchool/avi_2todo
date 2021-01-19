import React from 'react';
import styles from './Footer.module.css'

const Footer = ({ count }) => (<div className={styles.wrapper}>Осталось сделать: {count}</div>);


export default Footer;