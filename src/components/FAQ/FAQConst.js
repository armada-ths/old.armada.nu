import React from 'react'
// const studentQuestions = [
//     {
//         title: 'ABOUT ARMADA',
//         body: [
//             {
//                 question: 'What is THS Armada?',
//                 answer: (
//                     <span>
//                         THS Armada is a student-driven project at KTH that
//                         arranges the largest career fair in Scandinavia. Every
//                         year, Armada creates a platform for you to meet some of
//                         the most popular employers for engineers. The grand THS
//                         Armada fair is a two-day event with companies from all
//                         over the world. <br /> <br />
//                         This year we will repeat the success from last year with
//                         a virtual fair to make sure our exhibitors and visitors
//                         can connect in a safe way. In addition, we will build
//                         lounges at KTH where students can enjoy the virtual fair
//                         and still get the feel of a physical fair. <br /> <br />
//                         Leading up to the fair Armada arranges event weeks where
//                         you have the chance to attend lunch lectures, case
//                         evenings and much more. Make sure to follow us on{' '}
//                         <a href='https://www.instagram.com/thsarmada/'>
//                             social media
//                         </a>{' '}
//                         to not miss out
//                     </span>
//                 ),
//             },
//             {
//                 question: "When is this year's Armada fair?",
//                 answer: '23rd & 24th of November',
//             },
//             {
//                 question: 'Where is THS Armada?',
//                 answer: (
//                     <span>
//                         This year THS Armada will take place both virtually at{' '}
//                         <a href='https://event.armada.nu/sv/event/5150?fbclid=IwAR3jFscNx0HHvsyzGGhac5F1nR74ONKVffxtfivbQZuTwgu2b12-NYriQ64'>
//                             graduateland
//                         </a>{' '}
//                         and in Nymble, Drottning Kristinas väg 15-19 in
//                         Stockholm. <br />
//                         <br />
//                         Follow us on{' '}
//                         <a href='https://www.instagram.com/thsarmada/'>
//                             Instagram
//                         </a>{' '}
//                         to keep up on what we have in store.{' '}
//                     </span>
//                 ),
//             },
//             {
//                 question: 'How can I find all the events that Armada arranges?',
//                 answer: (
//                     <span>
//                         Follow us on{' '}
//                         <a href='https://www.facebook.com/thsarmada'>
//                             Facebook
//                         </a>{' '}
//                         to not miss out on any events. To register for an event,
//                         check out the <a href='/events/'>event tab</a>
//                     </span>
//                 ),
//             },
//         ],
//     },
//     {
//         title: 'THE FAIR',
//         body: [
//             {
//                 question: 'When is the Armada fair taking place?',
//                 answer: 'The Armada Career Fair takes place each year in November for 2 days. This year the fair will take place November 23rd-24th.',
//             },
//             {
//                 question: 'Where is the Armada fair taking place?',
//                 answer: (
//                     <span>
//                         The fair will be held at a platform called Graduateland.
//                         You can register for the fair and create a profile at on{' '}
//                         <a href='https://event.armada.nu/sv/event/5150?fbclid=IwAR3jFscNx0HHvsyzGGhac5F1nR74ONKVffxtfivbQZuTwgu2b12-NYriQ64'>
//                             Graduateland
//                         </a>
//                         .
//                     </span>
//                 ),
//             },
//             {
//                 question: 'What are the opening hours?',
//                 answer: '10:00-16:00 on both the 23rd and the 24th of November.',
//             },
//             {
//                 question: 'Does the Armada fair cost money to attend?',
//                 answer: 'No, it is completely free for everyone to visit! It will be even easier this year since you can attend from anywhere in the world.',
//             },

//             {
//                 question: 'I do not study at KTH, can I still attend?',
//                 answer: 'Yes of course! Everybody is welcome.',
//             },
//             //{question: 'How many exhibitors are coming to the Armada fair?', answer: 'The exhibitors are still joining the platform, but the entire exhibitors list can be found here.', displayAnswer: <span>The exhibitors are still joining the platform, but the entire exhibitors list can be found <a href='https://event.armada.nu/sv/virtual-event/3994'>here</a>.</span>},
//             {
//                 question: 'What is the Green Room?',
//                 answer: 'A place at the fair where companies that actively work with sustainability-related questions get to stand.',
//             },
//             {
//                 question: 'What is the Diversity Room?',
//                 answer: 'A place at the fair where companies that actively work with diversity-related questions get to stand.',
//             },
//             //{question: 'What is the Focus Room?', answer: 'The focus room will be found in Nya Matsalen in Nymble on the days of the fair. Here you will be able to workshop on Sustainability and Diversity as well as see which exhibitors are outstanding in the field.'},

