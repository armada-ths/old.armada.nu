import React, { useEffect, useState } from 'react'
import './index.scss'
import axios from 'axios'

//TODO remove 'hårdkodning' and add 'show more' to show more people
/* Started edit by Nima in Okt 2023. A lot was unneccesarrily hardcoded and new design is on figma */

const SustainabilityInterviews = () => {
    const [names, setNames] = useState([])
    const [images, setImages] = useState([]) //image url from ais
    const roles = [
        'Project Manager',
        'Head of Logistics and Fair',
        'Head of Web Development',
        'Head of Marketing and Communication',
        'Head of Service and Sponsorship',
    ]

    useEffect(() => {
        axios.get('https://ais.armada.nu/api/organization/v2').then(res => {
            roles.forEach(role => {
                res.data.forEach(team => {
                    team.people.forEach(person => {
                        if (person.role.includes(role)) {
                            setNames(old => [...old, person.name])
                            setImages(old => [...old, person.picture])
                        }
                    })
                })
            })
        })
        console.log(names)
        console.log(images)
    }, [])

    const InterviewQuestions = [
        {
            text: '1) What role does sustainability play in the work that you do for Armada?',
        },
        {
            text: '2) What potential barrier and opportunity do you foresee for Armada 2023 with regards to implementing sustainability?',
        },
        {
            text: '3) How would you like to contribute to a sustainable Armada 2023?',
        },
        {
            text: '4) What are some sustainable decisions that you make on a daily basis? ',
        },
    ]
    const InterviewAnswers = [
        {
            name: names[0],
            title: roles[0],
            imageUrl: images[0],
            answer1:
                'For me, sustainability plays the role of an evaluation and prioritisation tool through which sustainable parameters are used to evaluate what THS Armada should and should not do. ',
            answer2:
                'A potential barrier(s) that can unfold is the procurement of single use items like cups, water bottles, and handouts. Ultimately, THS Armada undertakes to limit such usage by imploring exhibitors to consider sustainability in their hand-outs, and also by reusing as much as possible. ',
            answer3:
                'I would like to contribute to a sustainable Armada by creating an environment where there can be a lot of ideas put forth, and where Armada takes action on the things where the organisation deems action to be taken. ',
            answer4:
                'Mostly by monitoring social sustainability and a sustainable workload for people in the project, deciding to push people to do and act more, or let them recover based on what is needed at the given moment in time. ',
        },
        {
            name: names[1],
            title: roles[1],
            imageUrl: images[1],
            answer1:
                'Sustainability plays a huge role in the efforts I make when it comes to the utilisation and reusability of the resources that THS Armada has. Also, sustainability links a lot to the conscious efforts and decision-making when it comes to the sourcing of goods and services that the career fair requires.',
            answer2:
                'From my perspective, Armada is a huge organisation with a lot of moving parts, one of which being the transportation and logistics for the manifold of company items, which of course involves the emissions of GHGs. Although, THS Armada is striving towards more sustainable solutions in this area.',
            answer3:
                'Personally, I would like to see Armada make more of a conscious awareness and transparent efforts for sustainability through the decisions, based on factual information, that will have an impact on creating a fair that is both sustainable and has the potential to go beyond carbon neutrality.',
            answer4:
                'Related to Armada, it most concerns the food choices we make, including the reduction of food waste as well as the sourcing of sustainable food alternatives for our volunteers and utilisation of recyclable alternatives whenever possible.',
        },
        {
            name: names[2],
            title: roles[2],
            imageUrl: images[2],
            answer1:
                'When it comes to IT here at Armada, sustainability plays a huge role with regards to the system architecture. Also, the role of IT system capabilities and sustainability are becoming even more important and greater than ever before and so, the roles that the two play are very broad.',
            answer2:
                'With great potential for IT and sustainability to coincide with one another, comes barriers and so, areas that the IT and sustainability team hope to collaborate on further are A.I., systems architecture, energy consumption reductions and digitalisation.',
            answer3:
                'I would like to contribute to a sustainable Armada by integrating IT systems, and its encompassing infrastructure into a sustainable foundation. Whether that may be through minimising energy usage for the IT systems that we use, or through digitalisation efforts that prevent the use of excessive materials.',
            answer4:
                'Ultimately, it depends on the scope and the day-to-day basis through which I believe that the small decisions are the ones that make the biggest impacts. After all, simple things such as sorting out the waste, reusing materials and reducing consumption of resources such as water are all great and impactful decisions that we should consciously strive for.',
        },
        {
            name: names[3],
            title: roles[3],
            imageUrl: images[3],
            answer1:
                'When it comes to marketing and sustainability, a lot of communication is relayed through digital platforms to ensure that sustainable practices are preached amongst THS Armada’s various teams.',
            answer2:
                'Importantly, it is not entirely possible to eliminate all forms of physical waste, and so a potential barrier could be that it might be easy to fall back into old unsustainable patterns when situations become difficult. For example, being lazy to care about waste sorting due to people feeling tired after a long day’s work.',
            answer3:
                'For me, a well communicated message through the design and media groups via THS Armada’s digital platforms goes a long way for not having to rely on physical means of publicity for visibility. Also, regarding the physical campaigns, we avoid plastic as much as possible and use eco-friendly materials such as paper cups or plates.',
            answer4:
                'Answering this digitally for example! Of course, all team meetings and agendas for team communication are done using the drive and Slack on a daily basis, and this saves us from having to print out important documents or instructions for people to follow. Also, I now have my own coffee cup for the PG sessions which my colleagues have also adopted.',
        },
        {
            name: names[4],
            title: roles[4],
            imageUrl: images[4],
            answer1:
                'I think that sustainability plays a huge role in everything we do. Also, I think that sustainability should always be incorporated into our rationale when making conscious choices about which companies and organisations we source products and services from.',
            answer2:
                'Since sustainability becomes more of a hot topic, the technology and the studies advances and there are more options for making sustainable choices than ever before. The digitalisation and alternative solutions for everything; from events to minimising the use of flyers and papers have increased and is no longer an excuse for not being sustainable. The barriers for sustainability is that it is often a contradiction before being sustainable from an economical and environmental point of view. Sometimes the most environmentally sustainable choice is the most expensive choice, and in those cases, we have to make a well thought out balancing of what weighs more.',
            answer3:
                'As I have the responsibility of the lounges and the lunches, I will always make my choices of food and disposable products based from a sustainability perspective. My hope is also to order products from sustainable companies when it comes to merch and other clothing. Importantly, when it comes to such decisions, I will also consider the economical and social sustainability.',
            answer4:
                'I think that everybody can make small changes in their everyday life to be a little bit more sustainable. The small decisions I make in my everyday life are for example choosing public transport to every possible extent and carpooling in other cases. I am also trying to include more vegan or vegetarian meals in my diet. I really like the minimalist trend that is growing and I strive for living as minimalistic as I can. I believe in buying only essential things and prefer buying a few things with high quality rather than having a lot of unnecessary things. I will also always explore the options of buying things second hand or if I can borrow or rent things that will only be used occasionally.',
        },
    ]

    return (
        <>
            <h2>What does sustainability mean to you?</h2>
            <div className='sustainability-interview-flex'>
                {InterviewAnswers.slice(0, 5).map(answer => (
                    <div key={answer.name} className='sustainability-question'>
                        <div className='interviewee'>
                            <img
                                alt=''
                                src={answer.imageUrl}
                                height='200em'
                                width='260em'
                            />
                            <div>
                                <p className='text name'>{answer.name}</p>
                                <p className='text interviewTitle'>
                                    {answer.title}
                                </p>
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
                                <p className='text Question'>
                                    {InterviewQuestions[3].text}
                                </p>
                                <p className='text'>{answer.answer4}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SustainabilityInterviews
