import styles from './Form.module.scss';
import { useTranslation } from 'react-i18next';

const ButtomSubmit = ({ validForm }) => {
  const { t } = useTranslation();
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
        {t('form.buttonSubmit')}
      </button>
    </div>
  );
};

export default ButtomSubmit;
