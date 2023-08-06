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

  return (
    <section className={styles.containerHeroBg}>
      <div className={styles.containerHero}>
        <div className={styles.contentHero}>
          <div className={styles.textHeroWrapperEn}>
            <h2 className={styles.textHeroEn}>Empowering your success</h2>
          </div>
          {/* {i18n.language === 'en' && (
            <div className={styles.textHeroWrapperEn}>
              <h2 className={styles.textHeroEn}>Empowering your success</h2>
            </div>
          )}
          {i18n.language === 'ua' && (
            <div className={styles.textHeroWrapperEn}>
              <h2 className={styles.textHeroEn}>Розширення можливостей</h2>
              <h2>вашого успіху</h2>
            </div>
          )} */}
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
