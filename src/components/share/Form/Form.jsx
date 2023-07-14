import { useEffect } from 'react';
import { useValidation } from 'hooks';
import Input from '../Input';
import Textarea from '../Input/Textarea';
import OurContacts from './OurContacts';
import ButtonClose from './ButtonClose';
import ButtomSubmit from './ButtomSubmit';
import styles from './Form.module.scss';
import { useTranslation } from 'react-i18next';

function Form({ isOpen, closeModal, className }) {
  const { t } = useTranslation();
  const {
    userName,
    phone,
    mail,
    comments,
    dirtyUserName,
    dirtyPhone,
    dirtyMail,
    validForm,
    formRef,
    formSubmit,
    handleChange,
    handleBlur,
    errorUserName,
    errorPhone,
    errorMail,
    errorComments,
  } = useValidation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className={`${styles.container} ${className}`}>
      <ButtonClose closeModal={closeModal} className={className} />
      <form
        ref={formRef}
        onSubmit={formSubmit}
        className={isOpen ? styles.form : styles.moveWrap + ' ' + styles.active}
      >
        <div className={styles.wrapGroup}>
          <div className={styles.wrapError}>
            {dirtyUserName && errorUserName && (
              <div className={styles.error}>{errorUserName}</div>
            )}
            <Input
              type="text"
              id="nameId"
              name="name"
              value={userName}
              className={
                errorUserName && dirtyUserName ? styles.inputError : ' '
              }
              label={t('form.name')}
              placeholder=" "
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className={styles.wrapError}>
            {dirtyPhone && errorPhone && (
              <div className={styles.error}>{errorPhone}</div>
            )}
            <Input
              type="tel"
              id="phoneId"
              name="phone"
              value={phone}
              className={errorPhone && dirtyPhone ? styles.inputError : ' '}
              label="+380123456789"
              placeholder=" "
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div className={styles.wrapError}>
            {dirtyMail && errorMail && (
              <div className={styles.error}>{errorMail}</div>
            )}
            <Input
              type="email"
              id="emailId"
              name="mail"
              value={mail}
              className={errorMail && dirtyMail ? styles.inputError : ' '}
              label="google@gmail.com"
              placeholder=" "
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>

        <div className={styles.wrapError}>
          {errorComments && (
            <div className={styles.error + ' ' + styles.errorField}>
              {errorComments}
            </div>
          )}

          <Textarea
            customStyle={
              errorComments
                ? styles.textarea + ' ' + styles.inputError
                : styles.textarea
            }
            type="text"
            id="commentsId"
            name="comments"
            value={comments}
            // label="Опишіть Вашу Ідею"
            label={t('form.idea')}
            placeholder=" "
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <ButtomSubmit validForm={validForm} />
      </form>
      <OurContacts />
    </div>
  );
}

export default Form;
