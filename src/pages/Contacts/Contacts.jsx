import React from 'react';

import ContactsPage from 'components/screens/ContactsPage';
import { Helmet } from 'react-helmet-async';

const Contacts = () => {
  return (
    <>
      <Helmet>
        <title>Розробка сайтів. Наші контакти</title>
        <meta
          name="description"
          content="Контакти наших розробників веб-сайтів в Україні та інших країнах Європи."
        />
        <meta
          name="keywords"
          content="веб-сайт, сайт, веб-розробка, створення веб-сайтів, дизайн веб-сайтів, розробка інтернет-магазину, програмування, веб-додаток, SEO оптимізація, мобільна розробка,  дизайн, тестування, проектування"
        />
        <link rel="canonical" href="contacts" />
      </Helmet>
      <h1 className="seoTitle">Розробка сайтів. Наші контакти</h1>
      <ContactsPage />
    </>
  );
};

export default Contacts;
