import React from "react"

import "./contact.scss";
import ContactCard from "../ContactCard"
import "../../styles/global.scss"

const ProjectGroup = [
  { name: "Ulrik Sköldkvist", title: "Project Manager", email: "a@armada.nu", emoji:'👨‍✈️', imageUrl: "/assets/ulrik.jpg" },
  { name: "Agnes Gemvik", title: "Head of HR", email: "agnes.gemvik@armada.nu", emoji:'⛑', imageUrl: "/assets/agnes.jpg" },
  { name: "Philip Börjesson", title: "Art Director", email: "philip.borjesson@armada.nu", emoji:'👨‍🎨', imageUrl: "/assets/philip.jpg" },
  { name: "Staffan Konstholm", title: "Head of Media", email: "staffan.konstholm@armada.nu", emoji:'🎬', imageUrl: "/assets/staffan.jpg" },
  { name: "Ghea Sagita", title: "Head of Marketing", email: "ghea.sagita@armada.nu", emoji:'✍️',imageUrl: "/assets/ghea.jpg" },
  { name: "Filip Jacobson", title: "Head of Business Relations and Events", email: "filip.jacobson@armada.nu", emoji:'🤝', imageUrl: "/assets/filip.jpg" },
  { name: "Fahami Annan Green", title: "Head of Sales", email: "fahami.annan.green@armada.nu", emoji:'📈', imageUrl: "/assets/fahami.jpg" },
  { name: "Ferhat Kaya", title: "Head of Sales", email: "ferhat.kaya@armada.nu", emoji:'📈', imageUrl: "/assets/ferhat.jpg" },
  { name: "Daniel Aston", title: "Head of Sales", email: "daniel.aston@armada.nu", emoji:'📈', imageUrl: "/assets/daniel.jpg" },
  { name: "Ella Andersson", title: "Head of Events", email: "ella.andersson@armada.nu", emoji:'🎉', imageUrl: "/assets/ella.jpg" },
  { name: "Linnea Thorstensson", title: "Head of Banquet", email: "linnea.thorstensson@armada.nu", emoji:'💃', imageUrl: "/assets/linnea.jpg" },
  { name: "Henrik Siren", title: "Head of Logistics and Career Fair", email: "henrik.siren@armada.nu", emoji:'👷‍♂️', imageUrl: "/assets/henrik.jpg" },
  { name: "Lukas Lindroos", title: "Head of Logistics", email: "lukas.lindroos@armada.nu", emoji:'👷‍♂️', imageUrl: "/assets/lukas.jpg" },
  { name: "Emilia Jakobson Stålhane", title: "Head of Career Fair", email: "emilia.stalhane@armada.nu", emoji:'👷‍♀️', imageUrl: "/assets/emilia.jpg" },
  { name: "Jacob Larsson", title: "Head of Career Fair", email: "jacob.larsson@armada.nu", emoji:'👷‍♂️', imageUrl: "/assets/jacob.jpg" },
  { name: "Luigi Morrone", title: "Head of Service", email: "luigi.morrone@armada.nu", emoji:'👨‍🔧', imageUrl: "/assets/luigi.jpg" },
  { name: "Niklas Wallhed", title: "Head of Sustainability and Diversity", email: "niklas.wallhed@armada.nu", emoji:'♻️', imageUrl: "/assets/niklas.jpg" },
  { name: "Niclas Hedberg", title: "Head of IT", email: "niclas.hedberg@armada.nu", emoji:'💻', imageUrl: "/assets/niclas.jpg" },
  { name: "Oscar Wiigh", title: "Head of Web Development", email: "oscar.wiigh@armada.nu", emoji:'💻', imageUrl: "/assets/oscar.jpg" },
  { name: "Sara Gustafsson", title: "Head of Internal Systems", email: "sara.gustafsson@armada.nu", emoji:'💻', imageUrl: "/assets/sara.jpg" },
]



class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }

  createCards(start, end) {
    return (ProjectGroup.filter((i, index) => (index < end && index >= start)).map((info, index) => <ContactCard name={info.name} key={index} title={info.title} email={info.email} emoji={info.emoji} imageUrl={info.imageUrl} />))
  }
  render() {
    return (<div><h1 className="helmet">Contact US</h1>
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
    </div>
    );
  }
}

export default Contacts;
