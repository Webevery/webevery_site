import React, { useState } from 'react';
import { Locations } from "components/share/Locations";
import { coworkersData } from "data";
import styles from './ContactsPage.module.scss';


const ContactsPage = () => {
    //infoWindowData from manual GoogleMap (for component Locations, relocated from it)  infoWindowData: Stores the necessary data of a specific marker.
    const [infoWindowData, setInfoWindowData] = useState();


    return (
        <div className={styles.wrapper}>
            <Locations
                arrayData={coworkersData}
                infoWindowData={infoWindowData}
                setInfoWindowData={setInfoWindowData}
            >
            </Locations>
        </div>
    )
}


export default ContactsPage;











// import React, { useState } from 'react';
// import { InfoWindow } from "@react-google-maps/api";
// import { Link } from "react-router-dom";
// import { Locations } from "components/share/Locations";
// import { coworkersData } from "data";
// import styles from './ContactsPage.module.scss';


// const ContactsPage = () => {
//     // From manual GoogleMap (for component Locations)  infoWindowData: Stores the necessary data of a specific marker.
//     const [infoWindowData, setInfoWindowData] = useState();
//     // From manual GoogleMap (for component Locations) isOpen: Manages the state of the InfoWindow component.
//     const [isOpen, setIsOpen] = useState(false);


//     return (
//         <div className={styles.wrapper}>
//             <Locations
//                 arrayData={coworkers}
//                 setIsOpen={setIsOpen}
//                 setInfoWindowData={setInfoWindowData}
//             >
//                 {isOpen && infoWindowData?.id && (<InfoWindow
//                                     className={styles.info_window}
//                                     onCloseClick={() => { setIsOpen(false) }}
//                                 >
//                                     <div className={styles.infoData}>
//                                         <p>{infoWindowData.city}</p>
//                                         <p>{infoWindowData.name}</p>
//                                         <Link to={`tel:${infoWindowData.phone}`}>{infoWindowData.phone}</Link>
//                                         <Link to={`mailto:${infoWindowData.email}`}>{infoWindowData.email}</ Link>
//                                     </div>
//                                 </InfoWindow>)}
//             </Locations>
//         </div>
//     )
// }


// export default ContactsPage;