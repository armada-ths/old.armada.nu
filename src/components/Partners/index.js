import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './partners.scss';
import Loading from '../Loading';

const Partners = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        axios.get('https://ais.armada.nu/api/partners')
          .then((res)  => {
            setPartners(res.data);
            setIsLoading(false);
          });
    })

    return (isLoading ? <Loading/> : partners.length > 0 ? <div className='partners'>
             <h2>Partners</h2>
            <div className='partners-table'>
                {partners.map(partner =>
                    <a  key={partner.id} href={partner.link_url}>
                        <img src={partner.logo_url} alt={partner.name}/>
                    </a>
                )}
            </div>
        </div> : <></> );

}

export default Partners;
