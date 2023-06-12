import styles from './Welcome.module.scss';

const Welcome = () => {
  return (
    <section className={styles.welcomeContainer}>
      <h2 className={styles.welcomeTitle}>Welcome to WEBEVERY</h2>
    </section>
  );
};

export default Welcome;
