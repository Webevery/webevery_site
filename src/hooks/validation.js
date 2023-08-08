import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Store } from 'react-notifications-component';
import { useTranslation } from 'react-i18next';
import { useModal } from './modal';

export const useValidation = () => {
    const { t } = useTranslation();
    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [comments, setComments] = useState('');

    const [dirtyUserName, setDirtyUserName] = useState(false);
    const [dirtyPhone, setDirtyPhone] = useState(false);
    const [dirtyMail, setDirtyMail] = useState(false);

    const [errorUserName, setErrorUserName] = useState(t('formErrors.name'));
    const [errorPhone, setErrorPhone] = useState(t('formErrors.phone'));
    const [errorMail, setErrorMail] = useState(t('formErrors.email'));
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
            title: t('notification.title'),
            message: t('notification.message'),
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
        setErrorUserName(t('formErrors.name'));
        setErrorPhone(t('formErrors.phone'));
        setErrorMail(t('formErrors.email'));
        setErrorComments('');
    };

    const validateName = value => {
        if (value.length < 2) {
            setErrorUserName(t('formErrors.shortName'));
            if (value.length === 0) {
                setErrorUserName(t('formErrors.name'));
            }
        } else if (value.length > 30) {
            setErrorUserName('Ім’я має бути коротшим');
        } else {
            setErrorUserName('');
        }
    };

    const validateComments = value => {
        if (value.length > 300) {
            setErrorComments(t('formErrors.comment'));
        } else {
            setErrorComments('');
        }
    };

    function validateEmail(email) {
        let re = /\S+@\S+\.\S+/;

        if (!re.test(email)) {
            setErrorMail(t('formErrors.incorrectMail'));
        } else {
            setErrorMail('');
        }
        if (email.length === 0) setErrorMail(t('formErrors.email'));
    }

    function validatePhone(phone) {
        let re = /^\+\d{12}$/;

        if (!re.test(phone)) {
            setErrorPhone(t('formErrors.incorrectPhone'));
        } else {
            setErrorPhone('');
        }
        if (phone.length === 0) setErrorPhone(t('formErrors.phone'));
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