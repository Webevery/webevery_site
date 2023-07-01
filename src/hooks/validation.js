import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Store } from 'react-notifications-component';
import { useModal } from './modal';

export const useValidation = () => {

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

    const { closeModal } = useModal();

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
        closeModal();
        Store.addNotification({
            title: 'Чудово!',
            message: 'Повідомлення надіслано!',
            type: 'success',
            insert: 'top',
            container: 'top-right',
            animationIn: ['animate__animated', 'animate__fadeIn'],
            animationOut: ['animate__animated', 'animate__fadeOut'],
            dismiss: {
                duration: 3000,
                onScreen: true,
            },
        });
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
    return {
        userName, phone, mail, comments,
        dirtyUserName, dirtyPhone, dirtyMail,
        errorUserName, errorPhone, errorMail, errorComments,
        validForm, formRef, formSubmit, handleChange, handleBlur
    };
}