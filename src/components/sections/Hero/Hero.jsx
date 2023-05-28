import React, { useState } from 'react';
import Button from 'components/share/Button';
import Modal from 'components/share/Modal';
import Form from 'components/share/Form';
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
          {/* <button className={styles.btnHero} type="button">
            Замовити
          </button> */}
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

/* <h1 className={styles.textHero}>
            <span className={styles.titleHero}>Webevery</span> &#8212; Створення
            та просування сайтів
            <br />
            &#8594; Маркетинг <br />
            &#8594; Веброзробка <br />
            &#8594; Реклама в інтернеті <br />
            &#8594; Розробляємо якісні сайти з індивідуальним дизайном.
          </h1> */
