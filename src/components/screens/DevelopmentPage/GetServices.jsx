import { pricesData } from 'data';
import { ServicesItem } from './ServicesItem';
import { useState, useEffect } from 'react';

export const GetServices = ({ onClick }) => {
  const [activeId, setActiveId] = useState(() => {
    return JSON.parse(localStorage.getItem('activeId')) || 0;
  });

  useEffect(() => {
    localStorage.setItem('activeId', JSON.stringify(activeId));
  }, [activeId]);

  return pricesData.map(
    ({ id, details, title, daysCount, price, description }) => {
      return (
        <ServicesItem
          key={id}
          id={id}
          details={details}
          title={title}
          daysCount={daysCount}
          price={price}
          description={description}
          onClick={onClick}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      );
    }
  );
};
