import React from "react"
import './testimonials.scss';

const Testimonials = () => {

  const REACT_VERSION = React.version;
  
  return(
      <div className="testimonials">
        <div className="testimonial-header">Meet the <b>Armada</b> team</div>
        <div>Slideshow!</div>
        <div>{REACT_VERSION}</div>
      </div>
  );
}

export default Testimonials
