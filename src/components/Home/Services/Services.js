import React from 'react';
import flouride from '../../../images/flouride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceCard from '../ServiceCard/ServiceCard';

const serviceData = [
    {
        img: flouride,
        title: 'Fluride Treatments',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, voluptatibus!'
    },
    {
        img: cavity,
        title: 'Cavity Filling',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, voluptatibus!'
    },
    {
        img: whitening,
        title: 'Teeth Whitening',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, voluptatibus!'
    }
]

const Services = () => {
    return (
        <section className="services-container container mt-5">
           <div className="text-center">
                <h5 style={{color: '#5FC7C7'}}>OUR SERVICES</h5>
                <h1 style={{color: '#203047'}}>Services We Provide</h1>
           </div>
           <div className="d-flex justify-content-center mt-5">
                <div className="w-100 row">
                    {
                        serviceData.map(service => <ServiceCard service={service} key={service.title}></ServiceCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;