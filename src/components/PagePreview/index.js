import React from 'react'
import { Link }  from 'gatsby'
import './preview.scss';

const PagePreview = (props) => {

  const pageDate = props.date ? new Date(props.date) : null
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];


  return (<div className={'news-item no-select'}>
      <div className='image-container' style={{ backgroundImage: 'url(' + (props.cover_wide ? props.cover_wide : props.cover_square) + ')' }}>
        { props.display_date ? <div className='news-item-datesection'>
          {`${pageDate.getDate()} ${months[pageDate.getMonth()]}`}
        </div> : <div/> }
        {props.category && <div className='news-item-category'>{props.category}</div>}
      </div>

      <div className='preview-content'>
        <h2>
          <Link to={props.slug}>{props.title}</Link>
        </h2>
        <p className='description'>{props.ingress ? props.ingress : props.description}</p>
      </div>
  
      <Link to={props.slug} className={'news-link'}>
          Read more
        </Link>
    </div>)
}
export default PagePreview
