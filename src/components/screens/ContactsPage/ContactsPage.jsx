import styles from './ContactsPage.module.scss';
import Button from '../../share/Button/Button';
import { GetItem } from './GetItem';
import { ContactsEmail } from './ContactsEmail';
import React, { useState } from 'react';
import Modal from 'components/share/Modal';
import Form from 'components/share/Form';

const ContactsPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <section className={styles.contactsSection}>
      <div className={styles.contactsWrapper}>
        <GetItem />
        <ContactsEmail />
        <Button
          title="Замовити дзвінок"
          className={styles.contactsBtn}
          onClick={closeModal}
        />
        <Form className={styles.contactsForm} />
        {/* <Form /> */}
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal} isModalOpen={isModalOpen}>
          <Form isOpen={isModalOpen} closeModal={closeModal} />
        </Modal>
      )}
    </section>
  );
};

export default ContactsPage;
