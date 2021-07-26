import React from 'react'
import './index.scss';
import ContactCard from '../ContactCard'

const Contacts = () => {
  
  const projectGroup = [
    { name: 'Josefine Havdelin', title: 'Project Manager', email: 'a@armada.nu', emoji: '👩‍💼', imageUrl: '/assets/images/PG21/Josefine.jpg', linkedInUrl: 'https://www.linkedin.com/in/josefine-havdelin-9298a4b3/' },
    { name: 'Sara Damne', title: 'Head of Marketing & Communication', email: 'sara.damne@armada.nu', emoji: '👩‍💻', imageUrl: '/assets/images/PG21/Sara.jpg', linkedInUrl: 'https://se.linkedin.com/in/sara-damne' },
    { name: 'Barath Kumar', title: 'Head of HR', email: 'barath.kumar@armada.nu', emoji: '💞', imageUrl: '/assets/images/PG21/Barath.jpg', linkedInUrl: 'http://linkedin.com/in/barath-kumar-sathish-kumar-7a2b70124/' },
    { name: 'Louise Hellberg', title: 'Art Director', email: 'louise.hellberg@armada.nu', emoji: '👨‍🎨', imageUrl: '/assets/images/PG21/Louise.jpg', linkedInUrl: 'https://www.linkedin.com/in/louise-hellberg/' },
    { name: 'Hanna Ritzmo', title: 'Head of Media & Marketing', email: 'hanna.ritzmo@armada.nu', emoji: '🎬', imageUrl: '/assets/images/PG21/Hanna.jpg', linkedInUrl: 'https://se.linkedin.com/in/hanna-ritzmo-a88310179' },
    { name: 'Anna Moustakas', title: 'Head of Business Relations and Events', email: 'anna.moustakas@armada.nu', emoji: '🤝', imageUrl: '/assets/images/PG21/Anna.jpg', linkedInUrl: 'https://www.linkedin.com/in/anna-natalia-moustakas/' },
    { name: 'Leonard Hökby', title: 'Head of Sales', email: 'leonard.hokby@armada.nu', emoji: '📈', imageUrl: '/assets/images/PG21/Leo.jpg', linkedInUrl: 'https://www.linkedin.com/in/leonard-hökby/' },
    { name: 'Katrina Liang', title: 'Head of Sales', email: 'katrina.liang@armada.nu', emoji: '📈', imageUrl: '/assets/images/PG21/Katarina.jpg', linkedInUrl: 'https://www.linkedin.com/in/katrina-liang/' },
    { name: 'Erik Römpötti', title: 'Head of Sales', email: 'erik.rompotti@armada.nu', emoji: '📈', imageUrl: '/assets/images/PG21/Erik.jpg', linkedInUrl: 'www.linkedin.com/in/erik-rompotti/' },     
    { name: 'Fredrik Lagerström', title: 'Head of Sales', email: 'fredrik.lagerstrom@armada.nu', emoji: '📈', imageUrl: '/assets/images/PG21/Fredrik.jpg', linkedInUrl: 'https://www.linkedin.com/in/fredrik-lagerstrom/' },     
    { name: 'Amey Shah', title: 'Head of Events', email: 'amey.shah@armada.nu', emoji: '🎉', imageUrl: '/assets/images/PG21/Amey.jpg', linkedInUrl: 'https://se.linkedin.com/in/amey-shah-855a18166' },
    { name: 'Josefin Svensson', title: 'Head of Banquet', email: 'josefin.svensson@armada.nu', emoji: '💃', imageUrl: '/assets/images/PG21/Josefin.jpg', linkedInUrl: '#' },
    { name: 'Filip Rydén', title: 'Head of Logistics and Career Fair', email: 'filip.ryden@armada.nu', emoji: '👷‍♂️', imageUrl: '/assets/images/PG21/Filip.jpg', linkedInUrl: 'https://www.linkedin.com/in/filip-ryd%C3%A9n-a32b3717a/' }, 
    { name: 'Niklas Karlsson', title: 'Head of Logistics', email: 'niklas.karlsson@armada.nu', emoji: '👷‍♂️', imageUrl: '/assets/images/PG21/Niklas.jpg', linkedInUrl: 'https://www.linkedin.com/in/niklas-karlsson-98615919a/' }, 
    { name: 'Vedashubham Pandiyan', title: 'Head of Career Fair', email: 'vedashubham.pandiyan@armada.nu', emoji: '👷‍♀️', imageUrl: '/assets/images/PG21/Shubham.jpg', linkedInUrl: 'www.linkedin.com/in/vedashubham-pandiyan-04314917b/' },     
    { name: 'Ellen Engquist', title: 'Head of Service', email: 'ellen.engquist@armada.nu', emoji: '👨‍🔧', imageUrl: '/assets/images/PG21/Ellen.jpg', linkedInUrl: 'https://www.linkedin.com/in/ellen-engquist-a46589196/' },
    { name: 'Saga Stugholm', title: 'Head of Sustainability', email: 'saga.stugholm@armada.nu', emoji: '♻️', imageUrl: '/assets/images/PG21/Saga.jpg', linkedInUrl: 'https://www.linkedin.com/in/saga-stugholm/' },
    { name: 'Anastasia Angeli', title: 'Head of Diversity', email: 'anastasia.angeli@armada.nu', emoji: '❤️', imageUrl: '/assets/images/PG21/Anastasia.jpeg', linkedInUrl: 'https://uk.linkedin.com/in/anastasia-angeli-5235a493/' },
    { name: 'Moa Engquist', title: 'Head of IT', email: 'moa.enquist@armada.nu', emoji: '💻', imageUrl: '/assets/images/PG21/Moa.jpg', linkedInUrl: 'https://www.linkedin.com/in/moa-engquist/' },
    { name: 'Linnea Bonnevier', title: 'Head of Web Development', email: 'linnea.bonnevier@armada.nu', emoji: '💻', imageUrl: '/assets/images/PG21/Linnea.jpg', linkedInUrl: 'https://www.linkedin.com/in/linnea-bonnevier/' },
    { name: 'Rasmus Rudling', title: 'Head of Internal Systems', email: 'rasmus.rudling@armada.nu', emoji: '💻', imageUrl: '/assets/images/PG21/Rasmus.jpg', linkedInUrl: 'https://se.linkedin.com/in/rrudling/' }, 
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
      <div className='contact-list'>
        {createCards(20, 24)}
      </div>
    </div>
    );
}

export default Contacts;
