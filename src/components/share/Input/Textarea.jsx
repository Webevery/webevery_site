import React from 'react';
import styles from './Input.module.scss';

const Textarea = ({
  type = 'text',
  name,
  id,
  label,
  customStyle,
  placeholder,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <textarea
        className={`${styles.input} ${customStyle}`}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      >
        {value}
      </textarea>
      <label className={styles.labelTextarea} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Textarea;
