import { useModal } from 'hooks';
// import Globe from 'components/layout/Globe/Globe';
import Hero from 'components/sections/Hero';
import Modal from 'components/share/Modal';
import Feedback from 'components/ui/Feedback';

const HomePage = () => {
  const { isModalOpen, closeModal, toggleModal } = useModal();

  return (
    <>
      <Hero />
      <Feedback onToggleModal={toggleModal} />

      {isModalOpen && <Modal onCloseModal={closeModal} mode="dark"></Modal>}

      {/* <Globe /> */}
    </>
  );
};

export default HomePage;
