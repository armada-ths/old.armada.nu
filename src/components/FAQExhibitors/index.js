import './index.scss';
import React, { useState, useEffect } from 'react';

const FAQExhibitors = () => {

    const [collapsed, setCollapsed] = useState(true);
    const [faq, setFaq] = useState([]);

    useEffect(() => {
        const questionsAnswers = [
            {
                subsection: 'General',
                questions: [
                    {question: 'How do I register for the fair?', answer: 'You can register at register.armada.nu'},
                    {question: 'When is the last day to register for the fair?', answer: '28th of May'},
                    {question: 'Can our company get more exposure?', answer: 'Yes, there are lots of ways to get more exposure for your company. For example, you can register for the partner kit which includes additional features during the fair, individual marketing and unlimited job adverts during the fair. '+
                    'Another way to stand out is through a Custommade Lounge. During the fair Armada will build lounges where students can hang out and attend the fair. The lounges will bring the visitors the atmosphere of a physical fair even in these challenging times. You will be able to send us merch, roll-ups etc to create a physical booth to compliment your digital one. '+
                    
                    'You can also market your company through Armada’s different social media channels and even have an Instagram Takeover. '+
                    
                    'An individual event could also be of interest. Armada offers lectures, case evenings or a customized event of your choice. '+
                    
                    'Contact our sales team at [sales@aramda.nu](mailto:sales@aramda.nu) to work out what suits your company best. '},
                    {question: 'How do we become a partner?', answer: 'To become a partner you register your interest in the partner kit on the registration page. As a partner you will not only stand out from the crowd but also boost your employer branding through a variety of marketing towards our students. Note that there is a limited amount of companies that can sign up for the partner kit.'+
                    'To learn more, contact our sales team at [sales@aramda.nu](mailto:sales@aramda.nu). '},
                    {question: 'We would like more information, where do we turn?', answer: 'Head over to our [contact page](https://armada.nu/contact).'},
                ]
            },
            {
                subsection: 'Virtual Fair',
                questions: [
                    {question: 'What is a virtual fair?', answer: 'A Virtual Fair is just like any other fair, but digital! It is hosted on a digital platform where companies and students can meet in a virtual environment through chats, video calls, webinars, and breakout rooms. Students create individual accounts and upload their resume which is then used to match students to companies. Companies will also have their own digital booth where you can present your company,  host games, have quizzes and so on. Only your imagination sets the rules.'},
                    {question: 'What is Graduateland?', answer: 'Graduateland is the platform on which we host the Armada Virtual Fair. It allows companies to connect with students as well as give branding opportunities through a digital booth. It also allows students to create a profile that helps match your company with students with the right experience and interests.'},
                    {question: 'How will we communicate with students during the fair?', answer: 'To communicate with the students our digital platform offers a range of different types of communication. Chatrooms, individual conference calls and breakout rooms where students can drop in at any time and join the conversation or just eavesdrop. You can also reach out to our students through Pop-Up Messages or by hosting a Webinar.'},
                    {question:  'Will there be any physical events during the fair?', answer: 'There will be no physical events where exhibitors can join during the fair. However, you do have the opportunity to create a branded student area, a Custommade Lounge,where students can hang out during the fair.  This is a great way to get more company branding during the fair.'},
                ]
            },
            {
                subsection: 'Marketing',
                questions: [
                    {question: 'Is it possible to add more marketing for our company?', answer: 'Yes, we offer Instagram and Facebook posts as well as Instagram takeovers. Contact our sales team to learn more, [sales@aramda.nu](mailto:sales@aramda.nu).'},
                    {question: 'Can our company market job offers etc through Armada?', answer: 'Yes! For starters, you can market your job offers during the fair. Add unlimited job offers if you have many interesting positions. You can also choose to market your job offers through Armada’s social media. Either via a post or via an Instagram takeover. Or why not have an event where you present your job offers and get the chance to meet KTH students at the same time?'+
                    'Contact our sales team at [sales@aramda.nu](mailto:sales@aramda.nu) to find what suits your needs.'},
                ]
            },
            {
                subsection: 'Events',
                questions: [
                    {question: 'What kind of events can our company host together with Armada?', answer: 'Armada offers lectures, case events and participation at the panel at our Innovation night. You can also choose to participate in Armada Run or in Armada Competition. If you want a customized event, contact our sales team at [sales@aramda.nu](mailto:sales@aramda.nu) to work out an event that is perfect for you.'},
                ]
            },
        ]
        setFaq(questionsAnswers);
    }, [])

    return (<div className='role-container'> 
        {faq.map(section => ( 
            <div key={section.subsection}>
                <h3>{section.subsection}</h3>
                {section.questions.map(question => (
                    <div key={question.question}>
                    <div role='presentation' className='role-header' onClick={() => setCollapsed(!collapsed)} >
                    <div className='role-header-left' >
                        <h4>{question.question}</h4>
                    </div>
                    <div className='role-header-right' >
                        <p className={'arrow-icon' + (collapsed ? ' collapsed-arrow': ' expanded-arrow')}> › </p>
                    </div>
                    </div>
                    <div className={'role-description' + (collapsed ? ' collapsed': ' expanded')}>
                        {!collapsed ? <p>{question.answer}</p> : null }
                    </div>
                    </div>
                ))}
                
            </div>
        ) )}
    </div>
    );
}

export default FAQExhibitors
