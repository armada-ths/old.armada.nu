import React from "react"

import "./contact.scss";
import "../../styles/global.scss"


const Contacts =  () => {

    return ( <div className="contact-body">
                    <section className="contact">
                      <div className="content-wrapper row">

                        <div className="contact-info">
                          <h1 className="sub-heading name">AXEL INGO</h1>
                          <h2 className="sub-heading light">PROJECT MANAGER</h2>
                          <p><a href="mailto:armada@ths.kth.se" target="_top">armada@ths.kth.se</a></p>
                          <p><a href="tel:+46707909844">+4670-790 98 44</a></p>
                        </div>
                        <div className="contact-info">
                          <h1 className="sub-heading name">FREDRIK MAGNUSSON</h1>
                          <h2 className="sub-heading light">HEAD OF BUSINESS RELATIONS AND EVENTS</h2>
                          <p><a href="mailto:fredrik.magnusson@armada.nu" target="_top">fredrik.magnusson@armada.nu</a></p>
                          <p><a href="tel:+46702686329">+4670-268 63 29</a></p>
                        </div>
                        <div className="contact-info">
                          <h1 className="sub-heading name">CHARLOTTE HEDLUND</h1>
                          <h2 className="sub-heading light">HEAD OF HR</h2>
                          <p><a href="mailto:charlotte.hedlund@armada.nu" target="_top">charlotte.hedlund@armada.nu</a></p>
                          <p><a href="tel:+46739504629">+4673-950 46 29</a></p>
                        </div>
                      </div>
                    </section>
                </div>
    );

}

export default Contacts;
