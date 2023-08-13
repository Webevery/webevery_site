import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
// import EN from '../../../images/EN.gif';
// import UA from '../../../images/UA.gif';
import styles from './LanguageBtnBlock.module.scss';
import sprite from '../../../images/sprite.svg';

const options = [
  {
    id: 1,
    label: 'EN',
    value: 'en',
  },
  {
    id: 2,
    label: 'UA',
    value: 'ua',
  },
];

const LanguageBtnBlock = ({ mobile, desk }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const rootEl = useRef(null);

  const changeLanguage = e => {
    const whatLanguage = e.target.value;
    localStorage.setItem('whatLanguage', whatLanguage);
    const language = localStorage.getItem('whatLanguage');

    setIsOpen(false);

    i18n.changeLanguage(language);
  };
  const language = localStorage.getItem('whatLanguage');

  useEffect(() => {
    const onClick = e => rootEl.current.contains(e.target) || setIsOpen(false);
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className={mobile ? mobile : desk} ref={rootEl}>
      {/* <button
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
      </button> */}

      <div className={styles.dropdown}>
        <button
          className={styles.dropBtn}
          type="button"
          onClick={e => {
            setIsOpen(prev => !prev);
          }}
        >
          {language || 'UA'}
          <svg
            className={
              isOpen ? styles.svg + ' ' + styles.svgActive : styles.svg
            }
          >
            <use href={`${sprite}#icon-chevron-down`} />
          </svg>
        </button>
        {isOpen && (
          <div
            className={
              isOpen
                ? styles.dropdownContent + ' ' + styles.dropdownContentActive
                : styles.dropdownContent
            }
          >
            {options.map(({ id, label, value }) => (
              <div key={id} className={styles.dropdownBlock}>
                <label htmlFor={value} className={styles.label}>
                  {label}
                  <input
                    onClick={e => changeLanguage(e)}
                    type="text"
                    id={value}
                    name={value}
                    defaultValue={value}
                    className={styles.input}
                  />
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* <div className={styles.customeSelect}> */}
      {/* <select
        className={styles.dropBtn}
        value={language || ''}
        onChange={changeLanguage}
      >
        {options.map((option, idx) => (
          <option
            key={idx}
            className={styles.changeLangItem}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select> */}
    </div>
    // </div>
  );
};

export default LanguageBtnBlock;
