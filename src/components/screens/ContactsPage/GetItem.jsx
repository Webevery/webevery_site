import { contactsData, contactsDataEN, currentLanguages } from 'data';
import styles from './ContactsPage.module.scss';

import sprite from 'images/sprite.svg';
import { useTranslation } from 'react-i18next';

export const GetItem = () => {
  const { i18n } = useTranslation();

  const currentLanguageContactsData = () => {
    return i18n.language === currentLanguages.UA
      ? contactsData
      : contactsDataEN;
  };
  return (
    <ul className={styles.contactsList}>
      {currentLanguageContactsData().map(({ id, country, tel, location }) => {
        return (
          <li key={id}>
            <h2>{country}</h2>

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
