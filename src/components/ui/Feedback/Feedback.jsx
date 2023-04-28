import React from 'react';
import Button from 'components/share/Button';
import styles from './Feedback.module.scss';

const handleOpenFeedback = () => {
  console.log('go to feedback');
};

const Feedback = () => {
  return (
    <Button
      onClick={handleOpenFeedback}
      className={styles.buttonFeedback}
      type="button"
      title="Feedback"
      ariaLabel={'Feedback'}
    />
  );
};

export default Feedback;
