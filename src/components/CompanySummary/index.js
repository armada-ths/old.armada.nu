import React from 'react'
import SopraSteria from '../../../static/assets/images/1on1-companylogos/Sopra-Steria.jpg'
import CGI from '../../../static/assets/images/1on1-companylogos/CGI.jpg'
import Epiroc from '../../../static/assets/images/1on1-companylogos/Epiroc.png'
import Handelsbanken from '../../../static/assets/images/1on1-companylogos/Handelsbanken.png'
import './index.scss'
const index = () => {
    const Summaries = [
        {
            name: 'Sopra Steria',
            img: SopraSteria,
            summary:
                'Sopra Steria is a global consulting company in IT and management that offers complete solutions in digital transformation. Our employees help customers in the private and public sector to achieve their goals through digitization. We are 47,000 employees in 30 countries. In Scandinavia we are close to 3000 and in Sweden we have offices in Stockholm, Gothenburg, Östersund and Malmö where every third employee is a woman. Our culture is strong with heart and innovation in focus. We believe that it is when we share our knowledge that long-term relationships are built. Together we reach further.',
        },
        {
            name: 'CGI',
            img: CGI,
            summary:
                'CGI is one of the worlds largest It consultant companies.',
        },
        {
            name: 'Epiroc',
            img: Epiroc,
            summary:
                <span>Epiroc is a vital part of a sustainable society and a global productivity partner for mining and infrastructure customers.<br/> We develop and provide innovative and safe equipment, such as drill rigs, rock excavation and construction equipment and tools for surface and underground applications. We also offer world-class service and other aftermarket support as well as solutions for automation, digitalization and electrification. Epiroc is based in Stockholm, Sweden and has more than 15 500 passionate employees supporting and collaborating with customers in more than 150 countries.</span>,
        },
        {
            name: 'Handelsbanken',
            img: Handelsbanken,
            summary:
                <span>Handelsbankens strong value base is built on trust in and respect for the individual, and this runs right through our corporate culture. With us, you are given great personal responsibility and a mandate to make your own decisions. At the same time, our operations are based on collaboration, and support for each other.<br/> We have great faith in our employees, and encourage their own initiatives – their ability to think outside the box and to seek innovative solutions. When our employees develop, so does the Bank.</span>,
        },
    ]
    return <div className='main-container'>
        {Summaries.map((summary, index) => (
            <div key={index} className='information-container'>
                <img src={summary.img} alt={summary.name} className='company-image'/>
                <div className='right-container'>
                    <h1>{summary.name}</h1>
                    <p>{summary.summary}</p>
                </div>
            </div>
        ))}
    </div>
}

export default index
