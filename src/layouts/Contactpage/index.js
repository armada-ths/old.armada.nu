import React from "react";
import Loadable from "react-loadable";
import Contacts from "../../components/Contacts";

const Contactpage = () => {

  const ContactMap = Loadable({ loader: () => import("../../components/ContactMap"), loading() { return <div></div> }});

  return (
      <div>
        <Contacts />
        <ContactMap />
      </div>
  )
}

export default Contactpage
