import React, { useState } from 'react';
import styles from './OurTeamPage.module.scss';
import { coworkersData } from 'data/coworkers.data';
import mapGeneral from 'images/coworkersLocations/mapGeneral.png'


const OurTeamPage = () => {
    const [coworkerId, setCoworkerId] = useState(0);


    return (
        <section className={styles.wrapper}>Наша Команда
            {!coworkerId ? < img className={styles.mapGeneral} src={mapGeneral} alt="All coworker's locations" /> : <div>{coworkersData.map(item => {
                return (
                    <div className={styles.coworker}>
                        <img className={styles.photo} src={item.photo} alt={`photo ${item.name}`} />
                        <div>
                            <p className={styles.name}>{item.name}</p>
                            <p className={styles.profession}>{item.profession}</p>
                            <p className={styles.city}>{item.city},
                                <span className={styles.country} >{item.country}</span></p>
                            <p className={styles.quote}>{item.quote}</p>
                            <p className={styles.humor}>{item.humor}</p>
                            <img className={styles.map} src={item.location} alt={`location ${item.name}`}></img>
                        </div>
                    </div>
                )
            })
            }</div>}

            <ul className={styles.slider}>
                {coworkersData.map(item => {
                    return <li key={item.id} onClick={() => setCoworkerId(item.id)}>
                        <img className={styles.sliderPhoto} src={item.photoSmall} alt={item.name}>
                        </img>
                    </li>
                })}
            </ul>

        </section>
    )
}


export default OurTeamPage;