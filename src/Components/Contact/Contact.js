import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='container my-5'>
            <div className="card-group  text-white">
                <div className="card border-0 twice">
                <i class="fas fa-clinic-medical"></i>
                    <div className="card-body">
                    <h2 className="card-title">Hospitality</h2>
                    <p className="card-text text-white">
                    Clinical excellence must be the priority for any health care service provider.
                    </p>
                    <p className="card-text">
                    <button className="btn btn-outline-light">Apply For A Bed</button>
                    </p>
                    </div>
                </div>
                <div className="card border-0 middle">
                <i class="fas fa-phone"></i>
                    <div className="card-body">
                    <h2 className="card-title">Emergency Care</h2>
                    <p className="card-text text-white">
                    Esteem spirit temper too say adieus who direct esteem. It esteems luckily.
                    </p>
                    <p className="card-text">
                        <button className="btn btn-outline-light">+88 01640522160</button>
                    </p>
                    </div>
                </div>
                <div className="card border-0 twice">
                <i class="fas fa-briefcase-medical"></i>
                    <div className="card-body">
                    <h2 className="card-title">Chamber Service</h2>
                    <p className="card-text text-white">
                    Leading edge care for Your family Esteem spirit temper too say adieus.
                    </p>
                    <p className="card-text">
                    <button className="btn btn-outline-light">Make A Appointment</button>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;