import { useState } from 'react';

function useModal(open = false) {
    const [isModalOpen, setIsModalOpen] = useState(open);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const toggleModal = () => setIsModalOpen((state) => !state);

    return { isModalOpen, openModal, closeModal, toggleModal };
}

export default useModal;