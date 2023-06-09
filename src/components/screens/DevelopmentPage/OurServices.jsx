import styles from './OurServices.module.scss';
import { GetServices } from './GetServices';

import React, { useState } from 'react';

import Modal from 'components/share/Modal';
import Form from 'components/share/Form';

import { Helmet } from 'react-helmet-async';

const OurServices = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <article className={styles.OurServices}>
      <Helmet>
        <title>Розробка сайтів з індивідуальним дизайном. </title>
        <meta
          name="description"
          content="Розробка сайтів з індивідуальним дизайном. Сайт-візитка, інтернет магазин, лендінг, корпоративний сайт. "
        />
        <link rel="canonical" href="prices" />
      </Helmet>
      <h1>Розробка сайтів з індивідуальним дизайном </h1>
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
