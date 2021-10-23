import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
 
  <div class="container d-flex justify-content-center my-5">
    
     
      <div class="row subscribe shadow p-5 rounded">
      
        <div class="col-auto ">
          <p class="pt-2">
            <strong>Sign up for our services</strong>
          </p>
        </div>
       
        <div class="col-md-5 col-12 mb-4 mb-md-0">
        
          <div class="form-outline mb-4">
            <input type="email" placeholder='Email' id="form5Example25" class="form-control" />
            
          </div>
        </div>
        
        <div class="col-auto mb-4 mb-md-0">
         
          <button type="submit" class="btn btn-primary mb-4">
            Subscribe
          </button>
        </div>
       
      </div>
     
    
  </div>
 
        
    );
};

export default Hero;