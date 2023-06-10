import { useEffect, useState } from 'react';
// import Globe from 'components/layout/Globe/Globe';
import Hero from 'components/sections/Hero';
// import Feedback from 'components/ui/Feedback';
// import { useModal } from '../../../hooks';
// import Modal from 'components/share/Modal';
// import Form from 'components/share/Form';
import Welcome from 'components/layout/Welcome';

const HomePage = () => {
  // const { isModalOpen, closeModal, toggleModal } = useModal();
  const [visited, setVisited] = useState(false);

  useEffect(() => {
    sessionStorage.getItem('visited');

    if (sessionStorage.getItem('visited')) {
    } else {
      setVisited(true);
      const timer = setTimeout(() => {
        sessionStorage.setItem('visited', 'true');
        setVisited(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [visited]);

  return (
    <>
      {/* <Feedback toggleModal={toggleModal} />
      {isModalOpen && (
        <Modal onCloseModal={closeModal} mode="dark">
          <Form closeModal={closeModal} />
        </Modal>
      )} */}

      <Hero />
      {visited && <Welcome />}
      {/* <Globe /> */}
    </>
  );
};

export default HomePage;
