import React from 'react';
import SocialLink from 'components/share/SocialLink';
import styles from './Footer.module.scss';
import { useModal } from 'hooks';
import Form from 'components/share/Form';
import Modal from 'components/share/Modal/Modal';
import Button from 'components/share/Button/Button';

const Footer = () => {
  const { isModalOpen, closeModal, toggleModal } = useModal();

  return (
    <>
      <footer className={styles.wrapperFooter}>
        <h3 className={styles.copyrightFooter}>
          Copyright &copy; 2023 Webevery
        </h3>
        <Button
          onClick={toggleModal}
          className={styles.btnFooter}
          type="button"
          title="Feedback"
          ariaLabel={'FeedbackFooter'}
        />
        {isModalOpen && (
          <Modal onCloseModal={closeModal} mode="dark">
            <Form closeModal={closeModal} />
          </Modal>
        )}
        <SocialLink
          customBlockSize={styles.socialCircleFooter}
          customIconSize={styles.socialFooter}
        />
      </footer>
    </>
  );
};

export default Footer;
