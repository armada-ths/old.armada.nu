import React from "react"
import Page from "../Page"
import Maps from "../../components/Maps"
import "./index.scss"

const Mapspage= (props) => {
  return (
    <div className="<Mapspage-container">
      <Page { ...props }/>
      <Maps {...props}/>
    </div>
  )
}

export default Mapspage
