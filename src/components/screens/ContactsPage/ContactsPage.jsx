import { useState } from 'react';
import Button from '../../share/Button/Button';
import { GetItem } from './GetItem';
import { ContactsEmail } from './ContactsEmail';
import Modal from 'components/share/Modal';
import Form from 'components/share/Form';
import styles from './ContactsPage.module.scss';

const ContactsPage = () => {
  const [modalActive, setModalActive] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  function openModal() {
    setShouldRender(true);
    setTimeout(() => {
      setModalActive(true);
    }, 0);
  }

  function closeModal() {
    setModalActive(false);
    setTimeout(() => {
      setShouldRender(false);
    }, 1000);
  }

  return (
    <section className={styles.contactsSection}>
      <div className={styles.contactsWrapper}>
        <GetItem />
        <ContactsEmail />
        <Button
          title="Замовити дзвінок"
          className={styles.contactsBtn}
          onClick={openModal}
        />
        <Form className={styles.contactsForm} />
      </div>
      {shouldRender && (
        <Modal closeModal={closeModal} active={modalActive}>
          <Form isOpen={modalActive} closeModal={closeModal} />
        </Modal>
      )}
    </section>
  );
};

export default ContactsPage;
