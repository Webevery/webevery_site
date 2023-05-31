// import React from 'react';
import styles from './Form.module.scss';
import sprite from '../../../images/symbol-defs.svg';

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
          +12 345 678 90 00
        </li>
        <li className={styles.contactsItem}>
          <svg className={styles.iconItem}>
            <use href={sprite + '#envelope'} />
          </svg>
          google@gmail.com
        </li>
      </ul>
    </div>
  );
};

export default OurContacts;

//  rfc  rafc
