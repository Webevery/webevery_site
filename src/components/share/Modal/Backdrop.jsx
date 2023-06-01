import React from 'react';
import Portal from './Portal';
import styles from './Modal.module.scss';

function Backdrop({ isModalOpen, onClose, children }) {
  return (
    <Portal>
      <div
        className={
          isModalOpen ? styles.backdrop + ' ' + styles.active : styles.backdrop
        }
        onClick={onClose}
      >
        {children}
      </div>
    </Portal>
  );
}

export default Backdrop;
