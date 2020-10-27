import React from 'react';
import './FeaturedService.css';
import feature from '../../../images/feature.png';

const FeaturedService = () => {
    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img className="img" src={feature} alt="" srcset=""/>
                </div>
                <div className="col-md-6">
                    <h1 style={{color: '#203047', fontWeight: 'bold'}} className="mt-5">Exceptional Dental <br/> Dare, On Your Terms</h1>
                    <p className="text-secondary pt-5 pb-5 font-weight-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia porro nisi 
                        libero nihil quisquam consequuntur inventore ea rerum, sapiente similique. 
                        Vitae sint sapiente ut in debitis provident reprehenderit quo? Nihil! 
                        Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ut similique 
                        magnam incidunt non repudiandae labore tempora optio doloremque dolorum.
                        dolor sit, amet consectetur adipisicing elit. Facilis aspernatur eveniet,
                         sunt exercitationem perferendis ipsum totam ipsa cumque porro nobis?</p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;