import React from 'react'
import PropTypes from 'prop-types'
import './page.scss'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import rehypeRaw from 'rehype-raw'
import EmbeddedVideo from '../components/EmbeddedVideo'
import { StaticImage } from 'gatsby-plugin-image'
import Infront from '../../static/assets/competition-company-winners2022/infront.png'
import SopraSteria from '../../static/assets/competition-company-winners2022/sopra-steria.jpeg'
import Siemens from '../../static/assets/competition-company-winners2022/siemens-energy.png'
import SustainabilityInterviews from '../../src/components/SustainabilityInterviews'
import SustainabilitySection from '../../src/components/DiversitySection'
import FunFact from '../../src/components/FunFact'
import Recruitment from '../components/Recruitment'
import Tierlistcard from '../components/TierlistCard'

//ReactMarkdown allows just like MDX pass through custom components. See for example video1 that leads to registration.md
const Page = props => {
    return (
        <div className='page-container'>
            {props.header}
            <ReactMarkdown
                children={props.body}
                rehypePlugins={[rehypeRaw]}
                components={{
                    video1: () => (
                        <EmbeddedVideo videoLink='https://youtu.be/n6yuGUyYAzg' />
                    ),
                    infront: () => (
                        <img
                            src={Infront}
                            alt='infront'
                            style={{ width: '100%', maxWidth: '500px' }}
                        ></img>
                    ),
                    soprasteria: () => (
                        <img
                            src={SopraSteria}
                            alt='Sopra Steria'
                            style={{ maxHeight: '400px' }}
                        ></img>
                    ),
                    siemens: () => (
                        <img
                            src={Siemens}
                            alt='Siemens'
                            style={{ width: '100%', maxWidth: '500px' }}
                        ></img>
                    ),
                    sustainabilityinterviews: () => (
                        <SustainabilityInterviews left />
                    ),
                    sustainabilitysection: () => <SustainabilitySection />,
                    funfact: () => <FunFact />,
                    recruitment: () => <Recruitment />,
                    video2: () => (
                        <EmbeddedVideo videoLink='https://youtu.be/n6yuGUyYAzg' />
                    ),
                    tierlistcardexhibitor: () => <Tierlistcard />,
                    tierlistcardsilver: () => <Tierlistcard tier='silver' />,
                    tierlistcardgold: () => <Tierlistcard tier='gold' />,
                }}
            />
            {props.children}
            {props.footer}
        </div>
    )
}

Page.propTypes = {
    header: PropTypes.element,
    body: PropTypes.string.isRequired,
    children: PropTypes.element,
    footer: PropTypes.element,
}

export default Page
