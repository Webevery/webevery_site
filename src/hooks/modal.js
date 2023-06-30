import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {

    const [modalActive, setModalActive] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    function openModal() {
        setShouldRender(true);
        setTimeout(() => {
            setModalActive(true);
        }, 0);
    }

    function closeModal() {
        setModalActive(false);
        setTimeout(() => {
            setShouldRender(false);
        }, 1000);
    }
    return (
        <ModalContext.Provider value={{ modalActive, shouldRender, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    )
};

