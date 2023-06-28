import Portal from './Portal';
import styles from './Modal.module.scss';

function Backdrop({ active, closeModal, children }) {
  return (
    <Portal>
      <div
        className={
          active ? styles.backdrop + ' ' + styles.active : styles.backdrop
        }
        onClick={closeModal}
      >
        {children}
      </div>
    </Portal>
  );
}

export default Backdrop;
