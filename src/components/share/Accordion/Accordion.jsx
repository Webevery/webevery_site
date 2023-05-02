import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import styles from './Accordion.module.scss';


const Accordion = ({ dataArray }) => {
    const [activeIndex, setActiveIndex] = useState(1);

    const renderedDataArray = dataArray.map((item) => (
        <AccordionItem
            key={item.id}
            item={item}
            activeIndex={activeIndex}
            onClick={() => {
                setActiveIndex(item.id);
            }}
        />
    ));


    return (
        <div className={styles.wrapper}>
            <dl className={styles.list}>{renderedDataArray}</dl>
        </div>
    );
};


export default Accordion;