//             {
//                 question: "Where can I find last year's exhibitors?",
//                 answer: (
//                     <span>
//                         You can find previous exhibitors{' '}
//                         <a href='https://event.armada.nu/sv/event/5150?fbclid=IwAR3jFscNx0HHvsyzGGhac5F1nR74ONKVffxtfivbQZuTwgu2b12-NYriQ64'>
//                             here
//                         </a>
//                     </span>
//                 ),
//             },
//         ],
//     },
//     {
//         title: 'VIRTUAL FAIR - GRADUATELAND',
//         body: [
//             {
//                 question: 'What is Graduateland?',
//                 answer: (
//                     <span>
//                         Graduateland is the platform on which this year's fair
//                         will be held. On this platform you will be able to chat
//                         with company representatives, watch live lectures, check
//                         out exhibitors booths, participate in competitions and
//                         so much more. <br /> We suggest that you head over to{' '}
//                         <a href='https://event.armada.nu/sv'>Graduateland</a>{' '}
//                         asap to create a profile and explore the platform.{' '}
//                     </span>
//                 ),
//             },
//             {
//                 question: 'How do I create a profile?',
//                 answer: 'Go to https://event.armada.nu/new-signup/start to create your profile. The sooner you do so the sooner you can start booking individual meetings.',
//                 displayAnswer: (
//                     <span>
//                         Go to{' '}
//                         <a href='https://event.armada.nu/new-signup/start'>
//                             this page
//                         </a>{' '}
//                         to create your profile. The sooner you do so the sooner
//                         you can start booking individual meetings.
//                     </span>
//                 ),
//             },
//             {
//                 question: 'How do I chat with companies?',
//                 answer: (
//                     <span>
//                         To chat with a company you simply visit their digital
//                         booth and start a chat. The chats will be open as soon
//                         as the fair starts at 10:00 on the 23th.
//                         <br />
//                         Tips: If you have an interesting profile maybe the
//                         companies will reach out to you! Make sure to{' '}
//                         <a href='https://event.armada.nu/sv'>register</a> today
//                         to create the perfect profile.
//                     </span>
//                 ),
//             },
//             {
//                 question: 'How do I book individual meetings?',
//                 answer: 'You visit the exhibitors profiles and select a time slot that suits you, it’s as simple as that.',
//             },
//             {
//                 question: 'How do I find live presentations?',
//                 answer: (
//                     <span>
//                         You find the live presentations under the Live
//                         Presentations tab. There you can also find the schedule
//                         and titles of the presentations.
//                         <br /> Don’t forget to follow us on{' '}
//                         <a href='https://www.instagram.com/thsarmada/'>
//                             Instagram
//                         </a>{' '}
//                         where we will post the schedule in advance.{' '}
//                     </span>
//                 ),
//             },
//             {
//                 question: 'What is Armada studio?',
//                 answer: (
//                     <span>
//                         Armada Studio is a live streamed studio in between all
//                         the happenings during the fair. Here we will recap the
//                         happenings, share tips and tricks and keep you company
//                         as you attend the digital fair. <br />
//                         Armada studio will be broadcast on our{' '}
//                         <a href='https://www.facebook.com/thsarmada'>
//                             Facebook page
//                         </a>{' '}
//                         so make sure to follow us there.{' '}
//                     </span>
//                 ),
//             },
//             {
//                 question: "How do I make sure I don't miss Armada Studio?",
//                 answer: 'You follow our event on Facebook! ',
//             },
//             {
//                 question: 'How do I apply for jobs?',
//                 answer: 'Yes, Armada 2021 let’s you apply for jobs right on the Graduate platform. Check the jobs tab to see what jobs our exhibitors have to offer. We also recommend you to contact the companies you want to work for. Maybe your dream job is just a chat away.',
//             },
//             {
//                 question: 'How do I match with exhibitors?',
//                 answer: 'Matching with an exhibitor means that your profile and the exhibitors profile are perfect for each other. By just creating your profile and filling out as much information as possible you will be matched with the exhibitors and they can reach out to you personally.',
//             },
//             {
//                 question: 'Do I need a CV?',
//                 answer: 'No, you can create a profile directly on the platform. However, you will have the option to upload a CV, something we really encourage you to do. It will help you since the exhibitors can look through it before individual meetings etc.',
//             },
//         ],
//     },

//     /*
//     {title: 'MAPS AND LOCATIONS', body: [
//             {question: 'Where are the Information Desks located?', answer: 'There are two information desks. The first one is located outside KårX in Nymble and the second one is located in the Library, on the right-hand side just before entering the big hall.'},
//             {question: 'Where can I find a map of the exhibitor area?', answer: 'Go to armada.nu/maps/ there you will find an interactive map over all exhibitors.', displayAnswer: <span>Go to <a href='/maps'>armada.nu/maps</a>, there you will find an interactive map over all exhibitors.</span>},
//             {question: 'How do I find a specific company at the fair?', answer: 'You can do this in two ways, either you go to the exhibitors page, search for the company you are interested in and then click on their map position. Or you go to the map directly and search for the company there, you will then find the location of the company you are looking for.'},
//             {question: 'Will there be any wardrobes at the fair?', answer: 'Yes, there will be one wardrobe in Nymble, click here for the position, at the entrance closest to the subway and one in the library close to the information desk'},
//     ]},
//     */

