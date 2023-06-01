import { pricesData } from 'data';
import Button from 'components/share/Button';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { DetailsItem } from './DetailsItem';
import styles from './OurServices.module.scss';

export const GetServices = ({ onClick }) => {
  const [isClicked, setIsClicked] = useState(null);

  const GetData = pricesData.map(
    ({ id, details, title, daysCount, price, description }, i) => {
      const handleClick = i => {
        if (isClicked === i) {
          return setIsClicked(null);
        }
        setIsClicked(i);
      };

      return (
        <section className={styles.servicesWrapper} key={id}>
          <h2>{title}</h2>
          <button
            className={styles.whatIsItBtn}
            onClick={() => {
              handleClick(i);
            }}
          >
            {isClicked === i ? 'Зрозуміло!' : 'Що це..?'}
          </button>

          <div className={styles.allDescrWrapper}>
            <ul
              className={
                isClicked === i
                  ? styles.servicesListHidden
                  : styles.servicesList
              }
            >
              {details.map(item => {
                return (
                  <DetailsItem
                    key={nanoid()}
                    className={`${styles.servicesList__item} `}
                    item={item}
                  />
                );
              })}
            </ul>

            <p
              className={
                isClicked === i
                  ? styles.servicesDescription
                  : styles.servicesDescriptionHidden
              }
            >
              {description}
            </p>
          </div>

          <div className={styles.btnWrapper}>
            <div className={styles.priceWrapper}>
              <p>{daysCount} днів</p>
              <p>Ціна від {price} $</p>
            </div>
            <Button
              type="button"
              title="Замовити"
              className={styles.mainBtn}
              onClick={onClick}
              ariaLabel={'Order'}
            />
          </div>
        </section>
      );
    }
  );

  return <>{GetData}</>;
};
