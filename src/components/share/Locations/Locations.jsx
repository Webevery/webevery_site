/* global google */
import { GoogleMap, MarkerF, useLoadScript, InfoWindow } from "@react-google-maps/api";
// import { useMemo } from "react";
import { useState } from "react";
import styles from "./Locations.module.scss";
import { Link } from "react-router-dom";


const Locations = ({ arrayData, infoWindowData, setInfoWindowData }) => {
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
    // // infoWindowData: Stores the necessary data of a specific marker. Relocate to Contacts
    // const [infoWindowData, setInfoWindowData] = useState();


    // Set the reference of the map component and set a default view of the map
    const onMapLoad = (map) => {
        setMapRef(map);

        // LatLngBounds: It is an instance which represents a geographical rectangle from the points at its south-west and north-east corners.
        const bounds = new google.maps.LatLngBounds();
        // If you are getting an error google is not defined, then either use it like window.google.maps.LatLngBounds() or mention /* global google */ on the top of your file.

        // extend method: It extends the map bounds to contain the given point.
        arrayData?.forEach(({ latitude: lat, longitude: lng }) => bounds.extend({ lat, lng }));

        // fitBounds method: It accepts the bounds as a parameter and sets the map viewport to contain the given bounds.
        map.fitBounds(bounds);
    };


    // Find values of keys latitude and longitude in object and return them as object.
    const findLatLng = (obj) => {
        const latitude = Object.keys(obj).find((item) => item === "latitude");
        const lat = obj[latitude];

        const longitude = Object.keys(obj).find((item) => item === "longitude");
        const lng = obj[longitude];

        if (latitude === undefined || longitude === undefined) {
            alert("Your object must have properties latitude and longitude");
            return;
        }
        return { lat, lng }
    }


    // Set the clicked marker at the center position of the map by providing the latitude and longitude to the panTo method. Set the necessary data for a specific marker. Change the isOpen state to true to show the InfoWindow component
    const handleMarkerClick = (element) => {
        const coordinates = findLatLng(element);
        mapRef?.panTo(coordinates);
        setInfoWindowData(element);
        setIsOpen(true);
    };


    return (
        <section className={styles.wrapper}>
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                // the main component inside which all the other map components render
                <GoogleMap
                    mapContainerClassName={styles.mapСontainer}
                    // center={center}
                    // sets the initial zoom level of the map
                    // zoom={5.5}
                    // onLoad={onLoad}
                    onLoad={onMapLoad}
                    onClick={() => setIsOpen(false)}
                >
                    {arrayData.map((element) => {
                        const coordinates = findLatLng(element);

                        return (
                            <MarkerF
                                key={element.id}
                                className={styles.marker}
                                position={coordinates}
                                // icon={"http://maps.google.com/mapfiles/ms/micons/info.png"}
                                // icon={"http://maps.google.com/mapfiles/kml/pal4/icon53.png"}
                                icon={"http://maps.google.com/mapfiles/kml/pal2/icon0.png"}
                                // icon={customMarker}
                                onClick={() => { handleMarkerClick(element) }}
                            >

                                {isOpen && infoWindowData?.id === element.id && (<InfoWindow
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

                            </MarkerF>)
                    }

                    )}
                </GoogleMap>

            )}
        </section>
    );
}


export default Locations;