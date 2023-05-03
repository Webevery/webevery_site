import React from 'react';
import scss from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={scss.containerHeroBg}>
      <div className={scss.containerHero}>
        <div className={scss.contentHero}>
          <h1 className={scss.textHero}>
            <span className={scss.titleHero}>Webevery</span> &#8212; Lorem ipsum
            <br />
            dolor sit amet consectetur adipisicing elit. Recusandae beatae
            exercitationem officia possimus magni id error animi.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
