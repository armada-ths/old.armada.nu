import React, {PropTypes} from "react"

import PageSectionsLayout from "../PageSectionsLayout"
import Contacts from "../../components/Contacts"


const Exhibitorinfo = (props) => {

  return (
    
    <div>
    <PageSectionsLayout {...props}/>
    
    <Contacts />
     </div>
  )
}

Exhibitorinfo.propTypes = {
    head: PropTypes.object.isRequired,
}

export default Exhibitorinfo

