import React from 'react';
import styles from './Button.module.scss';

const Button = ({ onClick, title, type, className, id, ariaLabel }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} ${styles.button} `}
      id={id}
      aria-label={ariaLabel}
    >
      {title}
    </button>
  );
};

export default Button;
