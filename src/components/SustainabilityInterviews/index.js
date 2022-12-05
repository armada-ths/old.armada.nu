import React from 'react'
import './index.scss'

//TODO remove 'hårdkodning' and add 'show more' to show more people

const SustainabilityInterviews = () => {

  const InterviewQuestions = [
    {text: 'How do you work with sustainability?'},
    {text: 'Where do you see the struggle and potential?'},
    {text: 'What are some sustainability choices you make in your personal life?'}
  ]
  const InterviewAnswers = [
    { id: 'a', name: 'Sigrid Redin & Liang Xinyu', title:'Sustainability Coordinators', imageUrl:'/assets/images/testimonials/Sigrid & Liang.jpg', answer1:'Sigrid: By working to integrate sustainability throughout the fair and mitigate its environmental impacts. \n Liang: It can be reflected in my daily work, developing sustainability certifications and setting sustainability goals for each team.', answer2:'Sigrid: I see the potential in the fact that the people of Armada are aware of the importance of sustainability, and that it therefore is a common goal. The struggle is getting sustainable products and implementing the projects we want while staying within budget. \n Liang: Although the current cost of sustainability certified products is still higher than traditional products, it is still believed that more cost-effective sustainable products will appear on the market in the future as the demand for sustainability rises.', answer3:"Sigrid:I try to integrate sustainability in my everyday life by being careful with energy and water consumption, eating vegetarian food, plus recycling and reusing. Also living in Stockholm has the benefit of being close to everything, making it possible to bike or use public transport whenever I'm going somewhere. \n Liang: I tend to take public transport, use reusable bags and make sure my big purchase has big environmental benefits."},
    { id: 'b', name: 'Melvin Jobe',title: 'Head of Marketing and Communication', imageUrl: '/assets/images/testimonials/Melvin Jobe.jpg', answer1: 'Promote the use of digital marketing rather than physical products/flyers etc.', answer2: 'The ease of handing someone a flyer compared to getting them interested in a post is a struggle but a post can reach more people so the potential is reaching a wider audience.', answer3: 'I recycle all waste at home, try to not have devices/lights on at home if not necessary.' },
    { id: 'c', name: 'Dana Ismail', title: 'Head of Web Development', imageUrl: '/assets/images/testimonials/Dana Ismail.png', answer1: 'In general, you need to be fairly creative to implement additional sustainable measures than those that already exist in web development and IT. This year in Armada we are trying to stay environmentally friendly by, for example, arranging competitions where there are no paper sheets or physical posters. However, we offer QR codes or 4-digit codes that you can use to join and collect points, for example.', answer2: "The struggles mainly lie in the fact that there are quite limited sustainable measures or changes in web development and IT. As previously mentioned, you need to be creative in every solution that you propose so that the sustainability aspect is not ignored. The good thing is that we have a website and social media that we can reach out to a lot of students. All the information is on the website and these social platforms so we don't need to print things on posters but can instead refer to our digital platforms.", answer3: "One thing that I think people take for granted is littering the streets, nature and lakes. It's something that I always think about because this has very negative consequences on the environment and you don't realize this because these actions are indirect threats to a sustainable society."},
    { id: 'd', name: 'Cecilia Zambelli', title: 'Head of Service', imageUrl: '/assets/images/testimonials/Cecilia Zambelli.jpg', answer1: 'Reduce waste in the lounges and in the kitchen where we handle food.', answer2: 'Differentiation of the waste, food waste and trash generated.', answer3: 'Not buy meat or milk products at the supermarket.'},
    { id: 'e', name: 'Kilima Mambo', title: 'Head of Logistics and Fair', imageUrl:'/assets/images/testimonials/Kilima Mambo.jpg', answer1:'As the HoLF my main focus is effective usage of resources. For instance, we focus on using  more digital content and avoid print as much as possible.', answer2:'The struggle is keeping up with the sustainability goals since other options are often easier and available. However, the potential is that most people in the team are trying their best to achieve our goals and live up to our co-values.', answer3:'I am keen on sorting waste. I am also a huge fan of the sharing economy so I tend to prefer hiring things that I periodically use instead of buying them.'}
   // {name: 'Sigrid Redin', title:'Sustainability Coordinator', imageUrl:'/assets/images/testimonials/Sigrid & Liang.jpg', answer1:'By working to integrate sustainability throughout the fair and mitigate its environmental impacts.', answer2:'I see the potential in the fact that the people of Armada are aware of the importance of sustainability, and that it therefore is a common goal. The struggle is getting sustainable products and implementing the projects we want while staying within budget.', answer3:"I try to integrate sustainability in my everyday life by being careful with energy and water consumption, eating vegetarian food, plus recycling and reusing. Also living in Stockholm has the benefit of being close to everything, making it possible to bike or use public transport whenever I'm going somewhere."},
   // {name: 'Liang Xinyu', title:'Sustainability Coordinator', imageUrl:'/assets/images/testimonials/Sigrid & Liang.jpg', answer1:'It can be reflected in my daily work, developing sustainability certifications and setting sustainability goals for each team.', answer2:'Although the current cost of sustainability certified products is still higher than traditional products, it is still believed that more cost-effective sustainable products will appear on the market in the future as the demand for sustainability rises.', answer3:'I tend to take public transport, use reusable bags and make sure my big purchase has big environmental benefits.'}
  ]

    return (
        <>
            <h2>What does sustainability mean to you?</h2>
            {InterviewAnswers.slice(0,5).map(answer => (
                <div key={answer.name} className='sustainability-question'>
                    <div className='interviewee 'id={answer.id}>
                        <img
                            alt=''
                            src={answer.imageUrl}
                            height='200em'
                            width='260em'
                        />
                        <div>
                            <p className='text name'>{answer.name}</p>
                            <p className='text interviewTitle'>{answer.title}</p>
                            <p className='text Question'>
                                {InterviewQuestions[0].text}
                            </p>
                            <p className='text'>{answer.answer1}</p>
                            <p className='text Question'>
                                {InterviewQuestions[1].text}
                            </p>
                            <p className='text'>{answer.answer2}</p>
                            <p className='text Question'>
                                {InterviewQuestions[2].text}
                            </p>
                            <p className='text'>{answer.answer3}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default SustainabilityInterviews
