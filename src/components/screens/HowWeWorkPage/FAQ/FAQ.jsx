import React, { useState } from 'react';
import FAQItem from './FAQItem';
import { FAQdata as data } from '../../../../data/FAQ.data';
import styles from './FAQ.module.scss';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.FAQsection}>
      {data.map(item => {
        return (
          <details key={Math.random()}>
            <summary>{item.question}</summary>
            <div>{item.answer}</div>
          </details>
        );
      })}

      <h3 className={styles.FAQtitle}>FAQ</h3>
      <ul className={styles.FAQlist}>
        {data.map(item => {
          return (
            <FAQItem
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              link={item.link}
              href={item.href}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default FAQ;
