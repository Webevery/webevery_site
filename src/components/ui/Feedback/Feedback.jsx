import React from 'react';
import Button from 'components/share/Button';
import styles from './Feedback.module.scss';

const Feedback = ({ onToggleModal }) => {
  return (
    <Button
      onClick={onToggleModal}
      className={styles.buttonFeedback}
      type="button"
      title="Feedback"
      ariaLabel={'Feedback'}
    />
  );
};

export default Feedback;
