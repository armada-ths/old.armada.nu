import React from "react"
// import PropTypes from "prop-types"
import Page from "../Page"
import FAQContainer from "../../components/FAQ"



import "./index.scss"

const FAQpage = (props) => {
  return (
      <div >
        <div >
            {/* <Page { ...props }  /> */}
            <FAQContainer />
        </div>
      </div>
  )
}

// FAQpage.propTypes = {
//   head: PropTypes.object.isRequired,
// }

export default FAQpage
