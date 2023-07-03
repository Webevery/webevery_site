import { useEffect } from 'react';
import Portal from './Portal';
import Backdrop from './Backdrop';
import styles from './Modal.module.scss';

function Modal({ active, closeModal, children }) {
  useEffect(() => {
    const onKeydown = e => {
      if (e.code !== 'Escape') return;
      closeModal();
    };

    window.addEventListener('keydown', onKeydown);
    return () => window.removeEventListener('keydown', onKeydown);
  }, [closeModal]);

  return (
    <Portal>
      <Backdrop active={active} closeModal={closeModal}>
        <div
          onClick={e => e.stopPropagation()}
          className={
            active
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
