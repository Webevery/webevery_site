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

  // console.log(i18n);

  return (
    <section className={styles.containerHeroBg}>
      <div className={styles.containerHero}>
        <div className={styles.contentHero}>
          {i18n.language === 'ua' && (
            <div
              className={
                styles.textHero2Wrapper + ' ' + styles.textHero2WrapperUa
              }
            >
              <h1 className={styles.textHero2}>{t('HERO.hero')}</h1>
            </div>
          )}
          {i18n.language === 'en' && (
            <div
              className={
                styles.textHero2Wrapper + ' ' + styles.textHero2WrapperEn
              }
            >
              <h1 className={styles.textHero2}>{t('HERO.hero')}</h1>
            </div>
          )}
          <svg className={styles.logoHero}>
            <use href={sprite + '#icon-logo_mini_tablet'} />
          </svg>{' '}
          <Button
            onClick={openModal}
            className={styles.buttonOrderHero}
            type="button"
            title={t('HERO.heroButton')}
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
