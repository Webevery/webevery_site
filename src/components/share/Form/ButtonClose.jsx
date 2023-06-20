import styles from './Form.module.scss';
import sprite from 'images/sprite.svg';

const ButtonClose = ({ closeModal, className }) => {
  return (
    <button
      type="button"
      className={`${styles.closeBtn} ${className}`}
      onClick={closeModal}
    >
      <svg className={styles.iconClose}>
        <use href={sprite + '#close'} />
      </svg>
    </button>
  );
};

export default ButtonClose;
