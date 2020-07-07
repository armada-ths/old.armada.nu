import React from 'react'
import './index.scss';
import Zoom from 'react-reveal/Zoom';

const Testimonials = () => {
  
  const testimonialObjects = [
    {name: 'Daniel Aston', role: 'Project Manager', statement: 'I\'ve met so many fun people', image: '/assets/images/PG20/danieldrake.jpg'},
    {name: 'Lucas Wallhager', role: 'Head of Career Fair', statement: 'Armada is a great opportunity to develop skills for the future in a fun environment, where everyone is working for a common goal', image: '/assets/images/PG20/lucasliqour.jpg'},
    {name: 'Elias Ljunggren', role: 'Head of Service and Sponsorship', statement: 'Armada is freakin\' amaaazing!!', image: '/assets/images/PG20/eliaseagle.jpg'},
    {name: 'Pavel Askari', role: 'Head of Sales', statement: 'It’s a experience you will never forget!', image: '/assets/images/PG20/pavelpeach.jpg'},
    {name: 'Leonard Hökby', role: 'Head of Logistics and Career Fair', statement: 'You get the chance to do something meaningful and fun at the same time.', image: '/assets/images/PG20/leolionposter.jpg'},
    {name: 'Camilla Blomqvist', role: 'Head of Sustainability', statement: 'I love being a part of Armada and that I have the ability to make it more sustainable than ever!', image: '/assets/images/PG20/camillachocolate.jpg'},
  ];

  const person1 = Math.floor(Math.random() * 5);
  const person2 = person1 + 1 % testimonialObjects.length;
  
  return(
      <div className='testimonials'>
        <div className='testimonial-header'>Meet the <b>Armada</b> team</div>
        <Zoom>
          <div className='flex-container'>
            <div className='personal-testimonial'>
              <div className='testimonial-photo'><img alt='' className='personal-picture' src={testimonialObjects[person1].image}/></div>
              <div className='testimonial-info'>
                <div className='testimonial-name'>{testimonialObjects[person1].name}</div>
                <div className='testimonial-position'>{testimonialObjects[person1].role}</div>
                <div className='testimonial-break'>‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾</div>
                <div className='testimonial-text'><q>{testimonialObjects[person1].statement}</q></div>
              </div>
            </div>
            <div className='personal-testimonial'>
              <div className='testimonial-photo'><img alt='' className='personal-picture' src={testimonialObjects[person2].image}/></div>
              <div className='testimonial-info'>
                <div className='testimonial-name'>{testimonialObjects[person2].name}</div>
                <div className='testimonial-position'>{testimonialObjects[person2].role}</div>
                <div className='testimonial-break'>‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾</div>
                <div className='testimonial-text'><q>{testimonialObjects[person2].statement}</q></div>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
  );
}

export default Testimonials
