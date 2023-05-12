import styles from './PricesPage.module.scss';

// import { ourPrices } from './ourPrices';
import { GetServices } from './GetServices';

const PricesPage = () => {
  return (
    <article className={styles.pricesPage}>
      {/* <ul>{ourPrices}</ul> */}
      <GetServices />
    </article>
  );
};
export default PricesPage;
