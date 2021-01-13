import React from 'react';
import styles from '../../styles/home.module.css';

export const Main = ({ children }) => {
  return <main className={styles.main} >{children}</main>;
};
