import { useState, useEffect } from 'react';
import styles from './OurServices.module.scss';
import { DetailsItem } from './DetailsItem';
import { nanoid } from 'nanoid';
import Button from 'components/share/Button';

export const ServicesItem = ({
  id,
  details,
  title,
  daysCount,
  price,
  description,
  image,
  onClick,
  activeId,
  setActiveId,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const isShown = () => (id === activeId ? setIsClicked(!isClicked) : null);

  useEffect(() => {
    isShown();
    // eslint-disable-next-line
  }, [activeId]);

  return (
    <section className={styles.servicesWrapper} key={id}>
      <h2
        className={
          description ? styles.title : `${styles.title} ${styles.toBottom}`
        }
      >
        {title}
      </h2>

      <button
        className={
          description
            ? styles.whatIsItBtn
            : `${styles.whatIsItBtn} ${styles.invisible}`
        }
        // aria-expanded={ariaExpanded}
        aria-controls={id}
        onClick={() => {
          // eslint-disable-next-line
          return setActiveId(id), isShown();
        }}
      >
        {isClicked ? 'Зрозуміло!' : 'Що це..?'}
      </button>

      <div className={styles.allDescrWrapper}>
        <ul
          className={
            isClicked ? styles.servicesListHidden : styles.servicesList
          }
        >
          {details.map(item => {
            return (
              <DetailsItem
                key={nanoid()}
                className={styles.servicesList__item}
                item={item}
              />
            );
          })}
        </ul>

        <p
          className={
            isClicked
              ? styles.servicesDescription
              : styles.servicesDescriptionHidden
          }
        >
          {description}
        </p>
      </div>

      {image && (
        <img
          src={image}
          alt={title}
          className={styles.serviceImage}
          width={192}
          height={204}
        />
      )}

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
};
