import OurServices from '../../components/screens/ServicesPage';
// import BackToTop from '../../components/ui/BackToTop';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Розробка сайтів з індивідуальним дизайном. </title>
        <meta
          name="description"
          content="Розробка сайтів з індивідуальним дизайном. Сайт-візитка, інтернет-магазин, лендінг, корпоративний сайт. "
        />
        <link rel="canonical" href="prices" />
      </Helmet>
      <h1 className="seoTitle">Розробка сайтів з індивідуальним дизайном </h1>
      <OurServices />
      {/* <BackToTop /> */}
    </>
  );
};
export default Services;
