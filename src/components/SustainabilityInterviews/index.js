import React from 'react';

import './index.scss';

//TODO remove 'hårdkodning' and add 'show more' to show more people

// class Sustainability extends React.Component {
const SustainabilityInterviews = () => {

  const InterviewQuetions = [
    {text: 'How do you work with sustainability?'},
    {text: 'What are the biggest challenges?'},
    {text: 'Why is sustainability important to you?'}
  ]
  const InterviewAnswers = [
    {name: 'Daniel Aston', title: 'Project Manager', imageUrl: '/assets/images/PG20/danieldrake.jpg', answer1: 'As it is one of our core values, we integrate it in everything we do.', answer2: 'Definitely sustainable workload, since we are also students studying full time.', answer3: 'I strongly believe that it makes the world a better place for everyone, and I want that.'},
    {name: 'Josefine Havdelin', title: 'Head of Banquet', imageUrl: '/assets/images/PG20/josefinejogging.jpg', answer1: 'We choose environmentally friendly materials, reduce single use as much as we can and serve socially responsible food. We discuss it frequently within the team and we are also planning on having a sustainability workshop.', answer2: 'Change the way we look at decorations as “one use only” and still manage to make it look incredible and memorable. How to develop the things we already do but still keep the budget.', answer3: 'In order to maintain the wildlife and nature we need to be responsible and make choices that are good for the earth and not just ourselves.'},
    {name: 'Elias Ljunggren',title: 'Head of Service & Sponsorship', imageUrl: '/assets/images/PG20/eliaseagle.jpg', answer1: 'I work with sustainability by looking for solutions where economics and environmental awareness go hand in hand. Specifically when I order clothes for Armada and the consumables we will have in the lounges.', answer2: 'To get a good price for a sustainable product. The quality is often higher for an environmentally friendly product and it is important to find a balance between price and sustainability.', answer3: 'I study energy and the environment at KTH, so I have become aware of the challenges we face. It is important that sustainability imbues all the work we do and our everyday lives! ' },
    {name: 'Leonard Hökby', titel: 'Head of Logistics & Fair', imageUrl:'/assets/images/PG20/leolionposter.jpg', answer1:'I work with sustainability through all decisions made within the Logistics and Fair subgroup: everything from waste management and supplies to finding ways to measure our impact.', answer2:'The biggest challenges we have is with our partners and when we have to choose between sustainability and a good fair service.', answer3:'Sustainability is important to me because we, as humans, are responsible for taking care of Gods creation.'},
    {name: 'Ann-Catrin Lindkvist', title:'', imageUrl:'/assets/images/PG20/acalphabet.jpg', answer1:'As head of web development I mainly focus on sustainable code that can be reused by the developers upcoming years. It is also really important that my team have a reasonable amount of workload. As for the environment we use the website as a digital alternative instead of handing out flyers. We do not buy unnecessary stuff and we do not use disposables either.', answer2:'The biggest challenge is to have just enough information on the website that is also relevant to the message we want the user to know. But my team is the best, so nothing feels impossible with them!', answer3:'Sustainability is important for the future. I will become a teacher (and also an engineer) when I am done with my studies. Sustainability is important for my future pupils. To take a sustainable action is an active choice we all can make. It motivates me.'}
  ]

    return (<div>
      <h2>What does sustainability mean to you?</h2>
      <div className='question'>
        <img alt='' className='card_Image' src={InterviewAnswers[0].imageUrl} height='200em' width='260em'/>
        <div class="col-md-6 border-left">
          <p className='text name'>{InterviewAnswers[0].name}</p>
          <p className='text name'>{InterviewAnswers[0].title}</p>
          <p className='text Question'>{InterviewQuetions[0].text}</p>
          <p className='text'>{InterviewAnswers[0].answer1}</p>
          <p className='text Question'>{InterviewQuetions[1].text}</p>
          <p className='text'>{InterviewAnswers[0].answer2}</p>
          <p className='text Question'>{InterviewQuetions[2].text}</p>
          <p className='text'>{InterviewAnswers[0].answer3}</p>
        </div>
      </div>
      <div className='question'>
        <img alt='' className='card_Image' src={InterviewAnswers[1].imageUrl} height='200em' width='260em'/>
        <div class="col-md-6 border-left">
          <p className='text name'>{InterviewAnswers[1].name}</p>
          <p className='text name'>{InterviewAnswers[1].title}</p>
          <p className='text Question'>{InterviewQuetions[0].text}</p>
          <p className='text'>{InterviewAnswers[1].answer1}</p>
          <p className='text Question'>{InterviewQuetions[1].text}</p>
          <p className='text'>{InterviewAnswers[1].answer2}</p>
          <p className='text Question'>{InterviewQuetions[2].text}</p>
          <p className='text'>{InterviewAnswers[1].answer3}</p>
        </div>
      </div>
      <div className='question'>
        <img alt='' className='card_Image' src={InterviewAnswers[2].imageUrl} height='200em' width='260em'/>
        <div class="col-md-6 border-left">
          <p className='text name'>{InterviewAnswers[2].name}</p>
          <p className='text name'>{InterviewAnswers[2].title}</p>
          <p className='text Question'>{InterviewQuetions[0].text}</p>
          <p className='text'>{InterviewAnswers[2].answer1}</p>
          <p className='text Question'>{InterviewQuetions[1].text}</p>
          <p className='text'>{InterviewAnswers[2].answer2}</p>
          <p className='text Question'>{InterviewQuetions[2].text}</p>
          <p className='text'>{InterviewAnswers[2].answer3}</p>
        </div>
      </div>

    </div>

    );
}

export default SustainabilityInterviews;
