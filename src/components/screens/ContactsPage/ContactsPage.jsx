// // 1-st example
// import React, { useState } from 'react';
// import { coworkers } from "data/coworkers.data";
// import styles from "./ContactsPage.module.scss";


// const ContactsPage = () => {
//     const [coworkerLocation, setCoworkerLocation] = useState("");

//     const openOrCloseMap = (array, id) => {
//         if (!coworkerLocation) {
//             const currentCoworker = array.find(item => item.id === id);
//             setCoworkerLocation(currentCoworker.location)
//             console.log(currentCoworker);
//         } else setCoworkerLocation("")
//     }

//     const coworker = coworkers.map(({ id, name, city, country, location, email, phone }) => (
//         <li className={styles.coworker} key={id}>
//             <p className={styles.coworkerInformation}>{name}, {country}, {city}, {email}, {phone}</p>

//             <button
//                 type="button"
//                 className={styles.buttonOpenOrCloseMap}
//                 id={id}
//                 onClick={() => openOrCloseMap(coworkers, id)}
//                 disabled={(coworkerLocation !== "" && location !== coworkerLocation)}
//                 aria-label="Open or close map"
//             >{location === coworkerLocation ? "Close map" : "Open map"}
//             </button>
//         </li >
//     )
//     );


//     return (
//         <section className={styles.wrapper}>
//             <ul className={styles.contactsPageList}>{coworker}</ul>

//             {coworkerLocation ? <iframe className={styles.coworkerMap} title={coworker.name} src={coworkerLocation} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> : null}
//         </section>
//     );
// }


// export default ContactsPage;







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






// 3-rd example
/* global google */
import { GoogleMap, MarkerF, useLoadScript, InfoWindow } from "@react-google-maps/api";
// import { useMemo } from "react";
import { useState } from "react";
import styles from "./ContactsPage.module.scss";
import { coworkers } from "data";
import { Link } from "react-router-dom";


const ContactsPage = () => {
    //  load the Google Maps API script
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    });

    // set a default center of the map
    // const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

    // const center = useMemo(() => ({ lat: 49.842957, lng: 24.031111 }), []); // Lviv

    // const customMarker = {
    //     path: "M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759   c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z    M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713   v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336   h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805",
    //     fillColor: "red",
    //     fillOpacity: 2,
    //     strokeWeight: 1,
    //     rotation: 0,
    //     scale: 1,
    // };


    // mapRef: Stores the reference of the map component.
    const [mapRef, setMapRef] = useState();
    // isOpen: Manages the state of the InfoWindow component.
    const [isOpen, setIsOpen] = useState(false);
    // infoWindowData: Stores the necessary data of a specific marker.
    const [infoWindowData, setInfoWindowData] = useState();


    // Set the reference of the map component and set a default view of the map
    const onMapLoad = (map) => {
        setMapRef(map);

        // LatLngBounds: It is an instance which represents a geographical rectangle from the points at its south-west and north-east corners.
        const bounds = new google.maps.LatLngBounds();
        // If you are getting an error google is not defined, then either use it like window.google.maps.LatLngBounds() or mention /* global google */ on the top of your file.

        // extend method: It extends the map bounds to contain the given point.
        coworkers?.forEach(({ latitude: lat, longitude: lng }) => bounds.extend({ lat, lng }));

        // fitBounds method: It accepts the bounds as a parameter and sets the map viewport to contain the given bounds.
        map.fitBounds(bounds);
    };


    // Set the clicked marker at the center position of the map by providing the latitude and longitude to the panTo method. Set the necessary data for a specific marker. Change the isOpen state to true to show the InfoWindow component
    const handleMarkerClick = (id, lat, lng, name, city, email, phone) => {
        mapRef?.panTo({ lat, lng });
        setInfoWindowData({ id, name, city, email, phone });
        setIsOpen(true);
    };

    return (
        <section className={styles.app}>
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                // the main component inside which all the other map components render
                <GoogleMap
                    mapContainerClassName={styles.map_container}
                    // center={center}
                    // sets the initial zoom level of the map
                    // zoom={5.5}
                    // onLoad={onLoad}
                    onLoad={onMapLoad}
                    onClick={() => setIsOpen(false)}
                >
                    {coworkers.map(({ id, latitude: lat, longitude: lng, name, city, email, phone }) =>
                        <MarkerF
                            key={id}
                            className={styles.marker}
                            position={{ lat, lng }}
                            // icon={"http://maps.google.com/mapfiles/ms/micons/info.png"}
                            // icon={"http://maps.google.com/mapfiles/kml/pal4/icon53.png"}
                            icon={"http://maps.google.com/mapfiles/kml/pal2/icon0.png"}
                            // icon={customMarker}
                            onClick={() => { handleMarkerClick(id, lat, lng, name, city, email, phone) }}


                        >
                            {isOpen && infoWindowData?.id === id && (<InfoWindow
                                className={styles.info_window}
                                onCloseClick={() => { setIsOpen(false) }}
                            >
                                <div className={styles.infoData}>
                                    <p>{infoWindowData.city}</p>
                                    <p>{infoWindowData.name}</p>
                                    <Link to={`tel:${infoWindowData.phone}`}>{infoWindowData.phone}</Link>
                                    <Link to={`mailto:${infoWindowData.email}`}>{infoWindowData.email}</ Link>
                                </div>
                            </InfoWindow>)}
                        </MarkerF>
                    )}
                </GoogleMap>

            )}
        </section>
    );
}


export default ContactsPage;