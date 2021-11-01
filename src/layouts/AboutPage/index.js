import React from 'react'
import Timeline from '../../components/Timeline'
import PropTypes from 'prop-types'

import Page from '../../templates/page'

import './index.scss'

const Aboutpage = props => {

    console.log("props", props)

    console.log("props header", props.frontmatter.header)
    return (
        <div className='content'>
            <div className='aboutpage-container'>
                <Page {...props} />
                <Timeline />
            </div>
        </div>
    )
}




Aboutpage.propTypes = {

    body: PropTypes.string,
    frontmatter: PropTypes.shape({
        header: PropTypes.string.isRequired

    })
}

export default Aboutpage
