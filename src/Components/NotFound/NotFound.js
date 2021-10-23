import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div className=''>
            <img className='w-100' src="/404.jpg" alt="" />
            <Link  to='/home'>
                <button className='d-block mx-auto mb-4  custom-btn'>Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;