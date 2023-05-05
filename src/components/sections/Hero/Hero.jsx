import React from 'react';
import scss from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={scss.containerHeroBg}>
      <div className={scss.containerHero}>
        <div className={scss.contentHero}>
          <h1 className={scss.textHero}>
            <span className={scss.titleHero}>Webevery</span> &#8212; Створення
            та просування сайтів
            <br />
            &#8594; Маркетинг <br />
            &#8594; Веброзробка <br />
            &#8594; Реклама в інтернеті <br />
            &#8594; Розробляємо якісні сайти з індивідуальним дизайном.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
