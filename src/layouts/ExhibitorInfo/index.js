import React, {PropTypes} from "react"

import PageSectionsLayout from "../PageSectionsLayout"
import Contacts from "../../components/Contacts"


const ExhibitorInfo = (props) => {

  return (
    
    <div>
    <PageSectionsLayout {...props} pagetype="Exhibitorinfo"/>
    
    <Contacts />
     </div>
  )
}

ExhibitorInfo.propTypes = {
    head: PropTypes.object.isRequired,
}

export default ExhibitorInfo

