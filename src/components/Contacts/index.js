import React from "react"

import "./contact.scss";
import "../../styles/global.scss"


const Contacts =  () => {

    return ( <div className="contact-body">
                    <section className="contact">
                      <div className="content-wrapper row">

                        <div className="contact-info">
                          <h1 className="sub-heading name">LOVISA WESTERLUND</h1>
                          <h2 className="sub-heading light">PROJECT MANAGER</h2>
                          <p><a href="mailto:armada@ths.kth.se" target="_top">armada@ths.kth.se</a></p>
                          <p><a href="tel:+46707909844">+4670-790 98 44</a></p>
                        </div>

                      </div>
                    </section>
                </div>
    );

}

export default Contacts;
