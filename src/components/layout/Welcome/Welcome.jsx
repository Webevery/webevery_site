import styles from './Welcome.module.scss';

const Welcome = () => {
  return (
    <section className={styles.welcomeContainer}>
      {/* <h2 className={styles.welcomeTitle}>Вас вітає, WEBEVERY</h2> */}
      <h2 className={styles.welcomeTitle}>Welcome to WEBEVERY</h2>
    </section>
    //////////////version-2-3///////////////
    // <section className={styles.welcomeContainer}>
    //   <div className={styles.waviy}>
    //     <span className={styles.welcomeTitle}>Welcome to WEBEVRY</span>
    //   </div>
    // </section>
  );
};

export default Welcome;
