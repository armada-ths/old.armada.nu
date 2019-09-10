import React from "react"
import './testimonials.scss';
import Zoom from 'react-reveal/Zoom';


const Testimonials = () => {

  // https://www.react-reveal.com/docs/
  
  const testimonialObjects = [
    {name: "Ananya", role: "Diversity Coordinator", statement: "\"I feel proud and excited to be part of scandinavia's largest student fair\"", image: "/assets/ananya.jpg"},
    {name: "Staffan", role: "Head of Media", statement: "\"We're fun people to hang with, come and talk to us!\"", image: "/assets/staffan.jpg"},
    {name: "Jacob", role: "Head of Career Fair", statement: "\"THS Armada is perhaps the best platform for student engagement at KTH\"", image: "/assets/jacob.jpg"},
    {name: "Luise", role: "Team Leader Lounges", statement: "\"We do more than just serve free coffee, join the team to find out what!\"", image: "/assets/luise.jpg"},
    {name: "Marc", role: "Team Leader Career Fair", statement: "\"Armada is a great way to develop professionally and meet new people\"", image: "/assets/marc.jpg"},
    {name: "Pauline", role: "Photo Team Coordinator", statement: "\"I'm very excited to be a part of Scandinavias largest career fair!\"", image: "/assets/pauline.jpeg"},
    {name: "Ella", role: "Head of Events", statement: "\"Joining Armada is just like Nike's slogan: Just Do It!\"", image: "/assets/ella.jpg"},
    {name: "Abhishek", role: "Team Leader Career Fair", statement: "\"Organizing the biggest career fair with lots of fun...Would never miss this chance\"", image: "/assets/abhishek.jpg"},
    {name: "Linnea", role: "Head of Banquet", statement: "\"THS Armada - probably the best student organization in the world\"", image: "/assets/linnea.jpg"},
    {name: "", role: "", statement: "", image: ""},
  ];

  // const person1 = Math.floor(Math.random() * 5);
  // const person2 = Math.floor(Math.random() * 4) + 5;
  
  return(
      <div className="testimonials">
        <div className="testimonial-header">Meet the <b>Armada</b> team</div>
        <Zoom>
          <div className="flex-container">
            <div className="personal-testimonial">
              <div className="testimonial-photo"><img className="personal-picture" src={testimonialObjects[0].image}/></div>
              <div className="testimonial-info">
                <div className="testimonial-name">{testimonialObjects[0].name}</div>
                <div className="testimonial-position">{testimonialObjects[0].role}</div>
                <div className="testimonial-break">‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾</div>
                <div className="testimonial-text">{testimonialObjects[0].statement}</div>
              </div>
            </div>
            <div className="personal-testimonial">
              <div className="testimonial-photo"><img className="personal-picture" src={testimonialObjects[1].image}/></div>
              <div className="testimonial-info">
                <div className="testimonial-name">{testimonialObjects[1].name}</div>
                <div className="testimonial-position">{testimonialObjects[1].role}</div>
                <div className="testimonial-break">‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾</div>
                <div className="testimonial-text">{testimonialObjects[1].statement}</div>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
  );
}

export default Testimonials
