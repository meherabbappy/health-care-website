import React from "react";
import { Carousel,} from "react-bootstrap";
import "./Banner.css"

const Banner = () => {
  return (
    <div className = "containers">

<Carousel>
  <Carousel.Item>
    <img
      className="w-100 img-fluid"
      // style = {{height:"95vh"}}
      src="https://website-api.doctorshosp.com/storage/images/banners/find-a-doctor.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style = {{height:"95vh"}}
      src="https://thumbs.dreamstime.com/b/healthcare-medical-concept-medicine-doctor-stethoscope-hand-patients-come-to-hospital-background-179931139.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style = {{height:"95vh"}}
      src="https://website-api.doctorshosp.com/storage/images/pages_banners/BndacrhCaBoNkseII5JLxUmUnNPiDqHxdzAsm6Gh.jpeg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </div>
  );
};

export default Banner;
