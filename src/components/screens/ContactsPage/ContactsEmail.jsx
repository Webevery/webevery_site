import styles from './ContactsPage.module.scss';
import sprite from 'images/symbol-defs.svg';

export const ContactsEmail = () => {
  return (
    <a href="mailto:natalabojko@gmail.com" className={styles.email}>
      <svg>
        <use href={sprite + '#icon-contactsMail'} />
      </svg>
      <p> webforevery@gmail.com</p>
    </a>
  );
};
