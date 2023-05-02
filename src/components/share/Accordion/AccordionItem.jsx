import React from "react";
import styles from './Accordion.module.scss'


const AccordionItem = ({
    item,
    activeIndex,
    onClick
}) => {


    const isDescriptionShown = item.id === activeIndex ?
        `${styles.descriptionDetailsChild__visible}` : `${styles.descriptionDetailsChild}`;

    const ariaExpanded = item.id === activeIndex ? "true" : "false";

    return (
        <div className={styles.itemWrapper}>
            <dt>
                <button
                    aria-expanded={ariaExpanded}
                    aria-controls={item.id}
                    className={styles.descriptionTermChild}
                    onClick={onClick}
                >
                    {item.name}, {item.country}, {item.city}, {item.email}, {item.phone}
                </button>
            </dt>
            <dd>
                <iframe
                    id={item.id}
                    className={isDescriptionShown}
                    title={item.name} src={item.location} allowFullScreen=""
                    loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </dd>
        </div>
    );
}


export default AccordionItem;