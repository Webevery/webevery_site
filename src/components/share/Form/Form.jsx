import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Input from '../Input';
import Textarea from '../Input/Textarea';
import OurContacts from './OurContacts';
import ButtonClose from './ButtonClose';
import ButtomSubmit from './ButtomSubmit';
import styles from './Form.module.scss';

function Form({ isOpen, closeModal }) {
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [comments, setComments] = useState('');

  const [dirtyUserName, setDirtyUserName] = useState(false);
  const [dirtyPhone, setDirtyPhone] = useState(false);
  const [dirtyMail, setDirtyMail] = useState(false);

  const [errorUserName, setErrorUserName] = useState(
    'Це поле не може бути пустим'
  );
  const [errorPhone, setErrorPhone] = useState('Це поле не може бути пустим');
  const [errorMail, setErrorMail] = useState('Це поле не може бути пустим');
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

    const data = {
      userName,
      phone,
      mail,
      comments,
    };
    console.log('data:', data);

    reset();
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
    setErrorUserName('Це поле не може бути пустим');
    setErrorPhone('Це поле не може бути пустим');
    setErrorMail('Це поле не може бути пустим');
    setErrorComments('');
  };

  const validateName = value => {
    if (value.length < 2) {
      setErrorUserName('Ім’я має бути довшим');
      if (value.length === 0) {
        setErrorUserName('Це поле не може бути пустим');
      }
    } else if (value.length > 20) {
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
    // let re = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
    let re = /^\+?([0-9]{2})\)?(([0-9]{3}))?[-. ]?([0-9]{3})?([0-9]{4})$/;

    if (!re.test(phone)) {
      // setErrorPhone('Correct format: (123) 456-7890');
      setErrorPhone('Correct format: +XXXXXXXXXXXX');
    } else {
      setErrorPhone('');
    }
  }

  const handleChange = evt => {
    const { name, value } = evt.target;
    // console.log('evt.target.name:', evt.target.name);
    switch (name) {
      case 'name':
        validateName(value);
        setUserName(value);
        break;

      case 'comments':
        validateComments(value);
        setComments(value);
        break;

      case 'phone':
        validatePhone(value);
        setPhone(value);
        break;

      case 'mail':
        validateEmail(value);
        setMail(value);
        break;

      default:
        return;
    }
  };

  const handleBlur = evt => {
    // console.log('evt.target.name:', evt.target.name);
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
    <div className={styles.container}>
      <ButtonClose closeModal={closeModal} />
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
              label="google@gmail.com"
              placeholder=" "
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>

        <div className={styles.wrapError}>
          {errorComments && <div className={styles.error}>{errorComments}</div>}
          <Textarea
            customStyle={styles.textarea}
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
