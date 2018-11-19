import React from "react"

import "./contact.scss";
import "../../styles/global.scss"


const Contacts =  () => {

    return ( <div><h1 className="helmet">Contact</h1>
			<div className="contact-body">
                    <section className="contact">
                      <div className="content-wrapper row">

                        <div className="contact-info">
                          <h1 className="sub-heading darkText">LOVISA WESTERLUND</h1>
                          <h2 className="sub-heading">PROJECT MANAGER</h2>
                          <p><a className="darkText" href="mailto:armada@ths.kth.se" target="_top">armada@ths.kth.se</a> | <a className="darkText" href="tel:+46707909844">+4670-790 98 44</a></p>
                        </div>

                      </div>
                      <div className="content-wrapper row">
                        <div className="contact-info">
                          <h1 className="sub-heading darkText">DANIEL GRÖTTHEIM</h1>
                          <h2 className="sub-heading ">HEAD OF BUSINESS RELATIONS AND EVENTS</h2>
                          <p><a className="darkText" href="mailto:daniel.grottheim@armada.nu" target="_top">daniel.grottheim@armada.nu</a> | <a className="darkText" href="tel:+46761355991">+4676-135 59 91</a></p>
                        </div>
                      </div>
                      <div className="content-wrapper row">

                        <div className="contact-info">
                          <h1 className="sub-heading darkText">JACOB JOHNSSON</h1>
                          <h2 className="sub-heading ">HEAD OF SALES</h2>
                          <p><a className="darkText" href="mailto:jacob.johnsson@armada.nu" target="_top">jacob.johnsson@armada.nu</a> | <a className="darkText" href="tel:+46761482018">+4676-148 20 18</a></p>
                        </div>

                      </div>
                      <div className="content-wrapper row">

                        <div className="contact-info">
                          <h1 className="sub-heading darkText">FILIP MATZ</h1>
                          <h2 className="sub-heading ">HEAD OF SALES</h2>
                          <p><a className="darkText" href="mailto:filip.matz@armada.nu" target="_top">filip.matz@armada.nu</a> | <a className="darkText" href="tel:+46705371055">+4670-537 10 55</a></p>
                        </div>

                      </div>
                      <div className="content-wrapper row">

                        <div className="contact-info">
                          <h1 className="sub-heading darkText">ANNA ZAKIPOUR</h1>
                          <h2 className="sub-heading">HEAD OF SALES</h2>
                          <p><a className="darkText" href="mailto:anna.zakipour@armada.nu" target="_top">anna.zakipour@armada.nu</a> | <a  className="darkText" href="tel:+46735820222">+4673-582 02 22</a></p>
                        </div>

                      </div>
                    </section>
                </div>
								</div>
    );

}

export default Contacts;
