import React, { useState } from 'react';

import BtnSlider from './BtnSlider';
// import Button from 'components/share/Button';
// import Modal from 'components/share/Modal';
// import Form from 'components/share/Form';
// import SliderDetails from './SliderDetails';

import styles from './Slider.module.scss';

const Slider = ({ array }) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [touchPosition, setTouchPosition] = useState(null);
  // const [isModalOpen, setModalOpen] = useState(false);
  // const [activeId, setActiveId] = useState(0);

  // const closeModal = () => {
  //   setModalOpen(!isModalOpen);
  // };

  const nextSlide = () => {
    if (slideIndex !== array.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === array.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(array.length);
    }
  };

  const moveDots = index => setSlideIndex(index);

  // ! Logic handleTouch

  const handleTouchStart = e => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = e => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      nextSlide();
    }

    if (diff < -5) {
      prevSlide();
    }

    setTouchPosition(null);
  };

  return (
    <>
      <div
        className={styles.containerSlider}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className={styles.wrapperSliderAndDots}>
          <BtnSlider moveSlide={prevSlide} direction={'prev'} />
          {array.map((item, index) => {
            return (
              <div
                key={item.id}
                className={
                  slideIndex === index + 1
                    ? styles.activeAnim
                    : styles.hiddenSlide
                }
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.mockupImg}
                  width="672"
                  height="288"
                />

                {/* <h1 className={styles.siteNameProject}>{item.name}</h1> */}
                <a
                  href={item.path}
                  title={item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.siteNameProject}
                >
                  {item.name}
                </a>
                <p className={styles.descriptionProject}>{item.text}</p>

                {/* <SliderDetails
                  item={item}
                  index={index}
                  slideIndex={slideIndex}
                  styles={styles}
                  isModalOpen={isModalOpen}
                  closeModal={closeModal}
                  activeId={activeId}
                  setActiveId={setActiveId}
                /> */}

                {/* {isModalOpen && (
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
                )} */}
              </div>
            );
          })}

          <BtnSlider moveSlide={nextSlide} direction={'next'} />
        </div>

        {/* <Button
          title="Детальніше"
          className={styles.btnReadMore}
          onClick={closeModal}
        /> */}

        <div className={styles.containerDots}>
          {array.map((_, index) => (
            <div
              key={index}
              className={
                slideIndex === index + 1 ? styles.dotActive : styles.dot
              }
              onClick={() => moveDots(index + 1)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;

// {
//   isModalOpen && (
//     <Modal onClose={closeModal} isModalOpen={isModalOpen}>
//       {/* <Form isOpen={isModalOpen} closeModal={closeModal} /> */}
//       {/* <div className={styles.wrapperForModalText}> */}
//       {array.map(el => (
//         <p
//           key={el.id}
//           className={
//             slideIndex === index + 1
//               ? styles.modalDetailText
//               : styles.modalDetailsHidden
//           }
//         >
//           {el.detailedText}
//         </p>
//       ))}

//       {/* </div> */}
//     </Modal>
//   );
// }
