import React from "react"
// import PropTypes from "prop-types"
import Page from "../Page"
import FAQHeader from "../../components/FAQ/FAQHeader"



import "./index.scss"

const FAQpage = (props) => {
  return (
      <div >
        <div >
            {/* <Page { ...props }  /> */}
            <FAQHeader />
        </div>
      </div>
  )
}

// FAQpage.propTypes = {
//   head: PropTypes.object.isRequired,
// }

export default FAQpage
