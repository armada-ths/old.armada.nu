import React from "react"

import "./contact.scss";
import ContactCard from "../ContactCard"
import "../../styles/global.scss"
//
const ProjectGroup = [
  { name: "Daniel Aston", title: "Project Manager", email: "a@armada.nu", emoji: '👨‍✈️', imageUrl: "/assets/images/PG20/DanielDrake.jpg", linkedInUrl: "https://www.linkedin.com/in/danielaston/" },
  { name: "Arvid Nilsson", title: "Head of HR", email: "arvid.nilsson@armada.nu", emoji: '⛑', imageUrl: "/assets/images/PG20/ArvidAligator.jpg", linkedInUrl: "https://www.linkedin.com/in/arvid-nilsson-564808182/" },
  { name: "Moa Lilja", title: "Art Director", email: "moa.lilja@armada.nu", emoji: '👨‍🎨', imageUrl: "/assets/images/PG20/Moa_.jpg", linkedInUrl: "https://www.linkedin.com/in/moa-kajsa-lilja-48b162115/" },
  { name: "Sandra Ransed", title: "Head of Media & Marketing", email: "sandra.ransed@armada.nu", emoji: '🎬', imageUrl: "/assets/images/PG20/SandraSavage.jpg", linkedInUrl: "https://www.linkedin.com/in/sandraransed/" },
  { name: "Kevin Stojanovski", title: "Head of Business Relations and Events", email: "kevin.stojanovski@armada.nu", emoji: '🤝', imageUrl: "/assets/images/PG20/KevinKelvin.jpg", linkedInUrl: "https://www.linkedin.com/in/kevinstojanovski/" },
  { name: "Pavel Askari", title: "Head of Sales", email: "pavel.askari@armada.nu", emoji: '📈', imageUrl: "/assets/images/PG20/PavelPeach.jpg", linkedInUrl: "https://www.linkedin.com/in/pavel-askari-705a40180/" },
  { name: "Natasha Mridha", title: "Head of Sales", email: "natasha.mridha@armada.nu", emoji: '📈', imageUrl: "/assets/images/PG20/NatashaNote.jpg", linkedInUrl: "https://www.linkedin.com/in/natashamridha/" },
  { name: "Anna Gentek", title: "Head of Sales", email: "anna.gentek@armada.nu", emoji: '📈', imageUrl: "/assets/images/PG20/AnnaApple.jpg", linkedInUrl: "https://www.linkedin.com/in/anna-gentek-a0545b141/" },
  { name: "Jakob Huber", title: "Head of Events", email: "jakob.huber@armada.nu", emoji: '🎉', imageUrl: "/assets/images/PG20/JakobJazz.jpg", linkedInUrl: "https://www.linkedin.com/in/jakob-k-huber/" },
  { name: "Josefine Havdelin", title: "Head of Banquet", email: "josefine.havdelin@armada.nu", emoji: '💃', imageUrl: "/assets/images/PG20/JosefineJogging.jpg", linkedInUrl: "https://www.linkedin.com/in/josefine-havdelin-9298a4b3/" },
  { name: "Leonard Hökby", title: "Head of Logistics and Career Fair", email: "leonard.hokby@armada.nu", emoji: '👷‍♂️', imageUrl: "/assets/images/PG20/LeoLionPoster.jpg", linkedInUrl: "https://www.linkedin.com/in/leonard-h%C3%B6kby-660b22174/" },
  { name: "Filip Rydén", title: "Head of Logistics", email: "filip.ryden@armada.nu", emoji: '👷‍♂️', imageUrl: "/assets/images/PG20/Filip_.jpg", linkedInUrl: "https://www.linkedin.com/in/filip-ryd%C3%A9n-a32b3717a/" },
  { name: "Lukas Wallhager", title: "Head of Career Fair", email: "lukas.wallhager@armada.nu", emoji: '👷‍♀️', imageUrl: "/assets/images/PG20/LucasLiqour.jpg", linkedInUrl: "https://www.linkedin.com/in/lucaswallhager/" },
  { name: "Alessio Russo", title: "Head of Career Fair", email: "alessio.russo@armada.nu", emoji: '👷‍♂️', imageUrl: "/assets/images/PG20/AlessioArticle.jpg", linkedInUrl: "https://www.linkedin.com/in/russoalessio/" },
  { name: "Elias Ljunggren", title: "Head of Service", email: "elias.ljunggren@armada.nu", emoji: '👨‍🔧', imageUrl: "/assets/images/PG20/EliasEagle.jpg", linkedInUrl: "https://www.linkedin.com/in/eliasljunggren/" },
  { name: "Camilla Blomqvist", title: "Head of Sustainability", email: "camilla.blomqvist@armada.nu", emoji: '♻️', imageUrl: "/assets/images/PG20/CamillaChocolate.jpg", linkedInUrl: "https://www.linkedin.com/in/camilla-blomqvist-b896b817a/" },
  { name: "Elise Brouillette", title: "Head of Diversity", email: "elise.brouillette@armada.nu", emoji: '❤️', imageUrl: "", linkedInUrl: "https://www.linkedin.com/in/camilla-blomqvist-b896b817a/" },
  { name: "Oscar Rohde Dahlberg", title: "Head of IT", email: "oscar.dahlberg@armada.nu", emoji: '💻', imageUrl: "/assets/images/PG20/OscarOcean.jpg", linkedInUrl: "https://www.linkedin.com/in/oscarrohdedahlberg/" },
  { name: "Ann-Catrin Lindkvist", title: "Head of Web Development", email: "anncatrin.lindkvist@armada.nu", emoji: '💻', imageUrl: "/assets/images/PG20/ACAlphabet.jpg", linkedInUrl: "https://www.linkedin.com/in/ann-catrin-lindkvist/" },
  { name: "Louise Zetterlund", title: "Head of Internal Systems", email: "louise.zetterlund@armada.nu", emoji: '💻', imageUrl: "/assets/images/PG20/Louise_.jpg", linkedInUrl: "https://www.linkedin.com/in/louise-zetterlund/" },
]



class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }

  createCards(start, end) {
    return (ProjectGroup.filter((i, index) => (index < end && index >= start)).map((info, index) => <ContactCard name={info.name} key={index} title={info.title} email={info.email} emoji={info.emoji} imageUrl={info.imageUrl} linkedInUrl={info.linkedInUrl} />))
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
      <h1></h1>
    </div>
    );
  }
}

export default Contacts;
