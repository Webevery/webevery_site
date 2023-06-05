import React from 'react';
import scss from './Input.module.scss';

const Input = ({
  type = 'text',
  name,
  id,
  label,
  className,
  placeholder,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <div className={scss.inputWrapper}>
      <input
        className={`${scss.input} ${className}`}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Input;
