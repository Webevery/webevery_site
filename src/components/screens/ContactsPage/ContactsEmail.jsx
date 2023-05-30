import styles from './ContactsPage.module.scss';
import sprite from 'images/contactsImgs/symbol-defs.svg';

export const ContactsEmail = () => {
  return (
    <a href="mailto:natalabojko@gmail.com" className={styles.email}>
      <svg>
        <use href={sprite + '#icon-mail'} />
      </svg>
      <p> webforevery@gmail.com</p>
    </a>
  );
};
