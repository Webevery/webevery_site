import { servicesData } from 'data';
import { ServicesItem } from './ServicesItem';
import { useState } from 'react';

export const GetServices = ({ onClick }) => {
  const [activeId, setActiveId] = useState(0);

  return servicesData.map(
    ({ id, details, title, daysCount, price, description, image }) => {
      return (
        <ServicesItem
          key={id}
          id={id}
          details={details}
          title={title}
          daysCount={daysCount}
          price={price}
          description={description}
          image={image}
          onClick={onClick}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      );
    }
  );
};
