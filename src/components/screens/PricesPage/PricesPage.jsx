import styles from './PricesPage.module.scss';

import { prices } from 'data/prices';

// import { Link } from 'react-router-dom';

const PricesPage = () => {
  const ourPrices = prices.map(
    ({ id, title, describton, image, price, details }) => {
      return (
        <li key={id}>
          <div className={styles.textWrapper}>
            <h3>{title}</h3>
            <p>{describton}</p>

            {/* <Link className={styles.pricesPage__link} to={'/aboutUs'}>
            Learn more
          </Link> */}
            <button
              onClick={() => {
                console.log(id);
              }}
            >
              Learn more
            </button>
            <p>
              Ціна від <span>{price} $</span>
            </p>
            <p className={styles.textWrapper__details}>{details}</p>
          </div>
          <img src={image} alt={title} />
        </li>
      );
    }
  );

  return (
    <article className={styles.pricesPage}>
      <ul>{ourPrices}</ul>
    </article>
  );
};
export default PricesPage;
