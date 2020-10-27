import React from 'react';
import Footer from '../../SharedComponents/Footer/Footer';
import Doctors from '../Doctor/Doctor';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Services></Services>
           <FeaturedService></FeaturedService>
           <MakeAppoinment></MakeAppoinment>
           <Testimonials></Testimonials>
           <Doctors></Doctors>
           <Footer></Footer>
        </div>
    );
};

export default Home;