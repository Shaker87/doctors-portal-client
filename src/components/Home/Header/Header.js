import React from 'react';
import './Header.css';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../../SharedComponents/Navbar/Navbar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';

const Header = () => {
    return (
        <div className="background">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;