import React from 'react'
import { Container } from '../Container'
import containerStyles from '../Container/container.module.css'
import styles from './homeAbout.module.css'


export const HomeAbout = () => {
    return (
       <Container flex>
           <Container className={containerStyles.fortyPercent}>
               <span className={styles.greeting}>Welcome to Temple Cafe</span>
              <h2 className={styles.intro}>Taste a delicious food and the best cakes in town</h2>
               <p className={styles.about}>Within a pretty garden setting, The Temple Café is situated opposite Chalkwell Park. We have created a warm and relaxed space where everyone is welcome. Come and drink tea with friends and stay for lunch. We specialise in freshly made to order sandwiches,
nutritious salads, buttery jacket spuds and home-made soups plus so much more. We also have a wide selection of vegan and vegetarian options available. Each dish is lovingly made and served by our Temple Team who are made up of volunteers and staff.</p>
               </Container>
           <Container className={containerStyles.half}>rfhrhtrhtrht</Container>
       </Container>
    )
}
