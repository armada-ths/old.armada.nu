import React from 'react'
import './index.scss'
import Page from '../../templates/page'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import '../../../src/styles/global.scss'
import FunFact from '../../../src/components/FunFact'
import DiversitySection from '../../components/DiversitySection'
import rehypeRaw from 'rehype-raw'
import EmbeddedVideo from '../../components/EmbeddedVideo'
//TO do: Remove <Page> and convert it from markdown to react
const DiversityPage = props => {
    return (
        <div className='content'>
            <div className='diversity'>
                <div className='diversitypage-container'>
                    <ReactMarkdown># Diversity</ReactMarkdown>
                    <p>
                        <b id='diversity-color'>Diversity</b> is one of Armada’s
                        core values and we work actively both internally and
                        externally towards becoming an organisation where
                        everyone feels welcome. Armada has zero tolerance for
                        discrimination based on ethnicity, religion, gender,
                        language, sexual orientation, physical ability, thinking
                        style, societal status, age and appearance.
                    </p>
                    <DiversitySection left>
                        <p>
                            THS Armada truly believes that the best teams are
                            created on the basis of equality, diversity and most
                            importantly inclusion. It makes sense that equal
                            value and opportunities are fundamental to our work.
                            By actively working with this core value, THS Armada
                            aspires to encourage students and companies to make
                            their workplace inclusive. Diversity is promotes and
                            featured in different kinds of events and concepts,
                            which you can explore below. Here you can find{' '}
                            <a
                                alt='Diversity Policy 2021'
                                href='/assets/Diversity_Policy_2021.pdf'
                            >
                                THS Armada’s Diversity policy
                            </a>
                            !
                        </p>
                        <br />
                        <FunFact
                            facts={[
                                {
                                    title: '10 nationalities',
                                    statement:
                                        'Armada 2021 team currently includes 10 nationalities',
                                    link: '',
                                },
                                {
                                    title: 'female to male ratio',
                                    statement:
                                        'Armada 2021 Project Group team has 4:3 female to male ratio',
                                    link: '',
                                },
                                {
                                    title: 'ASI',
                                    statement:
                                        'Armada Diversity team went around campus asking students LGBTQ+ related questions',
                                    link: 'https://www.instagram.com/tv/CQstQ5ClHSF/?utm_medium=copy_link',
                                },
                            ]}
                            page={'diversityFunFact'}
                        />
                        <ReactMarkdown
                            children={markdown_diversitycorner}
                            rehypePlugins={[rehypeRaw]}
                        />
                        <a href='/assets/diversity/Focus_rooms_selection_diversity.pdf'>
                            <img
                                alt='Focus rooms selection diversity'
                                src='/assets/diversity/Focus_rooms_selection_diversity.png'
                            />
                        </a>
                        <br />
                    </DiversitySection>
                </div>
                <div className='diversity-day'>
                    <div
                        className='diversitypage-container'
                        style={{ paddingTop: 0 }}
                    >
                        <DiversitySection right>
                            <ReactMarkdown
                                children={markdown_diversityday}
                                rehypePlugins={[rehypeRaw]}
                            />
                        </DiversitySection>
                    </div>
                </div>
                <div className='diversitypage-container'>
                    <DiversitySection>
                        <ReactMarkdown
                            children={markdown_harassmentpolicy}
                            rehypePlugins={[rehypeRaw]}
                        />
                    </DiversitySection>
                    <DiversitySection right>
                        <EmbeddedVideo videoLink='https://youtu.be/YtXkquepCIU' />
                        <ReactMarkdown
                            children={markdown_helpus}
                            rehypePlugins={[rehypeRaw]}
                        />
                    </DiversitySection>
                </div>
            </div>
        </div>
    )
}

const markdown_diversitycorner = `## **Diversity Corner**

One way THS Armada is accentuating the importance of diversity is through the Diversity Corner, a livestreaming studio that will share information about the most progressive companies when it comes to inclusion and diversity in the workplace. These companies have been carefully selected by the Diversity Team, using a set of meaningful criteria developed by the team, called the Armada Diversity Index (ADI), see <a href="/assets/diversity/Selection criteria.pdf">last years selection criteria</a>.
`

const markdown_diversityday = `## **Diversity Day**

Diversity Day is another way to keep the discussion about equality going. The day takes place during the Event Week and consists of events, where companies and students get a platform to talk about, discuss and engage in diversity practices. This year Diversity Day is happening on November 16th. We will keep you updated on the details of the day — check out [@thsarmada](https://www.instagram.com/thsarmada/) on Instagram and [Facebook](https://www.facebook.com/thsarmada) in the meanwhile!
`

const markdown_harassmentpolicy = `## Harassment policy

It is important for us at THS Armada that everyone taking part in the career fair or events feels safe and enjoys their time. This is why we have developed guidelines to make sure everyone’s boundaries are respected and all events go smoothly for everyone involved, the THS Armada team as well as exhibitors, representatives, partners and attendees. We suggest everyone participating in any way in THS Armada read the <a alt="Harassment and Safety Policy" href="/assets/diversity/THS Armada Harassment and Safety Policy 2021.pdf"> Harassment and Safety Policy</a>!
`

const markdown_helpus = `## HELP US BECOME MORE DIVERSE

Do you have any ideas or suggestions to help us work more inclusive? We would love to hear them! - Contact our Head of Diversity, Niclas at [niclas.mejia@armada.nu](mailto:niclas.mejia@armada.nu)
`

export default DiversityPage
