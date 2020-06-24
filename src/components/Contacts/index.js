import React from 'react'
import './index.scss';
import ContactCard from '../ContactCard'

const Contacts = () => {
  
  const projectGroup = [
    { name: 'Daniel Aston', title: 'Project Manager', email: 'a@armada.nu', emoji: '👨‍✈️', imageUrl: '/assets/images/PG20/danieldrake.jpg', linkedInUrl: 'https://www.linkedin.com/in/danielaston/' },
    { name: 'Moa Lilja', title: 'Art Director', email: 'moa.lilja@armada.nu', emoji: '👨‍🎨', imageUrl: '/assets/images/PG20/moa_.jpg', linkedInUrl: 'https://www.linkedin.com/in/moa-kajsa-lilja-48b162115/' },
    { name: 'Sandra Ransed', title: 'Head of Media & Marketing', email: 'sandra.ransed@armada.nu', emoji: '🎬', imageUrl: '/assets/images/PG20/sandrasavage.jpg', linkedInUrl: 'https://www.linkedin.com/in/sandraransed/' },
    { name: 'Kevin Stojanovski', title: 'Head of Business Relations and Events', email: 'kevin.stojanovski@armada.nu', emoji: '🤝', imageUrl: '/assets/images/PG20/kevinkelvin.jpg', linkedInUrl: 'https://www.linkedin.com/in/kevinstojanovski/' },
    { name: 'Pavel Askari', title: 'Head of Sales', email: 'pavel.askari@armada.nu', emoji: '📈', imageUrl: '/assets/images/PG20/pavelpeach.jpg', linkedInUrl: 'https://www.linkedin.com/in/pavel-askari-705a40180/' },
    { name: 'Natasha Mridha', title: 'Head of Sales', email: 'natasha.mridha@armada.nu', emoji: '📈', imageUrl: '/assets/images/PG20/natashanote.jpg', linkedInUrl: 'https://www.linkedin.com/in/natashamridha/' },
    { name: 'Anna Gentek', title: 'Head of Sales', email: 'anna.gentek@armada.nu', emoji: '📈', imageUrl: '/assets/images/PG20/annaapple.jpg', linkedInUrl: 'https://www.linkedin.com/in/anna-gentek-a0545b141/' },
    { name: 'Jakob Huber', title: 'Head of Events', email: 'jakob.huber@armada.nu', emoji: '🎉', imageUrl: '/assets/images/PG20/jakobjazz.jpg', linkedInUrl: 'https://www.linkedin.com/in/jakob-k-huber/' },
    { name: 'Josefine Havdelin', title: 'Head of Banquet', email: 'josefine.havdelin@armada.nu', emoji: '💃', imageUrl: '/assets/images/PG20/josefinejogging.jpg', linkedInUrl: 'https://www.linkedin.com/in/josefine-havdelin-9298a4b3/' },
    { name: 'Leonard Hökby', title: 'Head of Logistics and Career Fair', email: 'leonard.hokby@armada.nu', emoji: '👷‍♂️', imageUrl: '/assets/images/PG20/leolionposter.jpg', linkedInUrl: 'https://www.linkedin.com/in/leonard-h%C3%B6kby-660b22174/' },
    { name: 'Filip Rydén', title: 'Head of Logistics', email: 'filip.ryden@armada.nu', emoji: '👷‍♂️', imageUrl: '/assets/images/PG20/filip_.jpg', linkedInUrl: 'https://www.linkedin.com/in/filip-ryd%C3%A9n-a32b3717a/' },
    { name: 'Lukas Wallhager', title: 'Head of Career Fair', email: 'lukas.wallhager@armada.nu', emoji: '👷‍♀️', imageUrl: '/assets/images/PG20/lucasliqour.jpg', linkedInUrl: 'https://www.linkedin.com/in/lucaswallhager/' },
    { name: 'Alessio Russo', title: 'Head of Career Fair', email: 'alessio.russo@armada.nu', emoji: '👷‍♂️', imageUrl: '/assets/images/PG20/alessioarticle.jpg', linkedInUrl: 'https://www.linkedin.com/in/russoalessio/' },
    { name: 'Elias Ljunggren', title: 'Head of Service and Sponsorship', email: 'elias.ljunggren@armada.nu', emoji: '👨‍🔧', imageUrl: '/assets/images/PG20/eliaseagle.jpg', linkedInUrl: 'https://www.linkedin.com/in/eliasljunggren/' },
    { name: 'Camilla Blomqvist', title: 'Head of Sustainability', email: 'camilla.blomqvist@armada.nu', emoji: '♻️', imageUrl: '/assets/images/PG20/camillachocolate.jpg', linkedInUrl: 'https://www.linkedin.com/in/camilla-blomqvist-b896b817a/' },
    { name: 'Elise Brouillette', title: 'Head of Diversity', email: 'elise.brouillette@armada.nu', emoji: '❤️', imageUrl: '/assets/images/PG20/elise_.jpg', linkedInUrl: 'https://www.linkedin.com/in/elise-brouillette/' },
    { name: 'Oscar Rohde Dahlberg', title: 'Head of IT', email: 'oscar.dahlberg@armada.nu', emoji: '💻', imageUrl: '/assets/images/PG20/oscarocean.jpg', linkedInUrl: 'https://www.linkedin.com/in/oscarrohdedahlberg/' },
    { name: 'Ann-Catrin Lindkvist', title: 'Head of Web Development', email: 'anncatrin.lindkvist@armada.nu', emoji: '💻', imageUrl: '/assets/images/PG20/acalphabet.jpg', linkedInUrl: 'https://www.linkedin.com/in/ann-catrin-lindkvist/' },
    { name: 'Louise Zetterlund', title: 'Head of Internal Systems', email: 'louise.zetterlund@armada.nu', emoji: '💻', imageUrl: '/assets/images/PG20/louise_.jpg', linkedInUrl: 'https://www.linkedin.com/in/louise-zetterlund/' },
  ]

  const createCards = (start, end) => {
    return (projectGroup.filter((i, index) => (index < end && index >= start)).map((info, index) => <ContactCard name={info.name} key={index} title={info.title} email={info.email} emoji={info.emoji} imageUrl={info.imageUrl} linkedInUrl={info.linkedInUrl} />))
  }

  return (<div className='contacts'>
      <h1>Contact ARMADA</h1>
      <div className='contact-list'>
        {createCards(0, 4)}
        <div className='line'/>
      </div>
      <div className='contact-list'>
        {createCards(4, 8)}
        <div className='line'/>
      </div>
      <div className='contact-list'>
        {createCards(8, 12)}
        <div className='line'/>
      </div>
      <div className='contact-list'>
        {createCards(12, 16)}
        <div className='line'/>
      </div>
      <div className='contact-list'>
        {createCards(16, 20)}
      </div>
    </div>
    );
}

export default Contacts;
