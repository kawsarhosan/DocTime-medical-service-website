import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css';

const Doctor = (props) => {
    const {id,name, img, designation}= props.doctor;
    // console.log(props.doctor)
    return (
        <div className="col">

                    <div className='card-group h-100 shadow-sm'>
                    <div className="card h-100">
                    <img src={img} className="card-img-top bg-light w-50 mx-auto border border-1 rounded-circle mt-4" alt="..."/>
                    <div className="card-body text-center">
                        
                        <h3 className='fw-bold'>{name}</h3>
                       <h5 className="card-title text-muted">{designation}</h5><br/>

                       <div className='d-flex justify-content-evenly align-items-center'>
                        <Link to={`/doctordetails/${id}`}>
                            <button className=" custom-btn">Meeting Now</button>
                        </Link>    
                        
                       </div>
                    </div>
                    </div>
                    </div>
                </div>
    );
};

export default Doctor;