import React, { useState, useEffect } from 'react';
import Input from '../Input';
import Textarea from '../Input';
import styles from './Form.module.scss';
import Select from './Select';

function Form({ closeModal }) {
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [comments, setComments] = useState('');
  const [selectValue, setSelectValue] = useState('');

  const [dirtyUserName, setDirtyUserName] = useState(false);
  const [dirtyPhone, setDirtyPhone] = useState(false);
  const [dirtyMail, setDirtyMail] = useState(false);

  const [errorUserName, setErrorUserName] = useState('Enter name, please');
  const [errorPhone, setErrorPhone] = useState('Phone can"t be empty');
  const [errorMail, setErrorMail] = useState('Email can"t be empty');
  const [errorComments, setErrorComments] = useState('');

  const [validForm, setvalidForm] = useState(false);

  useEffect(() => {
    if (errorUserName || errorPhone || errorMail || errorComments) {
      setvalidForm(false);
    } else {
      setvalidForm(true);
    }
  }, [errorUserName, errorPhone, errorMail, errorComments]);

  const formSubmit = evt => {
    evt.preventDefault();
    const data = {
      userName,
      phone,
      mail,
      comments,
      type: selectValue,
    };
    console.log('data:', data);

    reset();
  };

  const getSelectValue = evt => {
    setSelectValue(evt.target.value);
  };

  const reset = () => {
    setUserName('');
    setComments('');
    setPhone('');
    setMail('');
    setDirtyUserName(false);
    setDirtyMail(false);
    setDirtyPhone(false);
    setErrorUserName('Enter name, please');
    setErrorPhone('Phone can"t be empty');
    setErrorMail('Email can"t be empty');
    setErrorComments('');
    setSelectValue('');
  };

  const validateName = value => {
    if (value.length < 2) {
      setErrorUserName('Name must be longer');
      if (value.length === 0) {
        setErrorUserName('Enter name, please');
      }
    } else if (value.length > 20) {
      setErrorUserName('Name must be shorter');
    } else {
      setErrorUserName('');
    }
  };

  const validateComments = value => {
    if (value.length > 300) {
      setErrorComments('Comments must be shorter');
    } else {
      setErrorComments('');
    }
  };

  function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;

    if (!re.test(email)) {
      setErrorMail('Incorrect email');
    } else {
      setErrorMail('');
    }
  }

  function validatePhone(phone) {
    let re = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;

    if (!re.test(phone)) {
      setErrorPhone('Correct format: (123) 456-7890');
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
    <div className={styles.formContainer}>
      <button type="button" className={styles.closeBtn} onClick={closeModal}>
        +
      </button>
      <form onSubmit={formSubmit} className={styles.form}>
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
              label="Name"
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
              label="Phone"
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
              label="Email"
              placeholder=" "
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>

        <Select value={selectValue} getValue={getSelectValue} />

        <div className={styles.wrapError}>
          {errorComments && <div className={styles.error}>{errorComments}</div>}
          <Textarea
            customStyle={styles.textarea}
            type="text"
            id="commentsId"
            name="comments"
            value={comments}
            label="Comments"
            placeholder=" "
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <button className={styles.btnSubmit} disabled={!validForm}>
          {' '}
          Send message
        </button>
      </form>
    </div>
  );
}

export default Form;
