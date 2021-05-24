import React from 'react'
import './index.scss';

const Footer = () => {

    let armada_img = require('../../../static/assets/images/footer/armada-round-white-transparent.png');
    let ths_logo = require('../../../static/assets/images/footer/ths-logo.png');
    let fb_logo = require('../../../static/assets/images/footer/facebook-logo.png');
    let insta_logo = require('../../../static/assets/images/footer/instagram-logo.png');
    let linkedin_logo = require('../../../static/assets/images/footer/linkedin-logo.png');

    const DATE_PRIDE_WEEK_START = new Date('June 1, 2021 00:00:01');
    const DATE_PRIDE_WEEK_END = new Date('June 30, 2021 00:00:01');
    var DATE_NOW = new Date();
    const prideWeek = DATE_PRIDE_WEEK_START < DATE_NOW && DATE_PRIDE_WEEK_END > DATE_NOW; 


    const links = {
        thsOrgs: [
            {
                name: 'armada.nu',
                link: 'http://armada.nu/',
                src: armada_img,
                pridestyling: 'orange'
            },
            {
                name: 'ths.kth.se',
                link: 'http://ths.kth.se/',
                src: ths_logo,
                pridestyling: ''
            }
        ],
        social: [
            {
                name: 'facebook',
                link: 'https://www.facebook.com/thsarmada',
                src: fb_logo,
                pridestyling: 'green'
            },
            {
                name: 'instagram',
                link: 'https://www.instagram.com/thsarmada/',
                src: insta_logo,
                pridestyling: 'blue'
            },
            {
                name: 'linkedin',
                link: 'https://www.linkedin.com/company/armada',
                src: linkedin_logo,
                pridestyling: 'lilac'
            },
        ]
    };

    const renderLinkLogos = (param) => {
        return (param.map(item =>
                <div key={item.name} className={!prideWeek? 'logo' : ['logo', item.pridestyling].join(" ")}>
                    <a href={item.link}>
                        <img src={item.src} alt={item.name}/>
                    </a>
                </div>
        ));
    }
    
    return (<div id='footer'>
        <div className='logosection'>
            {renderLinkLogos(links.thsOrgs, 'logo')}
            <div className='divider'></div>
            {renderLinkLogos(links.social, 'logo')}
        </div>
    </div>);
}

export default Footer;
