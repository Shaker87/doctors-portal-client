import React from 'react';
import './infoCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoCard = ({info}) => {
    return (
        <div className="col-md-4 info-container">
            <div className={`d-flex align-items-center justify-content-around info-card info-${info.background}`}>
                <div>
                    <FontAwesomeIcon className="info-icon" icon={info.icon} />
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;