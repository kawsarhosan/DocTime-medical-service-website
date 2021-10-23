import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    
    const [doctors, setDoctors] = useState([]);
    

    useEffect(()=>{
        fetch('/fakedata.json')
        .then(res=> res.json())
        .then(data=> setDoctors(data))
        // console.log(data);
    },[])

    return (
        <div className='container py-2 my-5'>
            <div className=' text-center'>
                <h1 className='fw-bold custom-color my-4'>Our Doctors</h1>
                <p className=''>For your service</p>
              
                
            </div>
            <div className='row row-cols-1 row-cols-md-3 g-5 my-4'>
                {
                    doctors.map(doctor=><Doctor
                    key={doctor.id}
                    doctor={doctor}
                    ></Doctor>
                    )
                }
            </div>
        </div>
    );
};

export default Doctors;