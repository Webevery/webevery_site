import styles from './ContactsPage.module.scss';
import sprite from 'images/sprite.svg';

export const ContactsEmail = () => {
  return (
    <a href="mailto:inbox.webevery@gmail.com" className={styles.email}>
      <svg>
        <use href={sprite + '#icon-contactsMail'} />
      </svg>
      <p> inbox.webevery@gmail.com</p>
    </a>
  );
};
