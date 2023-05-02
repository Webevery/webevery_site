import React, { useState } from 'react';
import Input from '../Input';
import scss from './Form.module.scss';

const Form = props => {
  const { closeBar, isOpen } = props;
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [comments, setComments] = useState('');

  const formSubmit = evt => {
    evt.preventDefault();
    const data = {
      userName,
      phone,
      mail,
      comments,
    };
    console.log('data:', data);
    reset();
  };

  const reset = () => {
    setUserName('');
    setComments('');
    setPhone('');
    setMail('');
  };

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setUserName(value);
        break;

      case 'comments':
        setComments(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      case 'mail':
        setMail(value);
        break;

      default:
        return;
    }
  };

  return (
    <div className={scss.container}>
      <button type="button" className={scss.closeBtn} onClick={closeBar}>
        +
      </button>
      <form
        onSubmit={formSubmit}
        className={isOpen ? scss.form : scss.moveWrap + ' ' + scss.active}
      >
        <div className={scss.wrapGroup}>
          <Input
            type="text"
            id="nameId"
            name="name"
            value={userName}
            label="Name"
            placeholder=" "
            onChange={handleChange}
          />

          <Input
            type="tel"
            id="phoneId"
            name="phone"
            value={phone}
            label="Phone"
            placeholder=" "
            onChange={handleChange}
          />

          <Input
            type="email"
            id="emailId"
            name="mail"
            value={mail}
            label="Email"
            placeholder=" "
            onChange={handleChange}
          />
        </div>

        <Input
          type="text"
          id="commentsId"
          name="comments"
          value={comments}
          label="Comments"
          placeholder=" "
          onChange={handleChange}
        />

        <button> Send message</button>
      </form>
    </div>
  );
};

export default Form;
