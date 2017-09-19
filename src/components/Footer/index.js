import React from "react"
import "./footer.scss";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        let armada_img = require('../../../content/assets/images/footer/armada-round-white-transparent.png');
        let ths_logo = require('../../../content/assets/images/footer/ths-logo.png');
        let fb_logo = require('../../../content/assets/images/footer/facebook-logo.png');
        let insta_logo = require('../../../content/assets/images/footer/instagram-logo.png');
        let linkedin_logo = require('../../../content/assets/images/footer/linkedin-logo.png');
        let google_play = require('../../../content/assets/images/footer/google-play.png');
        let app_store = require('../../../content/assets/images/footer/app-store.png');

        this.state = {
            thsOrgs: [
                {
                    name: "armada.nu",
                    link: "http://armada.nu/",
                    src: armada_img
                },
                {
                    name: "ths.kth.se",
                    link: "http://ths.kth.se/",
                    src: ths_logo
                }
            ],
            social: [
                {
                    name: "facebook",
                    link: "https://www.facebook.com/thsarmada",
                    src: fb_logo
                },
                {
                    name: "instagram",
                    link: "https://www.instagram.com/thsarmada/",
                    src: insta_logo
                },
                {
                    name: "linkedin",
                    link: "https://www.linkedin.com/company/armada",
                    src: linkedin_logo
                },
            ],
            apps: [
                {
                    name: "google play",
                    link: "https://play.google.com/store/apps/details?id=se.ths.kth.Aramda&hl=sv",
                    src: google_play
                },
                {
                    name: "appstore",
                    link: "https://itunes.apple.com/se/app/armada/id470187481?mt=8",
                    src: app_store
                }
            ]
        };
    }

    createTemplate(param, cl){
        return (param.map(function(item) {
            return (
                <div key = {item.name} className={cl}>
                    <a href={item.link}>
                        <img src={item.src} alt={item.name}/>
                    </a>
                </div>
            );
        }));
    }

    render() {
        return (
            <div id="footer">
                {this.createTemplate(this.state.thsOrgs, "logo")}
                <div className="divider"></div>
                {this.createTemplate(this.state.social, "logo")}
                <div className="divider"></div>
                <div className="apps-container">
                    {this.createTemplate(this.state.apps, "app")}
                </div>
            </div>
        );
    }
}

export default Footer;
