import React from 'react';
import { useTranslation } from 'react-i18next';
import EN from '../../../images/EN.gif';
import UA from '../../../images/UA.gif';
import styles from './LanguageBtnBlock.module.scss';

const LanguageBtnBlock = () => {
  const { i18n } = useTranslation();
  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <button
        className={styles.button}
        type="button"
        onClick={() => changeLanguage('ua')}
      >
        <img className={styles.img} width={30} src={UA} alt="Your SVG" />
      </button>
      <button
        className={styles.button}
        type="button"
        onClick={() => changeLanguage('en')}
      >
        <img src={EN} width={30} alt="Your SVG" />
      </button>
    </div>
  );
};

export default LanguageBtnBlock;
