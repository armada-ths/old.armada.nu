import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import './index.scss'

const Banner = ({ location, link, children }) => {
    return (
        location !== link && (
            <Link to={link}>
                <div className='banner'>{children}</div>
            </Link>
        )
    )
}

Banner.propTypes = {
    location: PropTypes.string,
    link: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}

export default Banner
