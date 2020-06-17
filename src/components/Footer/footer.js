import React from 'react'
import './footer.scss';

const Footer = () => {

    let armada_img = require('../../../static/assets/images/footer/armada-round-white-transparent.png');
    let ths_logo = require('../../../static/assets/images/footer/ths-logo.png');
    let fb_logo = require('../../../static/assets/images/footer/facebook-logo.png');
    let insta_logo = require('../../../static/assets/images/footer/instagram-logo.png');
    let linkedin_logo = require('../../../static/assets/images/footer/linkedin-logo.png');

    const links = {
        thsOrgs: [
            {
                name: 'armada.nu',
                link: 'http://armada.nu/',
                src: armada_img
            },
            {
                name: 'ths.kth.se',
                link: 'http://ths.kth.se/',
                src: ths_logo
            }
        ],
        social: [
            {
                name: 'facebook',
                link: 'https://www.facebook.com/thsarmada',
                src: fb_logo
            },
            {
                name: 'instagram',
                link: 'https://www.instagram.com/thsarmada/',
                src: insta_logo
            },
            {
                name: 'linkedin',
                link: 'https://www.linkedin.com/company/armada',
                src: linkedin_logo
            },
        ]
    };


    const renderLinkLogos = (param) => {
        return (param.map(item =>
                <div key={item.name} className={'logo'}>
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
