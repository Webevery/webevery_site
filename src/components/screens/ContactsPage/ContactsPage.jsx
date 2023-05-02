// 1-st example
import React, { useState } from 'react';
import { coworkers } from "data/coworkers.data";
import styles from "./ContactsPage.module.scss";


const ContactsPage = () => {
    const [coworkerLocation, setCoworkerLocation] = useState("");

    const openOrCloseMap = (array, id) => {
        if (!coworkerLocation) {
            const currentCoworker = array.find(item => item.id === id);
            setCoworkerLocation(currentCoworker.location)
            console.log(currentCoworker);
        } else setCoworkerLocation("")
    }

    const coworker = coworkers.map(({ id, name, city, country, location, email, phone }) => (
        <li className={styles.coworker} key={id}>
            <p className={styles.coworkerInformation}>{name}, {country}, {city}, {email}, {phone}</p>

            <button
                type="button"
                className={styles.buttonOpenOrCloseMap}
                id={id}
                onClick={() => openOrCloseMap(coworkers, id)}
                disabled={(coworkerLocation !== "" && location !== coworkerLocation)}
                aria-label="Open or close map"
            >{location === coworkerLocation ? "Close map" : "Open map"}
            </button>
        </li >
    )
    );


    return (
        <section className={styles.wrapper}>
            <ul className={styles.contactsPageList}>{coworker}</ul>

            {coworkerLocation ? <iframe className={styles.coworkerMap} title={coworker.name} src={coworkerLocation} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> : null}
        </section>
    );
}


export default ContactsPage;







// 2-nd example
// import React from 'react';
// import { coworkers } from "data/coworkers.data";
// import styles from "./ContactsPage.module.scss";
// import { Accordion } from 'components/share/Accordion';


// const ContactsPage = () => {


//     return (
//         <section className={styles.wrapper}>
//             <Accordion dataArray={coworkers} />
//         </section>

//     );
// }


// export default ContactsPage;