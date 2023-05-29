import React, { useState } from 'react';
import FAQItem from './FAQItem';
import { FAQdata as data } from '../../../../data/FAQ.data';
import styles from './FAQ.module.scss';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className={styles.FAQsection}>
      {/* <div className={styles.FAQContentContainer}> */}
      <h3 className={styles.FAQtitle}>FAQ</h3>
      <ul className={styles.FAQlist}>
        {data.map(item => (
          <FAQItem
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
            activeIndex={activeIndex}
            onClick={() => {
              setActiveIndex(item.id);
            }}
          />
        ))}
      </ul>
      {/* </div> */}
    </section>
  );
};

export default FAQ;
