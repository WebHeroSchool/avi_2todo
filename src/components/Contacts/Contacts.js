import React from 'react';

import MailIcon from '@material-ui/icons/Mail';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import SocialList from '../SocialList/SocialList';

import styles from './Contacts.module.css';

const Contacts = () => (
  <div className={styles.wrapper}>
    <a className={styles.link} href="mailto:anya.vigolainen@yandex.ru">
      <MailIcon className={styles.icon} />
      anya.vigolainen@yandex.ru</a>
    <a className={styles.link} href="tel:+79500264318">
      <PhoneRoundedIcon className={styles.icon} />
      +7 950 026 43 18</a>
    <SocialList />
  </div>);


export default Contacts;