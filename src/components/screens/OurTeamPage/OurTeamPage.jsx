import React from 'react';
import styles from './OurTeamPage.module.scss';
import { coworkersData } from 'data/coworkers.data';


const OurTeamPage = () => {
    return (
        <section className={styles.wrapper}>Наша Команда
            {/* <div className={styles.coworker}>
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
            </div> */}
            {coworkersData.map(item => {
                return (
                    <div className={styles.coworker}>
                        <img className={styles.photo} src={item.photo} alt={`photo ${item.name}`}></img>
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
            })}

            <ul className={styles.slider}>
                {coworkersData.map(item => {
                    return <li key={item.id}>
                        <img className={styles.sliderPhoto} src={item.photoSmall} alt={item.name}>
                        </img>
                    </li>
                })}
            </ul>

        </section>
    )
}


export default OurTeamPage;