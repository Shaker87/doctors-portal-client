import React from 'react';
import './MakeAppoinment.css';
import makeappoinment from '../../../images/make-appoinment.png';

const MakeAppoinment = () => {
    return (
        <section className="appoinment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={makeappoinment} alt="" srcset=""/>
                    </div>
                    <div className="col-md-7 text-white mt-5">
                        <h3 style={{color: '#6ACECE'}} >Appointment</h3>
                        <h1 className="mt-3">Make An Appointment <br/> Today</h1>
                        <p className="mt-4 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut impedit est quia, dolor aperiam inventore?</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;