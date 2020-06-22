import React from 'react'
import PropTypes from 'prop-types'
import './page.scss'

const Page = (props) => {
  return (<div className='page-container'>
        {props.header}
        <div
            dangerouslySetInnerHTML={{ __html: props.html }}
        />
        {props.children}
        {props.footer}
    </div>)
}

Page.propTypes = {
    header: PropTypes.element,
    html: PropTypes.element.isRequired,
    children: PropTypes.element,
    footer: PropTypes.element,
}

export default Page;
