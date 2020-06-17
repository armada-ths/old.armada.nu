import React from "react"
import FAQContainer from "../../components/FAQ"



import "./index.scss"

class FAQPage extends React.Component {

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

export default FAQPage
