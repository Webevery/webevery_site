import { contactsData } from 'data';
import styles from './ContactsPage.module.scss';

import sprite from 'images/symbol-defs.svg';

export const GetItem = () => {
  return (
    <ul className={styles.contactsList}>
      {contactsData.map(({ id, country, tel, location }) => {
        return (
          <li key={id}>
            <h4>{country}</h4>

            <a href={'tel:' + tel}>
              <svg>
                <use href={sprite + '#icon-contactsTel'} />
              </svg>
              <p> {tel}</p>
            </a>

            <p>
              <svg>
                <use href={sprite + '#icon-contactsLocation'} />
              </svg>
              {location}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
