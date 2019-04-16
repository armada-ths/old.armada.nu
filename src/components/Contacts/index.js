import React from "react"

import "./contact.scss";
import ContactCard from "../ContactCard"
import "../../styles/global.scss"

const ProjectGroup = [
  { name: "Ulrik Sköldkvist", title: "Project Manager", email: "a@armada.nu", imageUrl: "" },
  { name: "Agnes Gemvik", title: "Head of HR", email: "agnes.gemvik@armada.nu", imageUrl: "" },
  { name: "Philip Börjesson", title: "Art Director", email: "philip.borjesson@armada.nu", imageUrl: "" },
  { name: "Staffan Konstholm", title: "Head of Media", email: "staffan.konstholm@armada.nu", imageUrl: "" },
  { name: "Ghea Sagita", title: "Head of Marketing", email: "ghea.sagita@armada.nu", imageUrl: "" },
  { name: "Filip Jacobson", title: "Head of Business Relations and Events", email: "filip.jacobson@armada.nu", imageUrl: "" },
  { name: "Fahami Annan Green", title: "Head of Sales", email: "fahami.annan.green@armada.nu", imageUrl: "" },
  { name: "Ferhat Kaya", title: "Head of Sales", email: "ferhat.kaya@armada.nu", imageUrl: "" },
  { name: "Daniel Aston", title: "Head of Sales", email: "daniel.aston@armada.nu", imageUrl: "" },
  { name: "Ella Andersson", title: "Head of Events", email: "ella.andersson@armada.nu", imageUrl: "" },
  { name: "Linnea Thorstensson", title: "Head of Banquet", email: "linnea.thorstensson@armada.nu", imageUrl: "" },
  { name: "Henrik Siren", title: "Head of Logistics and Career Fair", email: "henrik.siren@armada.nu", imageUrl: "" },
  { name: "Lukas Lindroos", title: "Head of Logistics", email: "lukas.lindroos@armada.nu", imageUrl: "" },
  { name: "Emilia Jakobson Stålhane", title: "Head of Career Fair", email: "emilia.stalhane@armada.nu", imageUrl: "" },
  { name: "Niklas Wallhed", title: "Head of Sustainability and Diversity", email: "niklas.wallhed@armada.nu", imageUrl: "" },
  { name: "Niclas Hedberg", title: "Head of IT", email: "niclas.hedberg@armada.nu", imageUrl: "" },
  { name: "Oscar Wiigh", title: "Head of Web Development", email: "oscar.wiigh@armada.nu", imageUrl: "" },
  { name: "Sara Gustafsson", title: "Head of Internal Systems", email: "sara.gustafsson@armada.nu", imageUrl: "" },
]



class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }

  createCards(start, end) {
    return (ProjectGroup.filter((i, index) => (index < end && index >= start)).map((info, index) => <ContactCard name={info.name} key={index} title={info.title} email={info.email} imageUrl={info.imageUrl} />))
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
        {this.createCards(16, 18)}
      </div>
    </div>
    );
  }
}

export default Contacts;
