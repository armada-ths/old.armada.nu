import React from 'react'
import './index.scss'
import Page from '../../templates/page'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import rehypeRaw from 'rehype-raw'
import '../../../src/styles/global.scss'
import SustainabilityInterviews from '../../components/SustainabilityInterviews'
//<Page {...props} />
//In this file we're moving away from sustainability.md to making it in react dividing up all the elements¨
import SustainabilitySection from '../../../src/components/DiversitySection'
import FunFact from '../../../src/components/FunFact'

const SustainabilityPage = props => {
    return (
        <div className='content'>
            <div className='sustainability'>
                <div className='sustainability-container'>
                    <ReactMarkdown
                        children={markdown_sustainability}
                        rehypePlugins={[rehypeRaw]}
                    />
                    <SustainabilitySection left>
                        <FunFact
                            facts={[
                                {
                                    title: 'Climate Posititve',
                                    statement:
                                        'We have a green room! Come and check us out. 💚',
                                    link: '',
                                },
                                {
                                    title: 'Policy',
                                    statement:
                                        'Armada has a sustainability policy',
                                    link: '',
                                },
                                {
                                    title: 'ASI',
                                    statement:
                                        'By evaluating companies according to the ASI, Armada shows companies that sustainability is importat to students!',
                                    link: '',
                                },
                            ]}
                            page={'sustainabilityFunFact'}
                        />
                        <ReactMarkdown
                            children={markdown_greenroom}
                            rehypePlugins={[rehypeRaw]}
                        />
                    </SustainabilitySection>
                </div>
                <div className='sustainability-day'>
                    <div
                        className='sustainability-container'
                        style={{ paddingTop: 0 }}
                    >
                        <SustainabilitySection right>
                            <ReactMarkdown
                                children={markdown_susday}
                                rehypePlugins={[rehypeRaw]}
                            />
                        </SustainabilitySection>
                    </div>
                </div>
                <div className='sustainability-container'>
                    <SustainabilitySection left>
                        <ReactMarkdown
                            children={markdown_susindex}
                            rehypePlugins={[rehypeRaw]}
                        />
                        <form
                            id='submitForm'
                            method='get'
                            action='/assets/sustainability/AIS.pdf'
                        >
                            <button type='submit'>
                                Our Selection Strategy
                            </button>
                        </form>
                    </SustainabilitySection>
                    <SustainabilitySection left>
                        <ReactMarkdown
                            children={markdown_carboncomp}
                            rehypePlugins={[rehypeRaw]}
                        />
                        <form
                            id='submitForm'
                            method='get'
                            action='/assets/sustainability/THS-Armada-2021-Certifikat-THS-Armada-2021-Certifikat-Klimatkompensation.pdf'
                        >
                            <button type='submit'>Certificate</button>
                        </form>
                    </SustainabilitySection>
                </div>
                <div className='sustainability-container'>
                    <SustainabilitySection left>
                        <SustainabilityInterviews />
                    </SustainabilitySection>
                </div>
                <div className='sustainability-container'>
                    <SustainabilitySection right>
                        <ReactMarkdown
                            children={markdown_helpus}
                            rehypePlugins={[rehypeRaw]}
                        />
                        <form id='submitForm' method='get' action='/contact/'>
                            <button type='submit'>Contact us</button>
                        </form>
                    </SustainabilitySection>
                </div>
            </div>
        </div>
    )
}

const markdown_sustainability = `# Sustainability

<p> <b id='sustainability-color'>Sustainability</b> is one of the key elements required in making the world a better place, a place where humanity and nature can live together in harmony without depleting the resources of nature. At THS Armada sustainability is a fundamental of all operations as it is one of our core values, together with Diversity. We reach out to a large scale of people and believe that with this comes a responsibility to encourage a more sustainable living. The THS Armada’s Sustainability policy can be found below. </p>
<form id='submitForm' method='get' action='/assets/sustainability/Armada_Sustainability_Policy_2022-Okt.png'>
  <button type='submit'>Download Sustainability Policy</button>
</form>
`

const markdown_greenroom = `## Green Room

THS Armada has dedicated an area at the career fair to bring attention to the core value sustainability. The special area is known as the Green Room. The Green Room will be a place to get more familiar with the concept of sustainability and how THS Armada works for becoming more sustainable, as well as acquainting with companies that we deem to be the frontrunners in our vision for a sustainable future. These companies have been carefully selected by the Sustainability Team, using a set of meaningful criteria developed by the team, called the Armada Sustainability Index (ASI). More information about the ASI can be found further below.

Visiting the Green Room is a key if you are interested in sustainability, the environment or social or if you just want to know how the selected companies work with sustainability. This year there will also be some fun games and competitions in the Green Room! Also, if you want to visit the selected companies and get in touch with them, remember to visit the Green Room.
`

const markdown_susday = `## Sustainability Day

THS Armada believes that it is important to talk, inform and discuss sustainability to get a better understanding of the concept and what it means in practice. To fulfill this THS Armada will dedicate a whole day to events related to sustainability. The Sustainability day takes place during the Event Week.
`

const markdown_susindex = `## Armada Sustainability Index

The Green Room companies are selected together with the ASI, of which the SDGs are one of the main aspects. You can find more information about the ASI via the button below:
`

const markdown_carboncomp = `## Carbon Compensation

Last year, THS Armada 2021 climate compensated for all caused carbon dioxide emissions. Which meant that all carbon dioxide emissions were calculated and compensated for by investments in projects that contribute to reduced and avoided emissions. In parallel with this, THS Armada is working hard with reducing the use of resources and taking environmental impacts into account when making decisions. For example, all carpets at the physical fair are reused and all food served is vegetarian.
The climate compensation for the year 2021 was done through <a href="https://klimatkompensera.se/">Klimatkompensera.nu </a> that manages three projects, of which two are in India and one in Panama. The emission calculations are based on various flows associated with transportation, goods, waste, food, energy usage and more during the events as well as the career fair.

THS Armada 2021 emitted 43 tonnes of CO2-emissions and will compensate for that and even more. We have compensated for 50 tonnes of CO2-emissions. A certification for the climate compensation can be seen below:
`

const markdown_helpus = `## Help us become more sustainable

Do you have any ideas or suggestions to help us work more sustainable? We would love to hear them!
`

export default SustainabilityPage
