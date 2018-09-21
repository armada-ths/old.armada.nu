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
                      <div className="content-wrapper row">
                        <div className="contact-info">
                          <h1 className="sub-heading name">DANIEL GRÖTTHEIM</h1>
                          <h2 className="sub-heading light">HEAD OF BUSINESS RELATIONS AND EVENTS</h2>
                          <p><a href="mailto:daniel.grottheim@armada.nu" target="_top">daniel.grottheim@armada.nu</a></p>
                          <p><a href="tel:+46761355991">+4676-135 59 91</a></p>
                        </div>
                      </div>
                      <div className="content-wrapper row">

                        <div className="contact-info">
                          <h1 className="sub-heading name">JACOB JOHNSSON</h1>
                          <h2 className="sub-heading light">HEAD OF SALES</h2>
                          <p><a href="mailto:jacob.johnsson@armada.nu" target="_top">jacob.johnsson@armada.nu</a></p>
                          <p><a href="tel:+46761482018">+4676-148 20 18</a></p>
                        </div>

                      </div>
                      <div className="content-wrapper row">

                        <div className="contact-info">
                          <h1 className="sub-heading name">FILIP MATZ</h1>
                          <h2 className="sub-heading light">HEAD OF SALES</h2>
                          <p><a href="mailto:filip.matz@armada.nu" target="_top">filip.matz@armada.nu</a></p>
                          <p><a href="tel:+46705371055">+4670-537 10 55</a></p>
                        </div>

                      </div>
                      <div className="content-wrapper row">

                        <div className="contact-info">
                          <h1 className="sub-heading name">ANNA ZAKIPOUR</h1>
                          <h2 className="sub-heading light">HEAD OF SALES</h2>
                          <p><a href="mailto:anna.zakipour@armada.nu" target="_top">anna.zakipour@armada.nu</a></p>
                          <p><a href="tel:+46735820222">+4673-582 02 22</a></p>
                        </div>

                      </div>
                    </section>
                </div>
    );

}

export default Contacts;
