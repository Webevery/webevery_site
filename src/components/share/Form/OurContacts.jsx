import styles from './Form.module.scss';
import sprite from 'images/sprite.svg';

const OurContacts = () => {
  return (
    <div className={styles.contactsWrap}>
      <hr />
      <ul className={styles.contactsList}>
        <li className={styles.contactsItem}>або зв’яжіться з нами</li>
        <li className={styles.contactsItem}>
          <svg className={styles.iconItem}>
            <use href={sprite + '#icon-telephone'} />
          </svg>
          +380 50 373 8465
        </li>
        <li className={styles.contactsItem}>
          <svg className={styles.iconItem}>
            <use href={sprite + '#envelope'} />
          </svg>
          inbox.webevery@gmail.com
        </li>
      </ul>
    </div>
  );
};

export default OurContacts;

//  rfc  rafc
