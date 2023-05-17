import { pricesData } from 'data';
import styles from './PricesPage.module.scss';

export const ourPrices = pricesData.map(
  ({ id, title, describton, image, price, daysCount, details }) => {
    const itemDetails = details.map(detail => {
      return (
        <li key={detail} className={styles.oneDetail}>
          {detail}
        </li>
      );
    });

    return (
      <li key={id} className={styles.priceDescription}>
        <div className={styles.textWrapper}>
          <h3>{title}</h3>
          <p>{describton}</p>

          <button
            onClick={() => {
              console.log(id);
              // setIsHidden(!isHidden);
            }}
          >
            Детальніше...
          </button>
          {/* {!isHidden && ( */}
          <div className={styles.detilesWrapper}>
            <p className={styles.servicesPrice}>
              Ціна від <span>{price} $</span>
            </p>
            <p>{daysCount}</p>
            <ul className={styles.itemDetails}>{itemDetails}</ul>
          </div>
          {/* )} */}
        </div>
        <img src={image} alt={title} />
      </li>
    );
  }
);
