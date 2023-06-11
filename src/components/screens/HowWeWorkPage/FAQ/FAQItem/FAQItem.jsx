import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Icon } from '../../../../../images/V.svg';
import styles from './FAQItem.module.scss';

const FAQItem = ({
  question,
  answer,
  activeIndex,
  setActiveIndex,
  id,
  href,
  link,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const divRef = useRef();

  const isAnswerShown = () =>
    id === activeIndex ? setIsClicked(!isClicked) : null;

  useEffect(() => {
    isAnswerShown();

    // eslint-disable-next-line
  }, [activeIndex]);

  const answerStyles = isClicked
    ? `${styles.FAQanswer__visible}`
    : `${styles.FAQanswer}`;

  const ariaExpanded = isClicked ? true : false;

  return (
    <>
      <li className={styles.FAQItem}>
        <div
          onClick={() => {
            // eslint-disable-next-line
            return (
              setActiveIndex(id),
              isAnswerShown(),
              console.log(divRef.current.id)
            );
          }}
          aria-expanded={ariaExpanded}
          aria-controls={id}
          id={id}
          className={styles.FAQQuestionContainer}
          ref={divRef}
        >
          <p className={styles.FAQQuestion}>{question}</p>
          <Icon className={styles.FAQIcon} />
        </div>
        <p id={id} className={answerStyles}>
          {answer}
          {href && (
            <Link className={styles.FAQLink} to={href}>
              {link}
            </Link>
          )}
        </p>
      </li>
    </>
  );
};

export default FAQItem;
