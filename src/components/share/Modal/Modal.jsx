import React, { useEffect } from 'react';
import Portal from './Portal';
import Backdrop from './Backdrop';
import styles from './Modal.module.scss';

function Modal({ isModalOpen, onClose, children }) {
  useEffect(() => {
    const onKeydown = e => {
      if (e.code !== 'Escape') return;
      onClose();
    };

    window.addEventListener('keydown', onKeydown);
    return () => window.removeEventListener('keydown', onKeydown);
  }, [onClose]);

  function onBackdropClick(e) {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }
  return (
    <Portal>
      <Backdrop isModalOpen={isModalOpen} onClose={onBackdropClick}>
        <div
          className={
            isModalOpen
              ? styles.modalContent + ' ' + styles.activeContent
              : styles.modalContent
          }
        >
          {children}
        </div>
      </Backdrop>
    </Portal>
  );
}
export default Modal;
