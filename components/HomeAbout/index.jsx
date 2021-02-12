import React from 'react'
import { Container } from '../Container'
import containerStyles from '../Container/container.module.css'
import styles from './homeAbout.module.css'


export const HomeAbout = () => {
    return (
       <Container flex>
           <Container className={containerStyles.fortyPercent}>
               <span className={styles.greeting}>Welcome</span>
               <h1>sdgvdsgb</h1>
               <p className={styles.about}>svfsdg</p>
               </Container>
           <Container className={containerStyles.half}>rfhrhtrhtrht</Container>
       </Container>
    )
}
