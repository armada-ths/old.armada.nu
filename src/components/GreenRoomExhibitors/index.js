import React from 'react';
import ExhibitorList from '../../components/ExhibitorList'
import PropTypes from 'prop-types'
import './greenRoomExhibitors.scss'

// class Sustainability extends React.Component {

const GreenRoomExhibitors = (props) => {
  // let classname = props.exhibitor.location_special == "Green Room";
  return (
    <div>Hej hopp!!
      <div className='Exhibitors-container'>
        <ExhibitorList {...props} sustainabilityFilter/>
      </div>
    </div>
  )
}

GreenRoomExhibitors.propTypes = {
    head: PropTypes.object.isRequired,
}

export default GreenRoomExhibitors
