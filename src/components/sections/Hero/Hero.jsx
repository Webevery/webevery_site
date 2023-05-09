import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.containerHeroBg}>
      <div className={styles.containerHero}>
        <div className={styles.contentHero}>
          <h1 className={styles.textHero}>
            <span className={styles.titleHero}>Webevery</span> &#8212; Створення
            та просування сайтів
            <br />
            &#8594; Маркетинг <br />
            &#8594; Веброзробка <br />
            &#8594; Реклама в інтернеті <br />
            &#8594; Розробляємо якісні сайти з індивідуальним дизайном.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
