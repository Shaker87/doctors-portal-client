import React from 'react';
import './HeaderMain.css';
import chair from '../../../images/chair.png'
import { useHistory, useLocation } from 'react-router-dom';

const HeaderMain = () => {
   const history = useHistory();
   const location = useLocation();
   const handleAppointment = () => {
     history.push("/appointment");
   }
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
          <div className="col-md-4 offset-md-1">
            <h1 style={{color: '#203047', fontWeight: 'bold'}}>Your New Smile <br/> Starts Here</h1>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non modi quasi veritatis cum officiis
             sint labore quidem quas accusamus assumenda sunt aut iusto dicta 
             voluptatum distinctio at alias, possimus provident.</p>
             <button onClick={handleAppointment} className="btn btn-primary">Get Appointment</button>
          </div>  
          <div className="col-md-6">
              <img src={chair} alt="" className="img-fluid" />
          </div>
        </main>
    );
};

export default HeaderMain;