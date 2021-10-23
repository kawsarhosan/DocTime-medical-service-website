import React from 'react';
import { useParams } from 'react-router';

const DoctorDetails = () => {
    const {doctorId} = useParams();
    
    return (
        <div>
            this is private route {doctorId}
        </div>
    );
};

export default DoctorDetails;