//     {
//         title: 'THE BANQUET',
//         body: [
//             {
//                 question: 'What is The Grand Armada Banquet?',
//                 answer: 'Every year THS Armada arranges a grand banquet to celebrate the fair and to let exhibitors and students network in a casual setting. However, due to the current circumstances it is yet decided which form the banquet will take. The health and safety of the students and our exhibitors is our main priority. Stay tuned on the plans here on the website.',
//             },
//             {
//                 question: 'Can I attend the banquet?',
//                 answer: 'The whole Armada Team is invited to The Grand Banquet of Armada, as well as our exhibitors. If you are a part of the Armada team 2021 you will receive your invitation by email. Depending on the restriction the after party will be open to KTH students as well. Time will tell.',
//             },
//             {
//                 question:
//                     'Is it possible to attend the banquet even though I’m not working for Armada?',
//                 answer: (
//                     <span>
//                         Due to the current situation the form of the banquet is
//                         still in progress. Follow us on{' '}
//                         <a href='https://www.instagram.com/thsarmada/'>
//                             Instagram
//                         </a>{' '}
//                         to keep updated.
//                     </span>
//                 ),
//             },
//         ],
//     },
//     {
//         title: 'RECRUITMENT',
//         body: [
//             {
//                 question: 'How do I become a part of the Armada team?',
//                 answer: (
//                     <span>
//                         You apply! Armada recruits three times a year. The next
//                         recruitment will be in september. Follow us on{' '}
//                         <a href='https://www.instagram.com/thsarmada/'>
//                             Instagram
//                         </a>{' '}
//                         to not miss any important dates.
//                         <br />
//                         Do you want to know more about the Armada organisation?
//                         Check out the{' '}
//                         <a href='https://armada.nu/recruitment'>
//                             Recruitment tab
//                         </a>{' '}
//                         to see what role suits you the best.
//                     </span>
//                 ),
//             },
//             {
//                 question: 'When do THS Armada recruit people?',
//                 answer: (
//                     <span>
//                         Armada recruits for different roles and responsibilities
//                         during three periods throughout the year. The project
//                         group is recruited in December-February and works for
//                         almost a year in Armada. Then the Operations team is
//                         recruited in April-May and last but not least the Hosts
//                         are recruited in August-September. If you have any
//                         questions about what it is like to be in THS Armada you
//                         can contact the Project Manager at
//                         <a href='mailto:a@armada.nu'>a@armada.nu</a> or follow
//                         us on{' '}
//                         <a href='https://www.instagram.com/thsarmada/'>
//                             social media
//                         </a>
//                         .
//                     </span>
//                 ),
//             },
//             {
//                 question: 'Why should I engage in THS Armada?',
//                 answer: 'Meet new people from all parts of KTH, learn a lot and interact with companies! Armada is a great opportunity to enrich your student life.',
//             },
//         ],
//     },
// ]

// const exhibitorQuestions = [
//     {
//         title: 'GENERAL',
//         linkFAQ: 'faq-general',
//         body: [
//             {
//                 question: 'How do I register for the fair?',
//                 answer: (
//                     <span>
//                         You can register at{' '}
//                         <a href='https://ais.armada.nu/register/'>
//                             register.armada.nu
//                         </a>
//                     </span>
//                 ),
//             },
//             {
//                 question: 'When is the last day to register for the fair?',
//                 answer: (
//                     <span>
//                         The last day to complete your registration is on the{' '}
//                         <b>17th of September</b>. If you did not complete the
//                         Initial Registration, with deadline on the 28th of May,
//                         you need to contact
//                         <a href='mailto:sales@armada.nu'>sales@armada.nu</a> to
//                         be able to complete your registration.
//                     </span>
//                 ),
//             },
//             {
//                 question: 'Can our company get more exposure?',
//                 answer: (
//                     <span>
//                         Yes, there are lots of ways to get more exposure for
//                         your company. For example, you can register for the
//                         partner kit which includes additional features during
//                         the fair, individual marketing and unlimited job adverts
//                         during the fair. Another way to stand out is through a
//                         Custommade Lounge. During the fair Armada will build
//                         lounges where students can hang out and attend the fair.
//                         The lounges will bring the visitors the atmosphere of a
//                         physical fair even in these challenging times. You will
//                         be able to send us merch, roll-ups etc to create a
//                         physical booth to compliment your digital one.
//                         <br />
//                         You can also market your company through Armada’s
//                         different social media channels and even have an
//                         Instagram Takeover.
//                         <br />
//                         An individual event could also be of interest. Armada
//                         offers lectures, case evenings or a customized event of
//                         your choice.
//                         <br />
//                         Contact our sales team at{' '}
//                         <a href='mailto:sales@armada.nu'>sales@armada.nu</a> to
//                         work out what suits your company best.{' '}
//                     </span>
//                 ),
//             },
//             {
//                 question: 'How do we become a partner?',
//                 answer: (
//                     <span>
//                         To become a partner you register your interest in the
//                         partner kit on the registration page. As a partner you
//                         will not only stand out from the crowd but also boost
//                         your employer branding through a variety of marketing
//                         towards our students. Note that there is a limited
//                         amount of companies that can sign up for the partner
//                         kit.
//                         <br /> To learn more, contact our sales team at{' '}
//                         <a href='mailto:sales@armada.nu'>sales@armada.nu</a>.
//                     </span>
//                 ),
//             },
//             {
//                 question: 'We would like more information, where do we turn?',
//                 answer: (
//                     <span>
//                         Head over to our{' '}
//                         <a href='https://armada.nu/contact'>contact page</a>.
//                     </span>
//                 ),
//             },
//         ],
//     },

