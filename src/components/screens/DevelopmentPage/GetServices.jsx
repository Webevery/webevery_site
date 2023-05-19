import { pricesData } from 'data';
import Button from '../../share/Button/Button';
import styles from './OurServices.module.scss';

export const GetServices = () => {
  const GetData = pricesData.map(({ id, details, title }) => {
    return (
      <section className={styles.servicesWrapper}>
        <h2>{title}</h2>
        <ul className={styles.servicesDescription} key={id}>
          {details.map(item => {
            return (
              <li className={styles.servicesDescription__item} key={item}>
                {item}
              </li>
            );
          })}
        </ul>
        <Button title="Замовити" />
      </section>
    );
  });

  return <>{GetData}</>;
};
