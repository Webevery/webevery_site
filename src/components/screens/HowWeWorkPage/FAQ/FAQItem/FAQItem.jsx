import React from 'react';
import { ReactComponent as Icon } from '../../../../../images/V.svg';
import styles from './FAQItem.module.scss';

const FAQItem = ({
  question,
  answer,
  onClick,
  activeIndex,
  id,
  ariaExpanded,
}) => {
  const isAnswerShown = () => {
    if (id === activeIndex && ariaExpanded === true) {
      return `${styles.FAQanswer__visible}`;
    }

    return `${styles.FAQanswer}`;
  };

  return (
    <li className={styles.FAQItem}>
      <div onClick={onClick} className={styles.FAQQuestionContainer}>
        <h3 className={styles.FAQQuestion}>{question}</h3>
        <Icon className={styles.FAQIcon} />
      </div>
      <p className={isAnswerShown()}>{answer}</p>
    </li>
  );
};

export default FAQItem;
