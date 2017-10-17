import React, {PropTypes} from "react"

import ExhibitorList from "../../components/ExhibitorList"


const Exhibitors = (props) => {

  return (

    <div>

    <ExhibitorList {...props}/>

     </div>
  )
}

Exhibitors.propTypes = {
    head: PropTypes.object.isRequired,
}

export default Exhibitors
