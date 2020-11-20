import React from 'react'
import PropTypes from 'prop-types'

import Page from '../../templates/page'

import './index.scss'


import WAP from '../../../static/assets/images/banquet/WAP.mp4'
import Beer from '../../../static/assets/images/banquet/beer.jpg'
import Bruises from '../../../static/assets/images/banquet/bruises.jpg'
import Cute from '../../../static/assets/images/banquet/cute.jpg'
import Escape from '../../../static/assets/images/banquet/escape.jpg'
import Moa from '../../../static/assets/images/banquet/moa.jpg'
import Run from '../../../static/assets/images/banquet/run.jpg'
import Split from '../../../static/assets/images/banquet/split.jpg'


const Banquet = props => {

    const images = [
        Beer,
        Bruises,
        Cute,
        Escape,
        Moa,
        Run,
        Split
    ]

    return (
        <div className='content'>
            <div className='banquet-container'>
                <Page {...props} />
                <video width="320" height="240" controls>
                    <source src={WAP} type="video/mp4"/>
                    </video>
                { images.map(image => <img src={image} alt=''/>)}
            </div>
        </div>
    )
}

Banquet.propTypes = {
    head: PropTypes.object.isRequired,
}

export default Banquet
