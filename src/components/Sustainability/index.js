import React from 'react';
// import GreenRoomExhibitors from '../GreenRoomExhibitors'
//import ExhibitorList from '../ExhibitorList'
import SustainabilityInterviews from '../../components/SustainabilityInterviews'

import './index.scss';

//TODO move 'Help us become more sustainable' to its own component our to the layoutpage
// ADD green room process
// ADD green room companies

const Sustainability = () => {

    return (<div>
      <div>
        <h2>Sustainability</h2>
        <img alt='' id='logo' src='/assets/sustainability-melon-nolabel.png'/>
        <p className='text'>
        <b id='sustainability-color'>Sustainability</b> is one of the key elements required in making the world a better place, a place
        where humanity and nature can live together in harmony without depleting nature’s resources. It
        is because of this that Sustainability is in the core of our operations. THS Armada’s
        Sustainability policy can be found
        </p>
        <form id='submitForm' method='get' action='/assets/Sustainability_Diversity-Policy.pdf'>
           <button type='submit'>Download Sustainability Policy</button>
        </form>
      </div>
      <div>
        <img alt='' className='background_Images Small' src='/assets/sustainability/sustainability_background2.jpg' height='200em' width='260em'/>
        <img alt='' className='background_Images Small' src='/assets/sustainability/sustainability_background4.jpg' height='200em' width='260em'/>
        <img alt='' className='background_Images Small' src='/assets/sustainability/sustainability_background7.jpeg' height='200em' width='260em'/>
      </div>
      <div className='newSection'>
        <h2>Green Room</h2>
        <p className='text'>
          THS Armada has dedicated an area of the fair to companies that we deem to be the
          frontrunners in our vision for a sustainable future. This area is known as the Green Room. The
          exhibitors in Green Room are eager to share their work in regards to minimising their
          environmental impact. Visiting Green Room is a must if you’re interested in sustainability, the
          environment or if you just want to know how different companies can work with sustainability.
        </p>
        <p className='text'>Exhibitors in Green Room 2019 and the reasoning for having them in the room can be found
        here:</p>
        <form id='submitForm' method='get' action='/assets/green-room.pdf'>
           <button type='submit'>See Exhibitors in the Green Room</button>
        </form>
      </div>
      <div className='newSection'>
        <h2>Armada Sustainability Index</h2>
        <p className='text'>
          Want to check out how we decide which exhibitors gets a spot in Green Room? Click the button below.
        </p>
        <img alt='' className='background_Images middle' src='/assets/sustainability/ASI_criteria.jpg' height='200em' width='260em'/>
        <form id='submitForm' method='get' action='/assets/sustainability/ASI_criteria.jpg'>
           <button type='submit'>Our Selection Strategy</button>
        </form>
      </div>
      <img alt='' className='background_Images' src='/assets/sustainability/sustainability_background1.jpeg'/>
      <div className='newSection'>
        <h2>Climate Compensation</h2>
        <p className='text'>
          This year, THS Armada offers the participating companies to climate compensate for their visit.
          The climate compensation is done by either investing in sustainable projects in developing
          countries, or by planting trees. The emission calculations are based on transportation of
          participants and various flows associated with goods, waste, food use and energy usage during
          events as well as the career fair. The companies that climate compensate their visit through
          THS Armada will receive a climate compensation symbol during the fair on the Armada website. We are climate compensating through Klimatkompensera.nu.
          </p>
        <form id='submitForm' target='blank' method='get' action='https://klimatkompensera.se/'>
           <button type='submit'>Check out their website</button>
        </form>
      </div>
      <div>
        <img alt='' className='background_Images Small' src='/assets/sustainability/sustainability_background8.jpeg' height='200em' width='260em'/>
        <img alt='' className='background_Images Small' src='/assets/sustainability/sustainability_background9.jpeg' height='200em' width='260em'/>
        <img alt='' className='background_Images Small' src='/assets/sustainability/sustainability_background10.jpeg' height='200em' width='260em'/>
      </div>
      <div className='newSection'>
        <h2>Sustainability Certification</h2>
        <p className='text'>
          We want to be as sustainable as possible, both environmentally and socially, which we do by reducing our ecological footprint and promoting diversity and equity. Therefore, we apply for <b id='sustainability-color'>Hållbart Evenemang</b> (Eng: Sustainable Event). Previous years we have been eco-labeled with <b id='sustainability-color'>Håll Sverige Rent</b> (Eng: Keep Sweden Tidy).
          </p>
        <form id='submitForm' target='blank' method='get' action='https://hallbartevenemang.se/'>
           <button type='submit'>Check out their website</button>
        </form>
      </div>
      <img alt='' className='background_Images' src='/assets/sustainability/sustainability_background5.jpeg' height='100em'/>

      <div className='newSection'>
          <h2>Sustainability Day</h2>
          <p className='text'>We will have a Sustainability Day during the event weeks. This year it will be combined with Innovation Night. <b>More info will be available soon!</b></p>
      </div>

      <div className='newSection'>
      <SustainabilityInterviews/>
      </div>
      <img alt='' className='background_Images' src='/assets/sustainability/sustainability_background3.jpeg'/>
      <div className='newSection'>
        <h2>Help us become more sustainable</h2>
        <p className='text'>Do you have any ideas or suggestions to help us work more sustainable?  We would love to hear them!</p>
        <form id='submitForm' method='get' action='/contact/'>
           <button type='submit'>Contact us</button>
        </form>
      </div>
    </div>

    );
}

export default Sustainability;
