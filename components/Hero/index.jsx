import React from 'react';
import Link from 'next/link';
import { InView } from 'react-intersection-observer';
import {  Container} from "../Container";


import { useScrollDispatch } from '../../lib/scrollContext';

// styles
import styles from "./hero.module.css"
import containerStyles from '../Container/container.module.css';


export const Hero = () => {
  const dispatch = useScrollDispatch();
  const handleChange = (inView) => {
    const action = { type: 'scroll', payload: inView };
    dispatch(action);
  };

  return   (

  <Container fullWidth style={{ position: 'relative' }}>
  <InView as="div" onChange={handleChange}>
    <img className={styles.heroImage} src="/img/hero.jpg" alt="coffee" />
  </InView>
  <Container className={styles.heroText}>
    <Container className={styles.heroStandard}>
     
      <Link href="/contact">
        <a className={styles.buttonLink}>Contact</a>
      </Link>
    </Container>
  </Container>
</Container>)}
