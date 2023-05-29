import styles from './OurServices.module.scss';
import { GetServices } from './GetServices';

import React, { useState } from 'react';

import Modal from 'components/share/Modal';
import Form from 'components/share/Form';

const OurServices = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <article className={styles.OurServices}>
      <GetServices onClick={closeModal} />

      {isModalOpen && (
        <Modal onClose={closeModal} isModalOpen={isModalOpen}>
          <Form isOpen={isModalOpen} closeModal={closeModal} />
        </Modal>
      )}
    </article>
  );
};

export default OurServices;
