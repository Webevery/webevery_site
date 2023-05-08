import { useState } from 'react';
// import Globe from 'components/layout/Globe/Globe';
import Hero from 'components/sections/Hero';
import Feedback from 'components/ui/Feedback';
import Sidebar from 'components/share/Sidebar/Sidebar';

const HomePage = (open = false) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(open);
  const toggleSidebar = () => setIsSidebarOpen(state => !state);

  return (
    <>
      <Feedback toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} closeBar={toggleSidebar} />
      <Hero />

      {/* <Globe /> */}
    </>
  );
};

export default HomePage;
