import React from "react";
import Link from "next/link";

import { Container } from "../Container";

// styles
import styles from "./heroContact.module.css";
import containerStyles from "../Container/container.module.css";

export const HeroContact = () => {
  return (
    <Container className={containerStyles.half} alignment="right">
      <h1 className={styles.hasUniqueBackground}> Temple Café</h1>
      <h3 className={styles.address}>815 London Rd, Southend-on-Sea,
Westcliff-on-Sea SS0 9SY</h3>


      <Link href="/contact">
        <a className={styles.buttonLink}>Contact</a>
      </Link>
    </Container>
  );
};
