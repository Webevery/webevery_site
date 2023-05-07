import React from 'react';
import styles from './Select.module.scss';

const Select = ({ value, getValue }) => {
  return (
    <div className={styles.selectWrap}>
      <select onChange={getValue} value={value} className={styles.select}>
        <option value="type" hidden>
          Виберіть тип сайту
        </option>
        <option value="visit">Сайт візитка</option>
        <option value="landind">Landing Page</option>
        <option value="business">Сайт для бізнесу</option>
        <option value="catalog">Сайт каталог</option>
      </select>
    </div>
  );
};

export default Select;
