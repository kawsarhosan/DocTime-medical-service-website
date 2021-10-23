import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='container my-5'>
           <div className='about'>
                <img className=' d-block mx-auto' src="/logo.png" alt="" />
                <h3 className='text-center'>We are ready for your service</h3>
           </div>
           <div className='d-lg-flex justify-content-center align-items-center my-5'>
                <div>
                <img className='rounded-circle mx-4' src="/images/others/s1.jpg" alt="" />
                </div>
                <div>
                
                <p>
                DocTime is an online medical service targeting emerging markets that are rapidly digitising. Our mission is to improve the health and wellbeing of the populations we serve. We have developed accessible and affordable telehealth services that aims to support the public health system, research and clinical trials.

                DocTime offers on-demand GP and specialist consultations with verified and certified doctors, online prescriptions, medicine delivery, pathology/ diagnostics tests, all while building valuable Electronic Health Records.

                DocTime is vertically integrated with pharmacies/ medicine delivery suppliers, labs/ diagnostics centres, and payment providers for an end-to-end digital health experience.

                DocTime systematically focuses on expanding access to affordable healthcare services to all. We promise to improve our solutions continuously through our scalable technology and data analytics capabilities. Our passionate team is committed to excellence and work extremely hard to ensure we make a positive contribution to the healthcare of the future.
                </p>
                </div>
           </div>
        </div>
    );
};

export default About;