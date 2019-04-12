import React from "react"

import "./contact.scss";
import ContactCard from "../ContactCard"
import "../../styles/global.scss"


const Contacts =  () => {

    return ( <div><h1 className="helmet">Contact</h1>
			{/* <div className="contact-body">
                    <section className="contact">
                      <div className="content-wrapper row">

                        <div className="contact-info">
                          <h1 className="sub-heading darkText">Ulrik Sköldkvist</h1>
                          <h2 className="sub-heading">PROJECT MANAGER</h2>
                          <p><a className="darkText" href="mailto:armada@ths.kth.se" target="_top">armada@ths.kth.se</a> | <a className="darkText" href="tel:+46707909844">070-790 98 44</a></p>
                        </div>
                      </div>
                    </section>
                </div> */}
                <div className="contact-list">
                <ContactCard/>
                </div>
								</div>
    );

}

export default Contacts;
