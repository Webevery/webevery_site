import React from 'react';
import styles from './OurTeamPage.module.scss';
import { coworkersData } from 'data/coworkers.data';


const OurTeamPage = () => {
    return (
        <section className={styles.wrapper}>Наша Команда
            <img className={styles.photo} src={coworkersData[0].photo} alt={`photo ${coworkersData[0].name}`}></img>
            <div>
                <p className={styles.name}>{coworkersData[0].name}</p>
                <p className={styles.profession}>{coworkersData[0].profession}</p>
                <p className={styles.city}>{coworkersData[0].city},
                    <span className={styles.country} >{coworkersData[0].country}</span></p>
                <p className={styles.quote}>{coworkersData[0].quote}</p>
                <p className={styles.humor}>{coworkersData[0].humor}</p>
                <img className={styles.map} src={coworkersData[0].location} alt={`location ${coworkersData[0].name}`}></img>
            </div>
        </section>
    )
}


export default OurTeamPage;