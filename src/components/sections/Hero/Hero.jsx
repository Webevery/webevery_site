import { useModal } from 'hooks';
import Button from 'components/share/Button';
import Modal from 'components/share/Modal';
import Form from 'components/share/Form';
import sprite from 'images/sprite.svg';
import styles from './Hero.module.scss';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { modalActive, shouldRender, openModal, closeModal } = useModal();
  const { t, i18n } = useTranslation();
  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  return (
    <section className={styles.containerHeroBg}>
      <div className={styles.containerHero}>
        <div className={styles.contentHero}>
          {/* <h1 className={styles.textHero}>
            Створення веб-сайту з індивідуальним дизайном
          </h1> */}
          <h1 className={styles.textHero}>{t('hero')}</h1>
          <svg className={styles.logoHero}>
            <use href={sprite + '#icon-logo_mini_tablet'} />
          </svg>{' '}
          <div>
            <button type="button" onClick={() => changeLanguage('ua')}>
              ua
            </button>
            <button type="button" onClick={() => changeLanguage('en')}>
              en
            </button>
          </div>
          <Button
            onClick={openModal}
            className={styles.buttonOrderHero}
            type="button"
            // title="Замовити"
            title={t('heroButton')}
            ariaLabel={'Order'}
          />
          {shouldRender && (
            <Modal closeModal={closeModal} active={modalActive}>
              <Form isOpen={modalActive} closeModal={closeModal} />
            </Modal>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
