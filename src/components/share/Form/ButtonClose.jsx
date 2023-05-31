import styles from './Form.module.scss';
import sprite from '../../../images/symbol-defs.svg';

const ButtonClose = ({ closeModal }) => {
  return (
    <button type="button" className={styles.closeBtn} onClick={closeModal}>
      <svg className={styles.iconClose}>
        <use href={sprite + '#icon-close'} />
      </svg>
    </button>
  );
};

export default ButtonClose;
