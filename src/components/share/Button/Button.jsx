import React from 'react';

const Button = ({ onClick, title, type, className, id, ariaLabel }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={className}
      id={id}
      aria-label={ariaLabel}
    >
      {title}
    </button>
  );
};

export default Button;
