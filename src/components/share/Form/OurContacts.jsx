import styles from './Form.module.scss';
import sprite from 'images/sprite.svg';
import { useTranslation } from 'react-i18next';

const OurContacts = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.contactsWrap}>
      <hr />
      <ul className={styles.contactsList}>
        <li className={styles.contactsItem}>{t('form.contactUs')}</li>
        <li className={styles.contactsItem}>
          <a href="tel:+380503738465">
            <svg className={styles.iconItem}>
              <use href={sprite + '#icon-telephone'} />
            </svg>
            +380 50 373 8465
          </a>
        </li>
        <li className={styles.contactsItem}>
          <a href="mailto:inbox.webevery@gmail.com">
            <svg className={styles.iconItem}>
              <use href={sprite + '#envelope'} />
            </svg>
            inbox.webevery@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default OurContacts;

//  rfc  rafc
