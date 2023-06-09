import { useEffect, useState } from 'react';
// import Globe from 'components/layout/Globe/Globe';
import Hero from 'components/sections/Hero';
// import Feedback from 'components/ui/Feedback';
// import { useModal } from '../../../hooks';
// import Modal from 'components/share/Modal';
// import Form from 'components/share/Form';
import Welcome from 'components/layout/Welcome';

import { Helmet } from 'react-helmet-async';

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
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [visited]);

  return (
    <>
      <Helmet>
        <title>Створення веб-сайту з індивідуальним дизайном</title>
        <meta
          name="description"
          content="Розробка та створення веб-сайтів з індивідуальним дизайном.Сайт-візитка, інтернет-магазин, лендінг, корпоративний сайт. SEO оптимізація"
        />
        <link
          rel="canonical"
          href="https://webevery.github.io/webevery_site/"
        />
      </Helmet>

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
