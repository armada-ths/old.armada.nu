import React, { useState } from 'react'
import FAQHeader from './FAQHeader'
import FAQContent from './FAQContent'
import FAQBackground from '../../../static/assets/faqbanner.png'

//FAQ questions and answers. Only question and answer are used in search. Define displayAnswer to use elements such as link-tags in the answer.
const questions = [
    {title: 'ABOUT ARMADA', body: [
        {question: 'What is THS Armada?', answer: 'The largest student-led career fair in Scandinavia bringing together great minds from KTH and other universities and companies from around the globe. Every year since 1981 THS Armada has created a platform where students and companies can shape their future, together.'},
        {question: 'Where is THS Armada?', answer: 'This year THS Armada is taking place digitally! Students will also be welcome to our lounge in Nymble where we\'ll have lots of fun activities and goodies.'},
        //{question: 'Where is THS Armada?', answer: 'THS Armada is taking place in Nymble, KTH Entré, and KTH Library. All located on KTH Campus Valhallavägen.'},
        //{question: 'What is the Start-up Arena by KTH Innovation?', answer: 'It is a collaboration between THS Armada and KTH Innovation to showcase start-ups that have come from KTH and are looking for more students that want to join them. So take the chance to #joinastartup at KTH Entré.'},
        //{question: 'How can I find all the events that Armada arranges?', answer: 'Head to armada.nu/events/ and sign up now! THS Armada arranges lunch lectures approximately two week prior to the fair. During the fair, THS Armada arranges Individual meetings with companies and internship pitch lectures.', displayAnswer: <span>Head to <a href='/events/'>armada.nu/events</a> and sign up now! THS Armada arranges lunch lectures approximately two week prior to the fair. During the fair, THS Armada arranges Individual meetings with companies and internship pitch lectures.</span>},
        {question: 'How can I find all the events that Armada arranges?', answer: 'Head to armada.nu/events/ and sign up now!', displayAnswer: <span>Head to <a href='/events/'>armada.nu/events</a> and sign up now!</span>},
    ]},    
    {title: 'THE PLATFORM', body: [
        {question: 'How do I create a profile?', answer: 'Go to https://event.armada.nu/new-signup/start to create your profile. The sooner you do so the sooner you can start booking individual meetings.', displayAnswer: <span>Go to <a href='https://event.armada.nu/new-signup/start'>this page</a> to create your profile. The sooner you do so the sooner you can start booking individual meetings.</span>},
        {question: 'How do I chat?', answer: 'The chats activate as soon as the fair starts at 10:00 on the 17th. You can start a chat with the exhibitors from their profiles. They can also reach out to you as long as you’ve registered.'},
        {question: 'How do I book individual meetings?', answer: 'You visit the exhibitors profiles and select a time slot that suits you. This can be done as of now!'},
        {question: 'How do I find live presentations?', answer: 'You find the live presentations under the Live Presentations tab. There you can also find the schedule and titles of the presentations.'},
        {question: 'How do I make sure I don\'t miss the social media streams?', answer: 'You follow our event on Facebook! ', displayAnswer: <span>You follow our <a href='https://www.facebook.com/events/339937417139500/'>event</a> on Facebook!</span>},
        {question: 'How do I apply for jobs?', answer: 'Either you filter through the open positions in the “jobs” tab, or you apply from the exhibitor profiles.'},
        {question: 'How do I match with exhibitors?', answer: 'By just creating your profile and filling out the information you will be matched with the exhibitors.'},
        {question: 'Do I need a CV?', answer: 'No, but it helps since the exhibitors can look through it before individual meetings etc.'},
    ]},
    {title: 'THE FAIR', body: [
        {question: 'When is the Armada fair taking place?', answer: 'The Armada Career Fair takes place each year in November for 2 days. This year we will host the fair November 17-18.'},
        {question: 'Where is the Armada fair taking place?', answer: 'The exhibitors will all be gathered at event.armada.nu, but you will be able to visit us in the Grand Lounge which is going to be located on the 2nd floor of Nymble. There you will find fika, an arcade hall, a zen room, the focus rooms and more.', displayAnswer: <span>The exhibitors will all be gathered at <a href='https://www.event.armada.nu'>event.armada.nu</a>, but you will be able to visit us in the Grand Lounge which is going to be located on the 2nd floor of Nymble. There you will find fika, an arcade hall, a zen room, the focus rooms and more.</span>},
        {question: 'What are the opening hours?', answer: '10:00-16:00 on both the 17th and 18th of November.'},
        {question: 'Does the Armada fair cost money to attend?', answer: 'No, it is completely free for everyone to visit! It will be even easier this year since you can attend from wherever you are in the world.'},
        //{question: 'I do not study at KTH, can I still attend?', answer: 'Yes of course! Everybody is welcome.'},
        {question: 'How many exhibitors are coming to the Armada fair?', answer: 'The exhibitors are still joining the platform, but the entire exhibitors list can be found here.', displayAnswer: <span>The exhibitors are still joining the platform, but the entire exhibitors list can be found <a href='https://event.armada.nu/sv/virtual-event/3994'>here</a>.</span>},
        {question: 'What is the Zen Room?', answer: 'The place where you will be able to sit down and use your computer or phone to visit the platform, have individual meetings and follow live presentations.'},
        {question: 'What is the Arcade Room?', answer: 'The Arcade Room is a place where we will place games etc. to have a break from using the platform.'},
        {question: 'Will there be fika?', answer: 'YES! Loads of it. And who knows? There might be a surprise pop up as well...'},
        //{question: 'What is the Green Room?', answer: 'A place at the fair where companies that actively work with sustainability-related questions get to stand.'},
        //{question: 'What is the Diversity Room?', answer: 'A place at the fair where companies that actively work with diversity-related questions get to stand.'},
        {question: 'What is the Focus Room?', answer: 'The focus room will be found in Nya Matsalen in Nymble on the days of the fair. Here you will be able to workshop on Sustainability and Diversity as well as see which exhibitors are outstanding in the field.'},
        {question: 'Where can I find last year\'s exhibitors?', answer: 'Head to armada.nu/previous to find last year\'s exhibitors.', displayAnswer: <span>Head to <a href='/previous/'>armada.nu/previous</a> to find last year's exhibitors.</span>},
    ]},
    /*
    {title: 'MAPS AND LOCATIONS', body: [
            {question: 'Where are the Information Desks located?', answer: 'There are two information desks. The first one is located outside KårX in Nymble and the second one is located in the Library, on the right-hand side just before entering the big hall.'},
            {question: 'Where can I find a map of the exhibitor area?', answer: 'Go to armada.nu/maps/ there you will find an interactive map over all exhibitors.', displayAnswer: <span>Go to <a href='/maps'>armada.nu/maps</a>, there you will find an interactive map over all exhibitors.</span>},
            {question: 'How do I find a specific company at the fair?', answer: 'You can do this in two ways, either you go to the exhibitors page, search for the company you are interested in and then click on their map position. Or you go to the map directly and search for the company there, you will then find the location of the company you are looking for.'},
            {question: 'Will there be any wardrobes at the fair?', answer: 'Yes, there will be one wardrobe in Nymble, click here for the position, at the entrance closest to the subway and one in the library close to the information desk'},
    ]},
    */
    {title: 'THE BANQUET', body: [
        {question: 'Can I attend the banquet?', answer: 'The whole Armada Team is invited to The Grand Banquet of Armada. You will recieve your invitation by email.'},
        {question: 'Is it possible to attend the banquet even though I’m not working for Armada?', answer: 'This years banquet will be exclusive for Armada 2020 only. Due to Covid-19 you wont be able to purchase tickets to the after party. We hope to see you next year!'},
    ]},
    {title: 'RECRUITMENT', body: [
        {question: 'How do I become a part of the Armada team?', answer: 'You apply for any of the roles you are interested in during one of the recruitment periods Armada has during the year. See the question about “When do THS Armada recruit people?”'},
        {question: 'When do THS Armada recruit people?', answer: 'Armada recruits for different roles and responsibilities during three periods throughout the year, the project group is recruited in December-February and works for almost a year in Armada. Then the Operations team is recruited in April-May and last but not least the Hosts are recruited in August-September. If you have any questions about what it is like to be in THS Armada you can contact the Project Manager at a@armada.nu or +46 70 790 98 44.'},
        {question: 'Why should I engage in THS Armada?', answer: 'Meet new people from all parts of KTH, learn a lot and interact with companies!'},
    ]}
];

const FAQContainer = () => {
    const [searchResult, setSearchResult] = useState(questions);

    const updateSearchResult = (e) => {
        const input = e.target.value.toLowerCase()
        setSearchResult(
            questions.map(a => Object.assign({}, a)).map(group => {
            group.body = group.body.filter(question => question.question.toLowerCase().includes(input) || question.answer.toLowerCase().includes(input))
            return group
            }).filter(group => group.body.length > 0)
        )
    }

    return(
        <div>
            <div className='faq-search-form'>
                <img alt='' className='terre' src={FAQBackground}/>
                <FAQHeader onQuestionUpdate={updateSearchResult} />
            </div>
            <FAQContent questions={searchResult}/>
        </div>
    )
}

export default FAQContainer
