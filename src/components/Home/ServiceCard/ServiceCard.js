import React from 'react';

const ServiceCard = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img className="w-25" src={service.img} alt="" srcset=""/>
            <h4 className="mt-5">{service.title}</h4>
            <p className="text-secondary mt-4 mb-5">{service.description}</p>
        </div>
    );
};

export default ServiceCard;