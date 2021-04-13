import React, { useEffect, useState } from 'react'
import './index.scss'
import Zoom from 'react-reveal/Zoom'

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {

      const people = [
        {name: 'Daniel Aston', role: 'Project Manager 2020', statement: 'I\'ve met so many fun people!', image: '/assets/images/testimonials/danieldrake.jpg'},
        {name: 'Lucas Wallhager', role: 'Head of Career Fair 2020', statement: 'Armada is a great opportunity to develop skills for the future in a fun environment, where everyone is working for a common goal.', image: '/assets/images/testimonials/lucasliqour.jpg'},
        {name: 'Elias Ljunggren', role: 'Head of Service and Sponsorship 2020', statement: 'Armada is freakin\' amaaazing!!', image: '/assets/images/testimonials/eliaseagle.jpg'},
        {name: 'Pavel Askari', role: 'Head of Sales 2020', statement: 'It’s a experience you will never forget!', image: '/assets/images/testimonials/pavelpeach.jpg'},
        {name: 'Leonard Hökby', role: 'Head of Logistics and Career Fair 2020', statement: 'You get the chance to do something meaningful and fun at the same time.', image: '/assets/images/testimonials/leolionposter.jpg'},
        {name: 'Camilla Blomqvist', role: 'Head of Sustainability 2020', statement: 'I love being a part of Armada and that I have the ability to make it more sustainable than ever!', image: '/assets/images/testimonials/camillachocolate.jpg'},
        {name: 'Sandra Ransed', role: 'Head of Media & Marketing 2020', statement: 'The best student engagement I have done so far!', image: '/assets/images/testimonials/sandrasavage.jpg'},
        {name: 'Kevin Stojanovski', role: 'Head of Business Relations and Events 2020', statement: 'In times of change, Armada adapts.', image: '/assets/images/testimonials/kevinkelvin.jpg'},
        {name: 'Malavika Balakumar', role: 'Diversity Coordinator 2020', statement: 'Armada is a great platform to meet and make friends from all over the world.', image: '/assets/images/testimonials/malavika_balakumar.jpg'},
        {name: 'Aditya Pratap Singh', role: 'Operations Team - Events 2020', statement: 'Great platform to connect with new people and companies!', image: '/assets/images/testimonials/aditya_pratap_singh.jpg'},
        {name: 'Maria Kessing', role: 'Marketing Coordinator 2020', statement: 'Armada gives the oppportunity to combine your theoretical studies with real working life experiences!', image: '/assets/images/testimonials/maria_kessing.jpg'},
        {name: 'Sateesh Nataraj', role: 'Diversity Coordinator 2020', statement: 'ARMADA - For students, by students.', image: '/assets/images/testimonials/sateesh_nataraj.jpg'}, 
        {name: 'Nachiketh Acharya', role: 'Team Leader - Events 2020', statement: 'Professionalism and fun on a single platform.', image: '/assets/images/testimonials/nachiketh_acharya.jpg'}, 
        {name: 'Saurav Dasgupta', role: 'Sustainability Coordinator 2020', statement: 'The best part about working in this organization is to fuse different perspectives and implement decisions with a common objective.', image: '/assets/images/testimonials/saurav_dasgupta.jpg'},
        {name: 'Clara Myhrman', role: 'Sustainability Coordinator 2020', statement: 'Working with Armada is the first time implementing my sustainability knowledge!', image: '/assets/images/testimonials/clara_myhrman.jpg'},
      ];

      setTestimonials(people.sort(() => 0.5 - Math.random()).slice(0, 2))
      
    }, [])

    return (
        <div className='testimonials'>
            <div className='testimonial-header'>
                Meet the <b>Armada</b> team
            </div>
            <Zoom>
              <div className='flex-container'>
                      {testimonials.map(person => (
                          <div className='personal-testimonial'>
                              <div className='testimonial-photo'>
                                  <img
                                      alt=''
                                      className='personal-picture'
                                      src={person.image}
                                  />
                              </div>
                              <div className='testimonial-info'>
                                  <div className='testimonial-name'>
                                      {person.name}
                                  </div>
                                  <div className='testimonial-position'>
                                      {person.role}
                                  </div>
                                  <div className='testimonial-break'>
                                      ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
                                  </div>
                                  <div className='testimonial-text'>
                                      <q>{person.statement}</q>
                                  </div>
                              </div>
                          </div>
                      ))}
              </div>
            </Zoom>
        </div>
    )
}

export default Testimonials
