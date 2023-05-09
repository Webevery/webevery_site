import React, { useState } from 'react';
import { Locations } from "components/share/Locations";
import { coworkers } from "data";


const ContactsPage = () => {
    //From manual GoogleMap (for component Locations)  infoWindowData: Stores the necessary data of a specific marker.
    const [infoWindowData, setInfoWindowData] = useState();


    return (
        <>
            <Locations
                arrayData={coworkers}
                infoWindowData={infoWindowData}
                setInfoWindowData={setInfoWindowData}
            >
            </Locations>
        </>
    )
}


export default ContactsPage;