//     {
//         title: 'ABOUT ARMADA',
//         body: [
//             {
//                 question: 'What is THS Armada?',
//                 answer: (
//                     <span>
//                         THS Armada is a student-driven project at KTH that
//                         arranges the largest career fair in Scandinavia. Every
//                         year, Armada creates a platform for you to meet some of
//                         the most popular employers for engineers. The grand THS
//                         Armada fair is a two-day event with companies from all
//                         over the world. <br /> <br />
//                         This year we will repeat the success from last year with
//                         a virtual fair to make sure our exhibitors and visitors
//                         can connect in a safe way. In addition, we will build
//                         lounges at KTH where students can enjoy the virtual fair
//                         and still get the feel of a physical fair. <br /> <br />
//                         Leading up to the fair Armada arranges event weeks where
//                         you have the chance to attend lunch lectures, case
//                         evenings and much more. Make sure to follow us on{' '}
//                         <a href='https://www.instagram.com/thsarmada/'>
//                             social media
//                         </a>{' '}
//                         to not miss out
//                     </span>
//                 ),
//             },
//             {
//                 question: "When is this year's Armada fair?",
//                 answer: '22rd & 23th of November',
//             },
//             {
//                 question: 'Where is THS Armada?',
//                 answer: (
//                     <span>
//                         This year THS Armada will take place both virtually at{' '}
//                         <a href='https://event.armada.nu/sv/event/5150?fbclid=IwAR3jFscNx0HHvsyzGGhac5F1nR74ONKVffxtfivbQZuTwgu2b12-NYriQ64'>
//                             graduateland
//                         </a>{' '}
//                         and in Nymble, Drottning Kristinas väg 15-19 in
//                         Stockholm. <br />
//                         <br />
//                         Follow us on{' '}
//                         <a href='https://www.instagram.com/thsarmada/'>
//                             Instagram
//                         </a>{' '}
//                         to keep up on what we have in store.
//                     </span>
//                 ),
//             },
//             {
//                 question: 'How can I find all the events that Armada arranges?',
//                 answer: (
//                     <span>
//                         Follow us on{' '}
//                         <a href='https://www.facebook.com/thsarmada'>
//                             Facebook
//                         </a>{' '}
//                         to not miss out on any events. To register for an event,
//                         check out the <a href='/events/'>event tab</a>
//                     </span>
//                 ),
//             },
//         ],
//     },
//     {
//         title: 'VIRTUAL FAIR',
//         linkFAQ: 'faq-virtualfair',
//         body: [
//             {
//                 question: 'What is a virtual fair?',
//                 answer: (
//                     <span>
//                         A Virtual Fair is just like any other fair, but digital!
//                         It is hosted on a digital platform where companies and
//                         students can meet in a virtual environment through
//                         chats, video calls, webinars, and breakout rooms.
//                         Students create individual accounts and upload their
//                         resume which is then used to match students to
//                         companies. Companies will also have their own digital
//                         booth where you can present your company, host games,
//                         have quizzes and so on. Only your imagination sets the
//                         rules.
//                     </span>
//                 ),
//             },
//             {
//                 question: 'What is Graduateland?',

//                 answer: (
//                     <span>
//                         Graduateland is the platform on which we host the Armada
//                         Virtual Fair. It allows companies to connect with
//                         students as well as give branding opportunities through
//                         a digital booth. It also allows students to create a
//                         profile that helps match your company with students with
//                         the right experience and interests.
//                     </span>
//                 ),
//             },
//             {
//                 question:
//                     'How will we communicate with students during the fair?',
//                 answer: (
//                     <span>
//                         To communicate with the students our digital platform
//                         offers a range of different types of communication.
//                         Chatrooms, individual conference calls and breakout
//                         rooms where students can drop in at any time and join
//                         the conversation or just eavesdrop. You can also reach
//                         out to our students through Pop-Up Messages or by
//                         hosting a Webinar.
//                     </span>
//                 ),
//             },
//             {
//                 question: 'Will there be any physical events during the fair?',
//                 answer: (
//                     <span>
//                         There will be no physical events where exhibitors can
//                         join during the fair. However, you do have the
//                         opportunity to create a branded student area, a
//                         Custommade Lounge, where students can hang out during
//                         the fair. This is a great way to get more company
//                         branding during the fair.
//                     </span>
//                 ),
//             },
//         ],
//     },
//     {
//         title: 'MARKETING',
//         linkFAQ: 'faq-marketing',
//         body: [
//             {
//                 question:
//                     'Is it possible to add more marketing for our company?',
//                 answer: (
//                     <span>
//                         Yes, we offer Instagram and Facebook posts as well as
//                         Instagram takeovers. Contact our sales team to learn
//                         more,{' '}
//                         <a href='mailto:sales@armada.nu'>sales@armada.nu</a>.
//                     </span>
//                 ),
//             },
//             {
//                 question:
//                     'Can our company market job offers etc through Armada?',
//                 answer: (
//                     <span>
//                         Yes! For starters, you can market your job offers during
//                         the fair. Add unlimited job offers if you have many
//                         interesting positions. You can also choose to market
//                         your job offers through Armada’s social media. Either
//                         via a post or via an Instagram takeover. Or why not have
//                         an event where you present your job offers and get the
//                         chance to meet KTH students at the same time?
//                         <br /> Contact our sales team at{' '}
//                         <a href='mailto:sales@armada.nu'>sales@armada.nu</a> to
//                         find what suits your needs.
//                     </span>
//                 ),
//             },
//         ],
//     },
//     {
//         title: 'EVENTS',
//         linkFAQ: 'faq-events',
//         body: [
//             {
//                 question:
//                     'What kind of events can our company host together with Armada?',
//                 answer: (
//                     <span>
//                         Armada offers lectures, case events and participation at
//                         the panel at our Innovation night. You can also choose
//                         to participate in Armada Run or in Armada Competition.
//                         If you want a customized event, contact our sales team
//                         at <a href='mailto:sales@armada.nu'>sales@armada.nu</a>{' '}
//                         to work out an event that is perfect for you.
//                     </span>
//                 ),
//             },
//         ],
//     },
// ]

