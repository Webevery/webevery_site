import { servicesData, currentLanguages, servicesDataEN } from 'data';
import { ServicesItem } from './ServicesItem';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const GetServices = ({ onClick }) => {
  const [activeId, setActiveId] = useState(0);
  const { i18n } = useTranslation();
  const currentLanguageServicesData = () => {
    return i18n.language === currentLanguages.EN
      ? servicesDataEN
      : servicesData;
  };

  return currentLanguageServicesData().map(
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
