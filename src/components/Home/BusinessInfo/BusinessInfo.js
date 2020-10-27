import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are Open 24/7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Broklyn, NW 10036, United States',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Contact Us Now',
        description: '+8801919191919',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (

        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infosData.map(info => <InfoCard info={info} key={info.title}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;