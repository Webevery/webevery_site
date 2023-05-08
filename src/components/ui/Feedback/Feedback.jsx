import React from 'react';
import Button from 'components/share/Button';
import styles from './Feedback.module.scss';

const Feedback = ({ toggleSidebar }) => {
  return (
    <Button
      onClick={toggleSidebar}
      className={styles.buttonFeedback}
      type="button"
      title="Feedback"
      ariaLabel={'Feedback'}
    />
  );
};

export default Feedback;
