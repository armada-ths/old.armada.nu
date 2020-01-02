import React from "react"

import "./contact.scss";
import ContactCard from "../ContactCard"
import "../../styles/global.scss"

const ProjectGroup = [
  { name: "Daniel Aston", title: "Project Manager", email: "a@armada.nu", emoji:'👨‍✈️', imageUrl: "/assets/daniel.jpg", linkedInUrl: "https://www.linkedin.com/in/danielaston/" },
  // { name: "Ulrik Sköldkvist", title: "Project Manager", email: "a@armada.nu", emoji:'👨‍✈️', imageUrl: "/assets/ulrik.jpg", linkedInUrl: "https://www.linkedin.com/in/ulriksk/" },
  // { name: "Agnes Gemvik", title: "Head of HR", email: "agnes.gemvik@armada.nu", emoji:'⛑', imageUrl: "/assets/agnes.jpg", linkedInUrl: "https://www.linkedin.com/in/agnes-gemvik-065829175/" },
  // { name: "Philip Börjesson", title: "Art Director", email: "philip.borjesson@armada.nu", emoji:'👨‍🎨', imageUrl: "/assets/philip.jpg", linkedInUrl: "https://www.linkedin.com/in/philip-h-borjesson/" },
  // { name: "Staffan Konstholm", title: "Head of Media", email: "staffan.konstholm@armada.nu", emoji:'🎬', imageUrl: "/assets/staffan.jpg", linkedInUrl: "https://www.linkedin.com/in/staffan-konstholm-51b810155/" },
  // { name: "Ghea Sagita", title: "Head of Marketing", email: "ghea.sagita@armada.nu", emoji:'✍️',imageUrl: "/assets/ghea.jpg", linkedInUrl: "https://www.linkedin.com/in/gheasagita/" },
  // { name: "Filip Jacobson", title: "Head of Business Relations and Events", email: "filip.jacobson@armada.nu", emoji:'🤝', imageUrl: "/assets/filip.jpg", linkedInUrl: "https://www.linkedin.com/in/filip-jacobson/" },
  // { name: "Fahami Annan Green", title: "Head of Sales", email: "fahami.annan.green@armada.nu", emoji:'📈', imageUrl: "/assets/fahami.jpg", linkedInUrl: "https://www.linkedin.com/in/fahami-annan-green-b97202162/" },
  // { name: "Ferhat Kaya", title: "Head of Sales", email: "ferhat.kaya@armada.nu", emoji:'📈', imageUrl: "/assets/ferhat.jpg", linkedInUrl: "https://www.linkedin.com/in/ferhatkaya-/" },
  // { name: "Daniel Aston", title: "Head of Sales", email: "daniel.aston@armada.nu", emoji:'📈', imageUrl: "/assets/daniel.jpg", linkedInUrl: "https://www.linkedin.com/in/danielaston/" },
  // { name: "Ella Andersson", title: "Head of Events", email: "ella.andersson@armada.nu", emoji:'🎉', imageUrl: "/assets/ella.jpg", linkedInUrl: "https://www.linkedin.com/in/ella-andersson-1a359463/" },
  // { name: "Linnea Thorstensson", title: "Head of Banquet", email: "linnea.thorstensson@armada.nu", emoji:'💃', imageUrl: "/assets/linnea.jpg", linkedInUrl: "https://www.linkedin.com/in/linneathorstensson/" },
  // { name: "Henrik Siren", title: "Head of Logistics and Career Fair", email: "henrik.siren@armada.nu", emoji:'👷‍♂️', imageUrl: "/assets/henrik.jpg", linkedInUrl: "https://www.linkedin.com/in/henrik-siren/" },
  // { name: "Lukas Lindroos", title: "Head of Logistics", email: "lukas.lindroos@armada.nu", emoji:'👷‍♂️', imageUrl: "/assets/lukas.jpg", linkedInUrl: "https://www.linkedin.com/in/lukas-lindroos-1889a8102/" },
  // { name: "Emilia Jakobson Stålhane", title: "Head of Career Fair", email: "emilia.stalhane@armada.nu", emoji:'👷‍♀️', imageUrl: "/assets/emilia.jpg", linkedInUrl: "https://www.linkedin.com/in/emilia-stalhane/" },
  // { name: "Jacob Larsson", title: "Head of Career Fair", email: "jacob.larsson@armada.nu", emoji:'👷‍♂️', imageUrl: "/assets/jacob.jpg", linkedInUrl: "https://www.linkedin.com/in/ejacoblarsson/" },
  // { name: "Luigi Morrone", title: "Head of Service", email: "luigi.morrone@armada.nu", emoji:'👨‍🔧', imageUrl: "/assets/luigi.jpg", linkedInUrl: "https://www.linkedin.com/in/luigi-morrone-481368178/" },
  // { name: "Niklas Wallhed", title: "Head of Sustainability and Diversity", email: "niklas.wallhed@armada.nu", emoji:'♻️', imageUrl: "/assets/niklas.jpg", linkedInUrl: "https://www.linkedin.com/in/niklaswallhed/" },
  // { name: "Niclas Hedberg", title: "Head of IT", email: "niclas.hedberg@armada.nu", emoji:'💻', imageUrl: "/assets/niclas.jpg", linkedInUrl: "https://www.linkedin.com/in/niclashedberg/" },
  // { name: "Oscar Wiigh", title: "Head of Web Development", email: "oscar.wiigh@armada.nu", emoji:'💻', imageUrl: "/assets/oscar.jpg", linkedInUrl: "https://www.linkedin.com/in/wiigh/" },
  // { name: "Sara Gustafsson", title: "Head of Internal Systems", email: "sara.gustafsson@armada.nu", emoji:'💻', imageUrl: "/assets/sara.jpg", linkedInUrl: "https://www.linkedin.com/in/saragson/" },
]



class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }

  createCards(start, end) {
    return (ProjectGroup.filter((i, index) => (index < end && index >= start)).map((info, index) => <ContactCard name={info.name} key={index} title={info.title} email={info.email} emoji={info.emoji} imageUrl={info.imageUrl} linkedInUrl={info.linkedInUrl}/>))
  }
  render() {
    return (<div><h1 className="helmet">Contact ARMADA</h1>
      <div className="contact-list">
        {this.createCards(0, 4)}
        <div id="line"></div><div id="line"></div>
      </div>
      <div className="contact-list">
        {this.createCards(4, 8)}
        <div id="line"></div>
      </div>
      <div className="contact-list">
        {this.createCards(8, 12)}
        <div id="line"></div>
      </div>
      <div className="contact-list">
        {this.createCards(12, 16)}
        <div id="line"></div>
      </div>
      <div className="contact-list">
        {this.createCards(16, 20)}
      </div>
      <h1>More to come!</h1>
    </div>
    );
  }
}

export default Contacts;
