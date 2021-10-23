import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Slider.css";

const Slider = () => {
    return (
        <div className='slider'>
            


            <Carousel>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
      src="/images/slider/h1-elliptical-slider-img-1.jpg"
      alt="First slide"
    />
    <Carousel.Caption className=''>
      <h1>Physical Exams</h1>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      <button className="btn btn-primary">Exams</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="/images/slider/h1-elliptical-slider-img-2.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h1>Speacil Doctors</h1>
      <p>We are try to you meet with our speacial doctors.</p>
      <button className="btn btn-primary">Doctors</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/slider/h1-elliptical-slider-img-3.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h1>24/7 Helpline</h1>
      <p>We care about you, so that our helpline is 24/7 active.</p>
      <button className="btn btn-primary">Helpline</button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Slider;