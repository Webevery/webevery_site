import styles from './ContactsPage.module.scss';
import Button from '../../share/Button/Button';
import { GetItem } from './GetItem';
import { ContactsEmail } from './ContactsEmail';
import React, { useState } from 'react';
import Modal from 'components/share/Modal';
import Form from 'components/share/Form';

import { Helmet } from 'react-helmet-async';

const ContactsPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <section className={styles.contactsSection}>
      <Helmet>
        <title>Розробка сайтів. Наші контакти</title>
        <meta
          name="description"
          content="Контакти наших розробників веб-сайтів в Україні та інших країнах Європи."
        />
        <link rel="canonical" href="contacts" />
      </Helmet>
      <h1>Розробка сайтів. Наші контакти</h1>
      <div className={styles.contactsWrapper}>
        <GetItem />
        <ContactsEmail />
        <Button
          title="Замовити дзвінок"
          className={styles.contactsBtn}
          onClick={closeModal}
        />
        <Form className={styles.contactsForm} />
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
