import styles from './OurServices.module.scss';

import { pricesData } from 'data';
import Button from '../../share/Button/Button';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const GetServices = () => {
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
                  <li
                    className={`${styles.servicesList__item} `}
                    key={nanoid()}
                  >
                    {item}
                  </li>
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
              title="Замовити"
              className={styles.mainBtn}
              onClick={handleClick}
            />
          </div>
        </section>
      );
    }
  );

  return <>{GetData}</>;
};
