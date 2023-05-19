import styles from './OurServices.module.scss';
import { GetServices } from './GetServices';

const OurServices = () => {
  return (
    <article className={styles.OurServices}>
      <GetServices />
    </article>
  );
};

export default OurServices;
