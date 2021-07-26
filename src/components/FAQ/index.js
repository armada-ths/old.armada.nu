import React, { useState } from 'react'
import FAQHeader from './FAQHeader'
import FAQContent from './FAQContent'
import FAQBackground from '../../../static/assets/faqbanner.png'

//FAQ questions and answers. Only question and answer are used in search. Define displayAnswer to use elements such as link-tags in the answer.
const questions = [
    {title: 'ABOUT ARMADA', body: [
        {question: 'What is THS Armada?', answer: <span>THS Armada is a student-driven project at KTH that arranges the largest career fair in Scandinavia. Every year, Armada creates a platform for you to meet some of the most popular employers for engineers. The grand THS Armada fair is a two-day event with companies from all over the world. <br/> <br/>
        This year we will repeat the success from last year with a virtual fair to make sure our exhibitors and visitors can connect in a safe way. In addition, we will build lounges at KTH where students can enjoy the virtual fair and still get the feel of a physical fair. <br/> <br/>
        Leading up to the fair Armada arranges event weeks where you have the chance to attend lunch lectures, case evenings and much more. Make sure to follow us on social media to not miss out</span>},
        {question: 'When is this year\'s Armada fair?', answer: '23rd & 24th of November'},
        {question: 'Where is THS Armada?', answer: <span>This year THS Armada will take place both virtually at <a href="https://event.armada.nu/sv/events">graduateland</a> and in Nymble, Drottning Kristinas väg 15-19 in Stockholm. <br/><br/>
        Follow us on <a href="https://www.instagram.com/thsarmada/">Instagram</a> to keep up on what we have in store. 
        </span>},
        {question: 'How can I find all the events that Armada arranges?', answer: <span>Follow us on <a href="https://www.facebook.com/thsarmada">Facebook</a> to not miss out on any events. To register for an event, check out the <a href='/events/'>event tab</a></span>},
    ]},    
    {title: 'THE FAIR', body: [
        {question: 'When is the Armada fair taking place?', answer: 'The Armada Career Fair takes place each year in November for 2 days. This year the fair will take place November 23rd-24th.'},
        {question: 'Where is the Armada fair taking place?', answer: <span>The fair will be held at a platform called Graduateland. You can register for the fair and create a profile at on <a href="https://event.armada.nu/sv">Graduateland</a>.</span>},
        {question: 'What are the opening hours?', answer: '10:00-16:00 on both the 23rd and the 24th of November.'},
        {question: 'Does the Armada fair cost money to attend?', answer: 'No, it is completely free for everyone to visit! It will be even easier this year since you can attend from anywhere in the world.'},
        //{question: 'I do not study at KTH, can I still attend?', answer: 'Yes of course! Everybody is welcome.'},
        //{question: 'How many exhibitors are coming to the Armada fair?', answer: 'The exhibitors are still joining the platform, but the entire exhibitors list can be found here.', displayAnswer: <span>The exhibitors are still joining the platform, but the entire exhibitors list can be found <a href='https://event.armada.nu/sv/virtual-event/3994'>here</a>.</span>},
        //{question: 'What is the Green Room?', answer: 'A place at the fair where companies that actively work with sustainability-related questions get to stand.'},
        //{question: 'What is the Diversity Room?', answer: 'A place at the fair where companies that actively work with diversity-related questions get to stand.'},
        //{question: 'What is the Focus Room?', answer: 'The focus room will be found in Nya Matsalen in Nymble on the days of the fair. Here you will be able to workshop on Sustainability and Diversity as well as see which exhibitors are outstanding in the field.'},
        {question: 'Where can I find last year\'s exhibitors?', answer: <span>You can find previous exhibitors <a href='https://event.armada.nu/sv/virtual-event/3994'>here</a></span>},
    ]},
    {title: 'Virtual Fair - Graduateland', body: [
        {question: 'What is Graduateland?', answer: <span>Graduateland is the platform on which this year's fair will be held. On this platform you will be able to chat with company representatives, watch live lectures, check out exhibitors booths, participate in competitions and so much more. <br/> We suggest that you head over to <a href="https://event.armada.nu/sv">Graduateland</a> asap to create a profile and explore the platform. </span>},
        {question: 'How do I create a profile?', answer: 'Go to https://event.armada.nu/new-signup/start to create your profile. The sooner you do so the sooner you can start booking individual meetings.', displayAnswer: <span>Go to <a href='https://event.armada.nu/new-signup/start'>this page</a> to create your profile. The sooner you do so the sooner you can start booking individual meetings.</span>},
        {question: 'How do I chat with companies?', answer: <span>To chat with a company you simply visit their digital booth and start a chat. The chats will be open as soon as the fair starts at 10:00 on the 23th.<br/>Tips: If you have an interesting profile maybe the companies will reach out to you! Make sure to <a href="https://event.armada.nu/sv">register</a> today to create the perfect profile.</span>},
        {question: 'How do I book individual meetings?', answer: 'You visit the exhibitors profiles and select a time slot that suits you, it’s as simple as that.'},
        {question: 'How do I find live presentations?', answer: <span>You find the live presentations under the Live Presentations tab. There you can also find the schedule and titles of the presentations.<br/> Don’t forget to follow us on <a href="https://www.instagram.com/thsarmada/">Instagram</a> where we will post the schedule in advance. </span>},
        {question: 'What is Armada studio?', answer:<span>Armada Studio is a live streamed studio in between all the happenings during the fair. Here we will recap the happenings, share tips and tricks and keep you company as you attend the digital fair. <br/>Armada studio will be broadcast on our <a href="https://www.facebook.com/thsarmada">Facebook page</a> so make sure to follow us there. </span>},
        {question: 'How do I make sure I don\'t miss Armada Studio?', answer: 'You follow our event on Facebook! '},
        {question: 'How do I apply for jobs?', answer: 'Yes, Armada 2021 let’s you apply for jobs right on the Graduate platform. Check the jobs tab to see what jobs our exhibitors have to offer. We also recommend you to contact the companies you want to work for. Maybe your dream job is just a chat away.'},
        {question: 'How do I match with exhibitors?', answer: 'Matching with an exhibitor means that your profile and the exhibitors profile are perfect for each other. By just creating your profile and filling out as much information as possible you will be matched with the exhibitors and they can reach out to you personally.'},
        {question: 'Do I need a CV?', answer: 'No, you can create a profile directly on the platform. However, you will have the option to upload a CV, something we really encourage you to do. It will help you since the exhibitors can look through it before individual meetings etc.'},
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
        {question: 'What is The Grand Armada Banquet?', answer: 'Every year THS Armada arranges a grand banquet to celebrate the fair and to let exhibitors and students network in a casual setting. However, due to the current circumstances it is yet decided which form the banquet will take. The health and safety of the students and our exhibitors is our main priority. Stay tuned on the plans here on the website.'},
        {question: 'Can I attend the banquet?', answer: 'The whole Armada Team is invited to The Grand Banquet of Armada, as well as our exhibitors. If you are a part of the Armada team 2021 you will receive your invitation by email. Depending on the restriction the after party will be open to KTH students as well. Time will tell.'},
        {question: 'Is it possible to attend the banquet even though I’m not working for Armada?', answer: <span>Due to the current situation the form of the banquet is still in progress. Follow us on <a href="https://www.instagram.com/thsarmada/">Instagram</a> to keep updated.</span>},
    ]},
    {title: 'RECRUITMENT', body: [
        {question: 'How do I become a part of the Armada team?', answer: <span>You apply! Armada recruits three times a year. The next recruitment will be in september. Follow us on <a href="https://www.instagram.com/thsarmada/">Instagram</a> to not miss any important dates. <br/>Do you want to know more about the Armada organisation? Check out the <a href="https://armada.nu/recruitment">Recruitment tab</a> to see what role suits you the best.</span>},
        {question: 'When do THS Armada recruit people?', answer: <span>Armada recruits for different roles and responsibilities during three periods throughout the year. The project group is recruited in December-February and works for almost a year in Armada. Then the Operations team is recruited in April-May and last but not least the Hosts are recruited in August-September. If you have any questions about what it is like to be in THS Armada you can contact the Project Manager at <a href="mailto:a@armada.nu">a@armada.nu</a> or follow us on <a href="https://www.instagram.com/thsarmada/">social media</a>.</span>},
        {question: 'Why should I engage in THS Armada?', answer: 'Meet new people from all parts of KTH, learn a lot and interact with companies! Armada is a great opportunity to enrich your student life.'},
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
