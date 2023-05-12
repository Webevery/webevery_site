import { prices } from 'data/prices';
import styles from './PricesPage.module.scss';
import { useState } from 'react';

export const GetServices = () => {
  const [isHidden, setIsHidden] = useState(true);

  const ourPrices = prices.map(
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
              onClick={e => {
                console.log(id);
                setIsHidden(!isHidden);
                console.log();
              }}
            >
              Детальніше...
            </button>
            {!isHidden && (
              <div className={styles.detilesWrapper}>
                <p className={styles.servicesPrice}>
                  Ціна від <span>{price} $</span>
                </p>
                <p>{daysCount}</p>
                <ul className={styles.itemDetails}>{itemDetails}</ul>
              </div>
            )}
          </div>
          <img src={image} alt={title} />
        </li>
      );
    }
  );

  return <ul>{ourPrices}</ul>;
};
