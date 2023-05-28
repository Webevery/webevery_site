import styles from './OurServices.module.scss';
import { GetServices } from './GetServices';

import { useModal } from '../../../hooks';
import Modal from 'components/share/Modal';
import Form from 'components/share/Form';

const OurServices = () => {
  const { isModalOpen, closeModal, toggleModal } = useModal();
  return (
    <article className={styles.OurServices}>
      <GetServices onClick={toggleModal} />

      {isModalOpen && (
        <Modal onCloseModal={closeModal}>
          <Form closeModal={closeModal} />
        </Modal>
      )}
    </article>
  );
};

export default OurServices;
