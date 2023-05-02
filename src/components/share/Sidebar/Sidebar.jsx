import React from 'react';
import Form from '../Form';
import scss from './Sidebar.module.scss';

const Sidebar = ({ isOpen, closeBar }) => {
  return (
    <div className={isOpen ? scss.moveWrap : scss.moveWrap + ' ' + scss.active}>
      <div className={scss.wrapSidebar}>
        <Form closeBar={closeBar} isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Sidebar;

//-------- Example! How to use component Sitebar in component Home:

// import { useState } from 'react';
// import Sidebar from '../Sidebar';
// import scss from './Home.module.scss';

//--------  component Home   ------------

// function Home(open = false) {
//
//     const [isSidebarOpen, setIsSidebarOpen] = useState(open);
//     const toggleSidebar = () => setIsSidebarOpen((state) => !state);
//
//     return (
//         <div className={scss.homeWrapper}>
//
//             <Sidebar isOpen={isSidebarOpen} closeBar={toggleSidebar} />
//
//             Home
//
//             <button type="button" onClick={toggleSidebar}>
//                 Open Sidebar
//             </button>
//
//         </div>
//     );
// }

// export default Home;

//-------  styles for component Home ---------

//Home.module.scss

// .homeWrapper {
//     position: relative;
// }
