import React from 'react';
import styles from './footer.module.css';
import data from "../../mocks/data.json"

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.caseTitle}
        href="https://www.google.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Cookie Policy
      </a>
      <a
        className={styles.caseTitle}
        href="https://www.google.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </a>

      <a
        href={data.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={data.instagram.image}
          alt={data.instagram.altText}
          // className={styles.logo}
        />
      </a>
      <a
        href={data.facebook.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={data.facebook.image}
          alt={data.facebook.altText}
          // className={styles.logo}
        />
      </a>
   
    </footer>
  );
};
