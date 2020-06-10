import React from 'react'
import PropTypes from 'prop-types'
import { Link}  from 'react-router'
import './preview.scss';

const PagePreview = (props) => {

  const pageDate = props.date ? new Date(props.date) : null
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  return (<div className={'news-item no-select'}>
      <div className='image-container' style={{ backgroundImage: 'url(' + (props.cover_wide ? props.cover_wide : props.cover_square) + ')' }}>
        <div className='news-item-datesection'>
          {`${pageDate.getDate()} ${months[pageDate.getMonth()]}`}
        </div>
        {props.category && <div className='news-item-category'>{props.category}</div>}
      </div>

      <div className='preview-content'>
        <h2>
          <Link to={props.__url}>{props.title}</Link>
        </h2>
        <p className='description'>{props.ingress ? props.ingress : props.description}</p>
      </div>
  
      <Link to={props.__url} className={'news-link'}>
          Read more
        </Link>
    </div>)
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  __filename: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  category: PropTypes.string,
  cover_wide: PropTypes.string,
  description: PropTypes.string,
  cover_square: PropTypes.string,
  archived: PropTypes.bool,
  ingress: PropTypes.string,
}

export default PagePreview
