import React, { useState } from 'react';
import Button from 'components/share/Button';
import Modal from 'components/share/Modal';
import Form from 'components/share/Form';
import sprite from 'images/sprite.svg';
import styles from './Hero.module.scss';

const Hero = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <section className={styles.containerHeroBg}>
      <div className={styles.containerHero}>
        <div className={styles.contentHero}>
          <h1 className={styles.textHero}>
            Створення веб-сайту з індивідуальним дизайном
          </h1>
          <svg className={styles.logoHero}>
            <use href={sprite + '#icon-logo_mini_tablet'} />
          </svg>
          <Button
            onClick={closeModal}
            className={styles.buttonOrderHero}
            type="button"
            title="Замовити"
            ariaLabel={'Order'}
          />
          {isModalOpen && (
            <Modal onClose={closeModal} isModalOpen={isModalOpen}>
              <Form isOpen={isModalOpen} closeModal={closeModal} />
            </Modal>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
