import React from "react"
import './testimonials.scss';

const Testimonials = () => {
  
  return(
      <div className="testimonials">
        <div className="testimonial-header">Meet the <b>Armada</b> team</div>
        <div className="flex-container">
          <div className="personal-testimonial">
            <div className="testimonial-photo"><img className="personal-picture" src="/assets/armadalogogreen.jpg"/></div>
            <div className="testimonial-info">
              <div className="testimonial-name">Jacob</div>
              <div className="testimonial-position">Head of Career Fair</div>
              <div className="testimonial-break">‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾</div>
              <div className="testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis justo a dolor tempor, eget tempor justo posuere."</div>
            </div>
          </div>
          <div className="personal-testimonial">
            <div className="testimonial-photo"><img className="personal-picture" src="/assets/armadalogogreen.jpg"/></div>
            <div className="testimonial-info">
              <div className="testimonial-name">Ananya</div>
              <div className="testimonial-position">Diversity Coordinator</div>
              <div className="testimonial-break">‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾</div>
              <div className="testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis justo a dolor tempor, eget tempor justo posuere."</div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Testimonials
