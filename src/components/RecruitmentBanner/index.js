import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import axios from 'axios';
import './index.scss';

const RecruitmentBanner = ({location}) => {

  const [showBanner, setShowBanner] = useState(false);
  const recLink = '/recruitment';

  useEffect(() => {
    axios.get('https://ais.armada.nu/api/recruitment')
      .then((res)  => {
        setShowBanner(res.data.length > 0);
      });
  }, [])

  return (<>
    { showBanner && location !== recLink && <Link to={recLink}>
      <div className='recruitment-banner'>Recruitment open now! Apply here!</div>
    </Link> }
  </>)

}

export default RecruitmentBanner;