//FAQ questions and answers. Only question and answer are used in search. Define displayAnswer to use elements such as link-tags in the answer.
const studentQuestions = [
    {
        title: 'ABOUT ARMADA',
        img: '/assets/info.png',
        body: [
            {
                question: 'What is THS Armada?',
                answer: (
                    <span>
                        THS Armada is a student-driven project at KTH that
                        arranges the largest career fair in Scandinavia. Every
                        year, Armada creates a platform for you to meet some of
                        the most popular employers for engineers. The grand THS
                        Armada fair is a two-day event with companies from all
                        over the world. <br /> <br />
                        This year we will repeat the success from previous years
                        with a career fair at Nymble, the building of the
                        student union at the Royal Institute of Technology. In
                        addition, we are currently having a coffee campaign by{' '}
                        <a href='https://www.google.com/maps/dir//kth+entre/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x465f9d402a3b8871:0xcc80b8bee19d7ff8?sa=X&ved=2ahUKEwi_w7P7s5H6AhUQiIsKHeMjCqgQ9Rd6BAheEAQ'>
                            KTH Entre
                        </a>{' '}
                        between 11:30 and 13:30 where we will introduce Armada
                        to all of you and answer any questions that you may have
                        about us. <br /> <br />
                        Leading up to the fair Armada will arrange event weeks
                        between the 31st of October to the 18th of November
                        where you have the chance to attend lunch lectures, case
                        evenings, and much more. Make sure to follow us on{' '}
                        <a href='https://www.instagram.com/thsarmada/'>
                            social media
                        </a>{' '}
                        and check out the{' '}
                        <a href='https://armada.nu/events'>events page</a> to
                        not miss out on any of the upcoming events.
                    </span>
                ),
            },
            {
                question: "When is this year's Armada fair?",
                answer: "This years's Armada fair will be on the 22nd & 23rd of November",
            },
            {
                question: 'Where is THS Armada?',
                answer: (
                    <span>
                        This year THS Armada Career Fair will take place in
                        Nymble, Drottning Kristinas väg 15-19 in Stockholm.{' '}
                        <br />
                        <br />
                        Follow us on{' '}
                        <a href='https://www.instagram.com/thsarmada/'>
                            Instagram
                        </a>{' '}
                        to keep up on what we have in store.{' '}
                    </span>
                ),
            },
            {
                question: 'How can I find all the events that Armada arranges?',
                answer: (
                    <span>
                        Follow us on{' '}
                        <a href='https://www.facebook.com/thsarmada'>
                            Facebook
                        </a>{' '}
                        to not miss out on any events. To register for an event,
                        check out the <a href='/events/'>event tab</a>
                    </span>
                ),
            },
        ],
    },
    {
        title: 'THE FAIR',
        img: '/assets/Fairmap.png',
        body: [
            {
                question: 'When is the Armada fair taking place?',
                answer: 'The Armada Career Fair takes place each year in November for 2 days. This year the fair will take place November 22nd-23rd.',
            },
            {
                question: 'Where is the Armada fair taking place?',
                answer: (
                    <span>
                        The fair will be held in Nymble, which is the Student
                        Union building at the Royal Institute of technology. The
                        adress for the fair is Drottning Kristinas väg 15-19
                        Stockholm.
                    </span>
                ),
            },
            {
                question: 'What are the opening hours?',
                answer: '10:00-16:00 on both the 22nd and the 23rd of November.',
            },
            {
                question: 'Does the Armada fair cost money to attend?',
                answer: 'No, it is completely free for everyone to visit! You are allowed to attend during any of the opening hours even if you are not a KTH Student.',
            },

            //{question: 'I do not study at KTH, can I still attend?', answer: 'Yes of course! Everybody is welcome.'},
            //{question: 'How many exhibitors are coming to the Armada fair?', answer: 'The exhibitors are still joining the platform, but the entire exhibitors list can be found here.', displayAnswer: <span>The exhibitors are still joining the platform, but the entire exhibitors list can be found <a href='https://event.armada.nu/sv/virtual-event/3994'>here</a>.</span>},
            //{question: 'What is the Green Room?', answer: 'A place at the fair where companies that actively work with sustainability-related questions get to stand.'},
            //{question: 'What is the Diversity Room?', answer: 'A place at the fair where companies that actively work with diversity-related questions get to stand.'},
            //{question: 'What is the Focus Room?', answer: 'The focus room will be found in Nya Matsalen in Nymble on the days of the fair. Here you will be able to workshop on Sustainability and Diversity as well as see which exhibitors are outstanding in the field.'},

            {
                question: "Where can I find last year's exhibitors?",
                answer: (
                    <span>
                        You can find previous exhibitors{' '}
                        <a href='https://event.armada.nu/sv/event/5150?fbclid=IwAR3jFscNx0HHvsyzGGhac5F1nR74ONKVffxtfivbQZuTwgu2b12-NYriQ64'>
                            here
                        </a>
                    </span>
                ),
            },
        ],
    },
    /* removing virtual fair from the page, possibly create a new one for the in person fair instead?
    {
        title: 'VIRTUAL FAIR - GRADUATELAND',
        body: [
            {
                question: 'What is Graduateland?', 
                answer: <span>Graduateland is the platform on which this year's fair will be held. On this platform you will be able to chat with company representatives, watch live lectures, check out exhibitors booths, participate in competitions and so much more. <br/> We suggest that you head over to <a href="https://event.armada.nu/sv">Graduateland</a> asap to create a profile and explore the platform. </span>
            },
            {
                question: 'How do I create a profile?', 
                answer: 'Go to https://event.armada.nu/new-signup/start to create your profile. The sooner you do so the sooner you can start booking individual meetings.', displayAnswer: <span>Go to <a href='https://event.armada.nu/new-signup/start'>this page</a> to create your profile. The sooner you do so the sooner you can start booking individual meetings.</span>
            },
            {
                question: 'How do I chat with companies?', 
                answer: <span>To chat with a company you simply visit their digital booth and start a chat. The chats will be open as soon as the fair starts at 10:00 on the 23th.<br/>Tips: If you have an interesting profile maybe the companies will reach out to you! Make sure to <a href="https://event.armada.nu/sv">register</a> today to create the perfect profile.</span>
            },
            {
                question: 'How do I book individual meetings?', 
                answer: 'You visit the exhibitors profiles and select a time slot that suits you, it’s as simple as that.'
            },
            {
                question: 'How do I find live presentations?', 
                answer: <span>You find the live presentations under the Live Presentations tab. There you can also find the schedule and titles of the presentations.<br/> Don’t forget to follow us on <a href="https://www.instagram.com/thsarmada/">Instagram</a> where we will post the schedule in advance. </span>
            },
            {
                question: 'What is Armada studio?', 
                answer:<span>Armada Studio is a live streamed studio in between all the happenings during the fair. Here we will recap the happenings, share tips and tricks and keep you company as you attend the digital fair. <br/>Armada studio will be broadcast on our <a href="https://www.facebook.com/thsarmada">Facebook page</a> so make sure to follow us there. </span>
            },
            {
                question: 'How do I make sure I don\'t miss Armada Studio?', 
                answer: 'You follow our event on Facebook! '
            },
            {
                question: 'How do I apply for jobs?', 
                answer: 'Yes, Armada 2021 let’s you apply for jobs right on the Graduate platform. Check the jobs tab to see what jobs our exhibitors have to offer. We also recommend you to contact the companies you want to work for. Maybe your dream job is just a chat away.'
            },
            {
                question: 'How do I match with exhibitors?', 
                answer: 'Matching with an exhibitor means that your profile and the exhibitors profile are perfect for each other. By just creating your profile and filling out as much information as possible you will be matched with the exhibitors and they can reach out to you personally.'
            },
            {
                question: 'Do I need a CV?', 
                answer: 'No, you can create a profile directly on the platform. However, you will have the option to upload a CV, something we really encourage you to do. It will help you since the exhibitors can look through it before individual meetings etc.'
            },
        ]
    },*/

    /*
    {title: 'MAPS AND LOCATIONS', body: [
            {question: 'Where are the Information Desks located?', answer: 'There are two information desks. The first one is located outside KårX in Nymble and the second one is located in the Library, on the right-hand side just before entering the big hall.'},
            {question: 'Where can I find a map of the exhibitor area?', answer: 'Go to armada.nu/maps/ there you will find an interactive map over all exhibitors.', displayAnswer: <span>Go to <a href='/maps'>armada.nu/maps</a>, there you will find an interactive map over all exhibitors.</span>},
            {question: 'How do I find a specific company at the fair?', answer: 'You can do this in two ways, either you go to the exhibitors page, search for the company you are interested in and then click on their map position. Or you go to the map directly and search for the company there, you will then find the location of the company you are looking for.'},
            {question: 'Will there be any wardrobes at the fair?', answer: 'Yes, there will be one wardrobe in Nymble, click here for the position, at the entrance closest to the subway and one in the library close to the information desk'},
    ]},
    */

    {
        title: 'THE BANQUET',
        img: '/assets/champagne-glass.png',
        body: [
            {
                question: 'What is The Grand Armada Banquet?',
                answer: (
                    <span>
                        Armada is a very large project which engages 300 working
                        students and 150 market driving employers which
                        interacts with over 20 000 visitors both through the
                        fair and through the various events that Armada
                        arranges. Every year THS Armada hosts a grand banquet to
                        celebrate the fair and to let exhibitors and students
                        network in a casual setting.<br></br> <br></br>
                        This years banquet will hosted after the first fair day
                        at Victoriahallen in Stockholmsmässan, Älvsjö. The theme
                        for this years banquet will be Las Vegas Red Carpet and
                        there will be a three course dinner and lots of
                        entertainment throughout the night.
                    </span>
                ),
            },
            {
                question: 'Can I attend the banquet?',
                answer: 'The whole Armada Team is invited to The Grand Banquet of Armada, as well as our exhibitors. If you are a part of the Armada team 2022 you will receive your invitation by email. After the main sitting, the afterparty will open up for everyone to attend and have a good time.',
            },
            {
                question:
                    'Is it possible to attend the banquet even though I’m not working for Armada?',
                answer: (
                    <span>
                        The Banquet consists of 2 parts: the sitting and the
                        afterparty. The sitting is mainly meant for Armada
                        workers and the participating companies. However, the
                        afterparty can be attended by anyone even outside of
                        Armada.{' '}
                    </span>
                ),
            },
        ],
    },
    {
        title: 'RECRUITMENT',
        img: '/assets/recruitment.png',
        body: [
            {
                question: 'How do I become a part of the Armada team?',
                answer: (
                    <span>
                        You apply! Armada recruits three times a year.
                        Applications for hosts are now open, make sure apply
                        before it's too late. Follow us on{' '}
                        <a href='https://www.instagram.com/thsarmada/'>
                            Instagram
                        </a>{' '}
                        to not miss any important dates.
                        <br /> <br></br>Do you want to know more about the
                        Armada organisation? Check out the{' '}
                        <a href='https://armada.nu/recruitment'>
                            Recruitment tab
                        </a>{' '}
                        to see what role suits you the best.
                    </span>
                ),
            },
            //make sure to update this when recuritment for hosts ends
            {
                question: 'When do THS Armada recruit people?',
                answer: (
                    <span>
                        Armada recruits for different roles and responsibilities
                        during three periods throughout the year. The project
                        group is recruited in December-February and works for
                        almost a year in Armada. Then the Operations team is
                        recruited in April-May and last but not least the Hosts
                        are recruited in August-September. If you have any
                        questions about what it is like to be in THS Armada you
                        can contact the Project Manager at{' '}
                        <a href='mailto:a@armada.nu'>a@armada.nu</a> or follow
                        us on{' '}
                        <a href='https://www.instagram.com/thsarmada/'>
                            social media
                        </a>
                        .
                    </span>
                ),
            },
            {
                question: 'Why should I engage in THS Armada?',
                answer: 'Meet new people from all parts of KTH, learn a lot and interact with companies! Armada is a great opportunity to enrich your student life.',
            },
        ],
    },
]

