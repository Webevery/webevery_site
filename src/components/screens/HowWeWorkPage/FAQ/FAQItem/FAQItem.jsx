import React from 'react';
import { ReactComponent as Icon } from '../../../../../images/V.svg';
import styles from './FAQItem.module.scss';

const FAQItem = ({ question, answer, onClick, activeIndex, id }) => {
  const isAnswerShown =
    id === activeIndex ? `${styles.FAQanswer__visible}` : `${styles.FAQanswer}`;

  const ariaExpanded = id === activeIndex ? true : false;

  return (
    <li className={styles.FAQItem}>
      <div
        onClick={onClick}
        aria-expanded={ariaExpanded}
        aria-controls={id}
        className={styles.FAQQuestionContainer}
      >
        <p className={styles.FAQQuestion}>{question}</p>
        <Icon className={styles.FAQIcon} />
      </div>
      <p id={id} className={isAnswerShown}>
        {answer}
      </p>
    </li>
  );
};

export default FAQItem;
