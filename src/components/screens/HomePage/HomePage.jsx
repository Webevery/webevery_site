// import { useEffect, useState } from 'react';
// import Welcome from 'components/layout/Welcome';
import Hero from 'components/sections/Hero';

const HomePage = () => {
  // const { isModalOpen, closeModal, toggleModal } = useModal();
  // const [visited, setVisited] = useState(false);

  // useEffect(() => {
  //   sessionStorage.getItem('visited');

  //   if (sessionStorage.getItem('visited')) {
  //   } else {
  //     setVisited(true);
  //     const timer = setTimeout(() => {
  //       sessionStorage.setItem('visited', 'true');
  //       setVisited(false);
  //     }, 2000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [visited]);

  return (
    <>
      <Hero />
      {/* {visited && <Welcome />} */}
    </>
  );
};

export default HomePage;
