import { useEffect, useState } from 'react';
// import Globe from 'components/layout/Globe/Globe';
import Hero from 'components/sections/Hero';
import Feedback from 'components/ui/Feedback';
import Sidebar from 'components/share/Sidebar/Sidebar';
import Welcome from 'components/layout/Welcome';

const HomePage = (open = false) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(open);
  const [visited, setVisited] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(state => !state);

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
      <Feedback toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} closeBar={toggleSidebar} />
      <Hero />
      {visited && <Welcome />}
      {/* <Globe /> */}
    </>
  );
};

export default HomePage;
