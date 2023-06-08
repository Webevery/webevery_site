import React, { useEffect } from 'react';
import Modal from 'components/share/Modal';
import Button from 'components/share/Button';

import styles from './Slider.module.scss';

const SliderDetails = ({
  item,
  index,
  slideIndex,
  isModalOpen,
  closeModal,
  activeId,
  setActiveId,
}) => {
  const isShown = () => (item.id === activeId ? closeModal : null);
  console.log('🚀 ~ activeId:', activeId);

  useEffect(() => {
    isShown();
    // eslint-disable-next-line
  }, [activeId]);

  // const [isModalOpen, setModalOpen] = React.useState(false);

  // const closeModal = () => {
  //   setModalOpen(!isModalOpen);
  // };
  console.log(item.id);

  return (
    <>
      <Button
        title="Детальніше"
        className={styles.btnReadMore}
        // onClick={closeModal}
        aria-controls={item.id}
        onClick={() => {
          // eslint-disable-next-line
          return isShown();
        }}
      />

      {isModalOpen && (
        <Modal onClose={closeModal} isModalOpen={isModalOpen}>
          <div key={item.id} className={styles.wrapperForModalText}>
            <p
              className={
                slideIndex === index + 1
                  ? styles.modalDetailsHidden
                  : styles.modalDetailText
              }
            >
              {item.detailedText}
            </p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SliderDetails;
