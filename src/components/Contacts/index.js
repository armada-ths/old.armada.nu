import React from 'react'
import './index.scss';
import ContactCard from '../ContactCard'

const Contacts = () => {
  
  const projectGroup = [
    { name: 'Filip Rydén', title: 'Project Manager 2022', email: 'a@armada.nu', emoji: '👨‍💼', imageUrl: '/assets/images/PG21/Filip.jpg', linkedInUrl: 'https://www.linkedin.com/in/filip-ryd%C3%A9n-a32b3717a/' },
    //{ name: 'Josefine Havdelin', title: 'Project Manager 2021', email: 'a@armada.nu', emoji: '👩‍💼', imageUrl: '/assets/images/PG21/Josefine.jpg', linkedInUrl: 'https://www.linkedin.com/in/josefine-havdelin-9298a4b3/' },
    { name: 'Melvin Jobe', title: 'Head of Marketing & Communication', email: 'melvin.jobe@armada.nu', emoji: '👩‍💻', imageUrl: null, linkedInUrl: 'https://www.linkedin.com/in/melvinjobe/' },
    // { name: 'Barath Kumar', title: 'Head of HR', email: 'barath.kumar@armada.nu', emoji: '💞', imageUrl: '/assets/images/PG21/Barath.jpg', linkedInUrl: 'http://linkedin.com/in/barath-kumar-sathish-kumar-7a2b70124/' },
    { name: 'Shreeya Sathe', title: 'Art Director', email: 'shreeya.sathe@armada.nu', emoji: '👨‍🎨', imageUrl: null, linkedInUrl: 'https://www.linkedin.com/in/shreeya-sathe/' },
    { name: 'Kenan Güler', title: 'Head of Media & Marketing', email: 'kenan.guler@armada.nu', emoji: '🎬', imageUrl: null, linkedInUrl: 'https://www.linkedin.com/in/kenan-g%C3%BCler-1b4b00191/' },
    { name: 'Ida Ristola', title: 'Head of Business Relations and Events', email: 'ida.ristola@armada.nu', emoji: '🤝', imageUrl: null, linkedInUrl: 'https://www.linkedin.com/in/ida-ristola/' },
    { name: 'Anushka Bhowmik', title: 'Head of Sales', email: 'anushka.bhowmik@armada.nu', emoji: '📈', imageUrl: null, linkedInUrl: 'https://www.linkedin.com/in/anushka-bhowmik-7632a1219/' },
    { name: 'Barbarella Gyi Grejalde', title: 'Head of Sales', email: 'barbarella.gyi.grejalde@armada.nu', emoji: '📈', imageUrl: null, linkedInUrl: 'https://www.linkedin.com/in/barbarellagrejalde/' },
    { name: 'Adithya Raju', title: 'Head of Sales', email: 'adithya.raju@armada.nu', emoji: '📈', imageUrl: null, linkedInUrl: 'https://www.linkedin.com/in/adithyaraju/' },     
    // { name: 'Fredrik Lagerström', title: 'Head of Sales', email: 'fredrik.lagerstrom@armada.nu', emoji: '📈', imageUrl: '/assets/images/PG21/Fredrik.jpg', linkedInUrl: 'https://www.linkedin.com/in/fredrik-lagerstrom/' },     
    { name: 'Berivan Sagici', title: 'Head of Events', email: 'berivan.sagici@armada.nu', emoji: '🎉', imageUrl: null, linkedInUrl: 'https://www.linkedin.com/in/berivan-sagici-06a6ba191/' },
    { name: 'Narges Qorbanzada', title: 'Head of Banquet', email: 'narges.qorbanzada@armada.nu', emoji: '💃', imageUrl: null, linkedInUrl: 'linkedin.com/in/narges-qorbanzada-16844b205/' },
    // { name: 'Filip Rydén', title: 'Head of Logistics and Career Fair', email: 'filip.ryden@armada.nu', emoji: '👷‍♂️', imageUrl: '/assets/images/PG21/Filip.jpg', linkedInUrl: 'https://www.linkedin.com/in/filip-ryd%C3%A9n-a32b3717a/' }, 
    { name: 'Kilima Mambo', title: 'Head of Logistics & Fair', email: 'kilima.mambo@armada.nu', emoji: '👷‍♂️', imageUrl: null, linkedInUrl: 'https://www.linkedin.com/in/mambo-kilima-13819a177/' },
    { name: 'Jessica Lyrner Morén', title: 'Head of Logistics', email: 'jessica.lyrner.moren@armada.nu', emoji: '👷‍♂️', imageUrl: null, linkedInUrl: '#' }, 
    { name: 'Vasigaran Senthilkumar', title: 'Head of Career Fair', email: 'vasigaran.senthilkumar@armada.nu', emoji: '👷‍♀️', imageUrl: null, linkedInUrl: 'https://www.linkedin.com/in/vasigaran-senthilkumar/' },
    { name: 'Jeffrey Chang', title: 'Head of Career Fair', email: 'jeffrey.chang@armada.nu', emoji: '👷‍♀️', imageUrl: null, linkedInUrl: 'https://www.linkedin.com/in/jeffrey-chang-914a571b5/' },     
    { name: 'Cecilia Zambelli', title: 'Head of Service', email: 'cecilia.zambelli@armada.nu', emoji: '👨‍🔧', imageUrl: null, linkedInUrl: 'https://www.linkedin.com/in/cecilia-zambelli-2a074a193/' },
    { name: 'Ajay Surya Gnaneswaran', title: 'Head of Sustainability', email: 'ajay.surya.gnaneswaran@armada.nu', emoji: '♻️', imageUrl: null, linkedInUrl: 'https://www.linkedin.com/in/ajaysurya97/' },
    { name: 'Tor Shimamura Fagle', title: 'Head of Diversity', email: 'tor.shimamura.fagle@armada.nu', emoji: '❤️', imageUrl: null, linkedInUrl: 'https://www.linkedin.com/in/tor-shimamura-fagle-7b6571204/' },
    { name: 'Porsev Aslan', title: 'Head of IT', email: 'porsev.aslan@armada.nu', emoji: '💻', imageUrl: null, linkedInUrl: 'https://www.linkedin.com/in/porsev-aslan/' },
    { name: 'Dana Ismail', title: 'Head of Web Development', email: 'dana.ismail@armada.nu', emoji: '💻', imageUrl: null, linkedInUrl: 'https://www.linkedin.com/in/dana-ismail-5339151b8/' },
    { name: 'Anton Danker', title: 'Head of Internal Systems', email: 'anton.danker@armada.nu', emoji: '💻', imageUrl: null, linkedInUrl: 'https://www.linkedin.com/in/antondanker/' }, 
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
