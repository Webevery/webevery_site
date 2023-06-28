import { useState } from 'react';
import { GetServices } from './GetServices';
import Modal from 'components/share/Modal';
import Form from 'components/share/Form';
import styles from './OurServices.module.scss';

const OurServices = () => {
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
    <article className={styles.OurServices}>
      <GetServices onClick={openModal} />

      {shouldRender && (
        <Modal closeModal={closeModal} active={modalActive}>
          <Form isOpen={modalActive} closeModal={closeModal} />
        </Modal>
      )}
    </article>
  );
};

export default OurServices;