const exhibitorQuestions = [
    {
        title: 'REGISTRATION',
        img: '/assets/contact-form.png',
        linkFAQ: 'faq-general',
        body: [
            {
                question: 'How do I register for the fair?',
                answer: (
                    <span>
                        You can make your initial registration to the fair by
                        logging in or making an account at{' '}
                        <a href='https://ais.armada.nu/register/'>
                            register.armada.nu
                        </a>{' '}
                        If you need any help or have any questions, please
                        contact{' '}
                        <a href='mailto:sales@armada.nu'>sales@armada.nu</a>{' '}
                    </span>
                ),
            },
            {
                question: 'When is the last day to register for the fair?',
                answer: (
                    <span>
                        The last day to make the Initial Registration is the{' '}
                        <b>17:th of May</b>. If you did not complete the Initial
                        Registration, with deadline on the 17th of May, you need
                        to contact{' '}
                        <a href='mailto:sales@armada.nu'>sales@armada.nu</a> to
                        be able to complete your registration.
                    </span>
                ),
            },
            {
                question: 'What is the Initial Registration??',
                answer: (
                    <span>
                        The Initial Registration is where the exhibitors apply
                        to participate at Armada. After closing initial
                        registration the 17th of May, we will let you know if
                        you have received a spot on the fair.
                    </span>
                ),
            },
            /*{
                question: 'Can our company get more exposure?',
                /*oldanswer: <span>Yes, there are lots of ways to get more exposure for your company. For example, you can register for the partner kit which includes additional features during the fair, 
                        individual marketing and unlimited job adverts during the fair.
                        Another way to stand out is through a Custommade Lounge. During the fair Armada will build lounges where students can hang out and attend the fair. 
                        The lounges will bring the visitors the atmosphere of a physical fair even in these challenging times. 
                        You will be able to send us merch, roll-ups etc to create a physical booth to compliment your digital one. 
                        <br/>
                        You can also market your company through Armada’s different social media channels and even have an Instagram Takeover. 
                         <br/> <br/>
                        An individual event could also be of interest. Armada offers lectures, case evenings or a customized event of your choice. Contact our sales team at <a href='mailto:sales@armada.nu'>sales@armada.nu</a> to work out what suits your company best. </span>,
                answer: (
                    <span>
                        {' '}
                        You can market your company through Armada’s different
                        social media channels and even have an Instagram
                        Takeover.
                        <br /> <br />
                        An individual event could also be of interest. Armada
                        offers lectures, case evenings or a customized event of
                        your choice. Contact our sales team at{' '}
                        <a href='mailto:sales@armada.nu'>sales@armada.nu</a> to
                        work out what suits your company best.{' '}
                    </span>
                ),
            }, */
            {
                question: 'How do I know if I get a spot on the fair?',
                answer: (
                    <span>
                        After the closing of the Initial Registration on the
                        17th of May, we will get back to all exhibitors and let
                        you know if you have secured a spot. We always
                        prioritize earlier registrations.
                    </span>
                ),
            },
            {
                question: 'How do we become a partner?',
                answer: (
                    <span>
                        In 2023, we have a limited Gold Package which includes
                        mention on the website, extra marketing, included events
                        and a bigger booth. By selecting “interested in gold”
                        when doing the initial registration at
                        register.armada.nu, you apply to become a gold
                        exhibitor. If you are interested in a deeper or more
                        specific collaboration, send an email to
                        <br /> To learn more, contact our sales team at{' '}
                        <a href='mailto:sales@armada.nu'>sales@armada.nu</a>.
                    </span>
                ),
            },
            {
                question: 'We would like more information, where do we turn?',
                answer: (
                    <span>
                        Contact{' '}
                        <a href='mailto:sales@armada.nu'>sales@armada.nu</a> and
                        we will answer any question.
                    </span>
                ),
            },
        ],
    },

    {
        title: 'ABOUT ARMADA',
        img: '/assets/info.png',
        body: [
            {
                question: 'What is THS Armada?',
                answer: (
                    <span>
                        THS Armada is a student-driven project at KTH that
                        arranges the largest career fair in Scandinavia. Every
                        year, Armada creates a platform for you to meet some of
                        the most popular employers for engineers. The grand THS
                        Armada fair is a two-day event with companies from all
                        over the world. <br /> <br />
                        This year we will repeat the success from previous years
                        with a career fair at Nymble, the building of the
                        student union at the Royal Institute of Technology.{' '}
                        <br /> <br />
                        Leading up to the fair Armada arranges event weeks where
                        you have the chance to attend lunch lectures, case
                        evenings and much more. Make sure to follow us on{' '}
                        <a href='https://www.instagram.com/thsarmada/'>
                            social media
                        </a>{' '}
                        to not miss out.
                    </span>
                ),
            },
            {
                question: "When is this year's Armada fair?",
                answer: (
                    <span>
                        The opening hours of the fair is 21:st of November 10:00
                        - 16:00 and 22:nd of November 10:00 - 15:00. The Grand
                        Banquet is on the evening of the 21:st of November.
                    </span>
                ),
            },
            {
                question: 'Where is THS Armada?',
                answer: (
                    <span>
                        The fair will be held in Nymble, the Student Union
                        Building at KTH and in KTH Library. The address for
                        Nymble is Drottning Kristinas väg 15-19, 114 28
                        Stockholm. The address for KTH Library is Osquars backe
                        31, 114 28 Stockholm.
                    </span>
                ),
            },
            {
                question: 'How can I find all the events that Armada arranges?',
                answer: (
                    <span>
                        Follow us on{' '}
                        <a href='https://www.facebook.com/thsarmada'>
                            Facebook
                        </a>{' '}
                        to not miss out on any events. To register for an event,
                        check out the <a href='/events/'>event tab</a>
                    </span>
                ),
            },
        ],
    },
    /* { removing the virtual fair tab from the page since its not relevant anymore
        title: 'VIRTUAL FAIR',
        linkFAQ: 'faq-virtualfair',
        body: [
            {
                question: 'What is a virtual fair?', 
                answer: <span>A Virtual Fair is just like any other fair, but digital! It is hosted on a digital platform where companies and students can meet in a virtual environment through chats, video calls, webinars, and breakout rooms. 
                        Students create individual accounts and upload their resume which is then used to match students to companies. Companies will also have their own digital booth where you can present your company,  host games, have quizzes and so on. 
                        Only your imagination sets the rules.</span>
            },
            {
                question: 'What is Graduateland?', 
                
                answer: <span>Graduateland is the platform on which we host the Armada Virtual Fair. It allows companies to connect with students as well as give branding opportunities through a digital booth. 
                        It also allows students to create a profile that helps match your company with students with the right experience and interests.</span>
            },
            {
                question: 'How will we communicate with students during the fair?', 
                answer: <span>To communicate with the students our digital platform offers a range of different types of communication. 
                        Chatrooms, individual conference calls and breakout rooms where students can drop in at any time and join the conversation or just eavesdrop. 
                        You can also reach out to our students through Pop-Up Messages or by hosting a Webinar.</span>
            },
            {
                question:  'Will there be any physical events during the fair?', 
                answer: <span>There will be no physical events where exhibitors can join during the fair. However, you do have the opportunity to create a branded student area, a Custommade Lounge, where students can hang out during the fair. 
                        This is a great way to get more company branding during the fair.</span>
            },
        ]
    },*/
    {
        title: 'MARKETING',
        img: '/assets/promotion.png',
        linkFAQ: 'faq-marketing',
        body: [
            {
                question:
                    'Is it possible to add more marketing for our company?',
                answer: (
                    <span>
                        Yes, we offer instagram and Facebook posts as well as
                        instagram takeovers. This year we are adding even more
                        new ways to market the exhibitors, so contact us at{' '}
                        <a href='mailto:sales@armada.nu'>sales@armada.nu</a> to
                        learn more!
                    </span>
                ),
            },
            {
                question:
                    'Can our company market job offers etc through Armada?',
                answer: (
                    <span>
                        Yes! You can market your open positions in your fair
                        booth, and on our social media channels. You can also
                        have an email sent out to students, or organize an event
                        to talk about your openings.
                        <br /> Contact our sales team at{' '}
                        <a href='mailto:sales@armada.nu'>sales@armada.nu</a>
                        and we can discuss what suits you best!
                    </span>
                ),
            },
        ],
    },
    /* {
        title: 'EVENTS',
        img: '/assets/favicon.ico',
        linkFAQ: 'faq-events',
        body: [
            {
                question:
                    'What kind of events can our company host together with Armada?',
                answer: (
                    <span>
                        Armada offers lectures, case events and participation at
                        the panel at our Innovation night. You can also choose
                        to participate in Armada Run or in Armada Competition.
                        If you want a customized event, contact our sales team
                        at <a href='mailto:sales@armada.nu'>sales@armada.nu</a>{' '}
                        to work out an event that is perfect for you.
                    </span>
                ),
            },
        ],
    },*/
]

export { studentQuestions, exhibitorQuestions }
