import React, { useState } from 'react';
import FAQItem from './FAQItem';
// import { FAQdata as data } from '../../../../data/FAQ.data';
import { FAQdataEN, currentLanguages, FAQdata } from '../../../../data';
import styles from './FAQ.module.scss';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { i18n } = useTranslation();

  const currentLanguageFAQData = () => {
    return i18n.language === currentLanguages.UA ? FAQdata : FAQdataEN;
  };

  return (
    <section className={styles.FAQsection}>
      <h3 className={styles.FAQtitle}>FAQ</h3>
      <ul className={styles.FAQlist}>
        {currentLanguageFAQData().map(item => {
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
              answerHeight={item.answerHeight}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default FAQ;
