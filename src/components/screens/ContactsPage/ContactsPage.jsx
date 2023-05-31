import styles from './ContactsPage.module.scss';
import Button from '../../share/Button/Button';
import { GetItem } from './GetItem';
import { ContactsEmail } from './ContactsEmail';

const ContactsPage = () => {
  return (
    <section className={styles.contactsSection}>
      <div className={styles.contactsWrapper}>
        <GetItem />
        <ContactsEmail />
        <Button title="Замовити дзвінок" className={styles.contactsBtn} />
      </div>
    </section>
  );
};

export default ContactsPage;
