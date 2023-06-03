import styles from './Form.module.scss';

const ButtomSubmit = ({ validForm }) => {
  return (
    <div>
      <button
        className={
          validForm
            ? styles.btnSubmit + ' ' + styles.btnActiv
            : styles.btnSubmit
        }
        disabled={!validForm}
      >
        Відправити
      </button>
    </div>
  );
};

export default ButtomSubmit;
