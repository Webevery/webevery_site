import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Input from '../Input';
import Textarea from '../Input/Textarea';
import OurContacts from './OurContacts';
import ButtonClose from './ButtonClose';
import ButtomSubmit from './ButtomSubmit';
import styles from './Form.module.scss';

function Form({ isOpen, closeModal, className }) {
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [comments, setComments] = useState('');

  const [dirtyUserName, setDirtyUserName] = useState(false);
  const [dirtyPhone, setDirtyPhone] = useState(false);
  const [dirtyMail, setDirtyMail] = useState(false);

  const [errorUserName, setErrorUserName] = useState('Заповніть це поле');
  const [errorPhone, setErrorPhone] = useState('Заповніть це поле');
  const [errorMail, setErrorMail] = useState('Заповніть це поле');
  const [errorComments, setErrorComments] = useState('');

  const [validForm, setvalidForm] = useState(false);

  const formRef = useRef();

  useEffect(() => {
    if (errorUserName || errorPhone || errorMail || errorComments) {
      setvalidForm(false);
    } else {
      setvalidForm(true);
    }
  }, [errorUserName, errorPhone, errorMail, errorComments]);

  const formSubmit = evt => {
    evt.preventDefault();
    emailjs
      .sendForm(
        'service_ev052ym',
        'template_8yoqdiq',
        formRef.current,
        'zclTBta73h84T_Mq5'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );

    reset();
    toast.success('Повідомлення надіслано!');
    closeModal();
  };

  const reset = () => {
    setUserName('');
    setComments('');
    setPhone('');
    setMail('');
    setDirtyUserName(false);
    setDirtyMail(false);
    setDirtyPhone(false);
    setErrorUserName('Заповніть це поле');
    setErrorPhone('Заповніть це поле');
    setErrorMail('Заповніть це поле');
    setErrorComments('');
  };

  const validateName = value => {
    if (value.length < 2) {
      setErrorUserName('Ім’я має бути довшим');
      if (value.length === 0) {
        setErrorUserName('Заповніть це поле');
      }
    } else if (value.length > 30) {
      setErrorUserName('Ім’я має бути коротшим');
    } else {
      setErrorUserName('');
    }
  };

  const validateComments = value => {
    if (value.length > 300) {
      setErrorComments('Коментар має бути коротшим');
    } else {
      setErrorComments('');
    }
  };

  function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;

    if (!re.test(email)) {
      setErrorMail('Не коректний email');
    } else {
      setErrorMail('');
    }
  }

  function validatePhone(phone) {
    // let re = /^\+([0-9]{2})\)?(([0-9]{3}))?[-. ]?([0-9]{3})?([0-9]{4})$/;
    let re = /^\+\d{12}$/;

    if (!re.test(phone)) {
      setErrorPhone('Не вірний формат');
    } else {
      setErrorPhone('');
    }
  }

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        if (evt.target.value.length > 30) return;
        validateName(value);
        setUserName(value);

        break;

      case 'comments':
        if (evt.target.value.length > 301) return;
        validateComments(value);
        setComments(value);
        break;

      case 'phone':
        if (evt.target.value.length > 13) return;
        validatePhone(value);
        setPhone(value);
        break;

      case 'mail':
        if (evt.target.value.length > 40) return;
        validateEmail(value);
        setMail(value);
        break;

      default:
        return;
    }
  };

  const handleBlur = evt => {
    switch (evt.target.name) {
      case 'name':
        setDirtyUserName(true);
        break;
      case 'mail':
        setDirtyMail(true);
        break;
      case 'phone':
        setDirtyPhone(true);
        break;

      default:
        return;
    }
  };

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
              label="Ім’я, Прізвище"
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
            label="Опишіть Вашу Ідею"
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
