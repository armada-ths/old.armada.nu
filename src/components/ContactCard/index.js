import React from "react"

import "./contactcard.scss";
import "../../styles/global.scss"


const ContactCard = () => {

  return (
    <div className="card-container 1">
    <div className="card_image"> <img src="https://i1.wp.com/www.kth.se/blogs/studentbloggen/files/2018/05/Oscar_bloggare_MG_1595-1.jpg?resize=900%2C600&ssl=1" /> </div>
    <div className="card_title">
      <div id="card_text">
        <p id="card_name">Oscar Wiigh</p>
        <p className="title-white">Head of Web Development</p>
        <img id="card_email" src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-email-2.png&r=255&g=255&b=255"></img>
      </div>
    </div>
  </div>
  );

}

export default ContactCard;
