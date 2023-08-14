import React from 'react';
import { useTranslation } from 'react-i18next';
import { useModal } from 'hooks';

import styles from './HomePage.module.scss';
import ua from './ua.module.scss';
import en from './en.module.scss';

import Button from 'components/share/Button';
import Modal from 'components/share/Modal';
import Form from 'components/share/Form';
import sprite from 'images/sprite.svg';

const HomePage = () => {
  const { modalActive, shouldRender, openModal, closeModal } = useModal();
  const { t, i18n } = useTranslation();
  // console.log(i18n.language);

  return (
    <section className={styles.home}>
      {i18n.language === 'en' ? (
        <div className={styles.titleWrap}>
          <div className={en.titleWrapEn}>
            <h1 className={styles.title + ' ' + en.titleEn}>
              Empowering your success
            </h1>
          </div>
        </div>
      ) : (
        <div className={styles.titleWrap}>
          <div className={ua.titleWrapUa}>
            <h1 className={styles.title + ' ' + ua.titleUa}>
              Розширення можливостей
            </h1>
          </div>
          <div className={ua.titleWrapUa2}>
            <h2 className={styles.title + ' ' + ua.titleUa2}>вашого успіху</h2>
          </div>
        </div>
      )}

      <svg className={styles.logo}>
        <use href={sprite + '#icon-logo_mini_tablet'}></use>
      </svg>

      <Button
        onClick={openModal}
        className={styles.btn}
        type="button"
        title={t('HERO.heroButton')}
        ariaLabel={'Order'}
      />

      {shouldRender && (
        <Modal closeModal={closeModal} active={modalActive}>
          <Form isOpen={modalActive} closeModal={closeModal} />
        </Modal>
      )}
    </section>
  );
};

export default HomePage;
