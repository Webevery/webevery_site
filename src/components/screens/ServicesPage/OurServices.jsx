import { useModal } from '../../../hooks';
import { GetServices } from './GetServices';
import Modal from 'components/share/Modal';
import Form from 'components/share/Form';
import styles from './OurServices.module.scss';

const OurServices = () => {
  const { modalActive, shouldRender, openModal, closeModal } = useModal();

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
