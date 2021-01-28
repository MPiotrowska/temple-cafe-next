import React from "react";
import Link from "next/link";

import { Container } from "../Container";

// styles
import styles from "./heroContact.module.css";
import containerStyles from "../Container/container.module.css";

export const HeroContact = () => {
  return (
    <Container className={containerStyles.half}>
      <h1 className={styles.hasUniqueBackground}> Whatever</h1>

      <Link href="/contact">
        <a className={styles.buttonLink}>Contact</a>
      </Link>
    </Container>
  );
};
