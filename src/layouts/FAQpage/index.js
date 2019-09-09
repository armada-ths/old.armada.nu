import React from "react"
import FAQContainer from "../../components/FAQ"



import "./index.scss"

class FAQpage extends React.Component {
  constructor(props){
      super(props)
  }

  componentDidMount() {
    document.body.classList.add('header-invisible')
  }

  componentWillUnmount() {
    document.body.classList.remove('header-invisible')
  }

  render(){
    return (
      <div >
        <div >
            <FAQContainer />
        </div>
      </div>
    )
  }
}

// FAQpage.propTypes = {
//   head: PropTypes.object.isRequired,
// }

export default FAQpage
