import React from "react";

import { InView } from "react-intersection-observer";
import { Container } from "../Container";
import { useScrollDispatch } from "../../lib/scrollContext";

// styles
import styles from "./hero.module.css";
import { HeroContact } from "../HeroContact";

export const Hero = () => {
  const dispatch = useScrollDispatch();
  const handleChange = (inView) => {
    const action = { type: "scroll", payload: inView };
    dispatch(action);
  };

  return (
    <Container fullWidth style={{ position: "relative" }}>
      <InView as="div" onChange={handleChange}>
        <img className={styles.heroImage} src="/img/hero.jpg" alt="coffee" />
      </InView>
      <Container fullWidth className={styles.heroText}>
        <HeroContact />
      </Container>
    </Container>
  );
};
