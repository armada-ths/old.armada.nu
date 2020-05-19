import React from "react"
import PropTypes from "prop-types"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PageSection from "../../components/PageSection"

import "./pagesections.scss"

const PageSections = (props, { collection }) => {

  let sections = enhanceCollection(collection, {
    filter: { layout: "PageSection" },
    sort: "priority",
  });
  
  let introStart = 0;
  let introEnd = 1;
  let beforeStart = 1;
  let beforeEnd = 9;
  let duringStart = 9;
  let duringEnd = 17;
  let afterStart = 17;
  let afterEnd = 21;
  let contactStart = 21;
  let contactEnd = 24;
  
  let introSection = sections.slice(introStart,introEnd).map( (section, index) => (<PageSection {...section} key={index} right={index%2==0}/>) );
  let beforeSections = sections.slice(beforeStart,beforeEnd).map( (section, index) => (<PageSection {...section} key={index} right={index%2==0}/>) );
  let duringSections = sections.slice(duringStart,duringEnd).map( (section, index) => (<PageSection {...section} key={index} right={index%2==0}/>) );
  let afterSections = sections.slice(afterStart,afterEnd).map( (section, index) => (<PageSection {...section} key={index} right={index%2==0}/>) );
  let contactSections = sections.slice(contactStart,contactEnd).map( (section, index) => (<PageSection {...section} key={index} right={index%2==0}/>) );
    
    if (!isMobile()) {
    return (
        <div id="exhibitor_info">
            <div id="intro_section">
                {introSection}
            </div>
            <script src="index.js"></script>
            <div className="outer_sections_div">
                <div className="title_bar">
                    <h1 id="before_sections_title" className="sectionsTitle sections_title_button" onClick={showOrHideBefore}>Before the fair</h1>
                </div>
                <div id="before_sections">
                    {beforeSections}
                </div>
            </div>
            <div className="outer_sections_div">
                <div className="title_bar">
                    <h1 id="during_sections_title" className="sectionsTitle  sections_title_button" onClick={showOrHideDuring}>During the fair</h1>
                </div>
                <div id="during_sections">
                    {duringSections}
                </div>
            </div>
            <div className="outer_sections_div">
                <div className="title_bar">
                    <h1 id="after_sections_title" className="sectionsTitle  sections_title_button" onClick={showOrHideAfter}>After the fair</h1>
                </div>
                <div id="after_sections">
                    {afterSections}
                </div>
            </div>
            <div className="outer_sections_div">
                <div className="title_bar">
                    <h1 id="contact_sections_title" className="sectionsTitle  sections_title_button" onClick={showOrHideContact}>Questions/Contact</h1>
                </div>
                <div id="contact_sections">
                    {contactSections}
                </div>
            </div>
        </div>
    )
    }else{
         return (
        <div id="exhibitor_info">
            <div id="intro_section_mobile">
                {introSection}
            </div>
            <script src="index.js"></script>
            <div className="outer_sections_div_mobile">
                <div className="title_bar">
                    <h1 id="before_sections_title" className="sectionsTitle sections_title_button" onClick={showOrHideBefore}>Before the fair</h1>
                </div>
                <div id="before_sections">
                    {beforeSections}
                </div>
            </div>
            <div className="outer_sections_div_mobile">
                <div className="title_bar">
                    <h1 id="during_sections_title" className="sectionsTitle  sections_title_button" onClick={showOrHideDuring}>During the fair</h1>
                </div>
                <div id="during_sections">
                    {duringSections}
                </div>
            </div>
            <div className="outer_sections_div_mobile">
                <div className="title_bar">
                    <h1 id="after_sections_title" className="sectionsTitle  sections_title_button" onClick={showOrHideAfter}>After the fair</h1>
                </div>
                <div id="after_sections">
                    {afterSections}
                </div>
            </div>
            <div className="outer_sections_div_mobile">
                <div className="title_bar">
                    <h1 id="contact_sections_title" className="sectionsTitle  sections_title_button" onClick={showOrHideContact}>Contact</h1>
                </div>
                <div id="contact_sections">
                    {contactSections}
                </div>
            </div>
        </div>
    )
    }
}
PageSections.contextTypes = {
  collection: PropTypes.array.isRequired,
}

function showOrHideBefore() {
    showOrHideSection("before_sections");
}

function showOrHideDuring() {
   showOrHideSection("during_sections")
}

function showOrHideAfter() {
    showOrHideSection("after_sections");
}

function showOrHideContact() {
    showOrHideSection("contact_sections");
}

function showOrHideSection(sectionName) {
    var elem = document.getElementById(sectionName);
    var titleElem = document.getElementById(sectionName + "_title");
    if (elem.style.display != "block") {
        elem.style.display = "block"; // If the section is currently hidden, show it
        titleElem.classList.remove("sections_title_button");
    } else {
        elem.style.display = "none"; // If the section is currently shown, hide it
        titleElem.classList.add("sections_title_button");
    }
}

function isMobile() {
        if (global.window != undefined) {
            return window.innerWidth < 470 ? true : false
        } else {
            return false
        }
    }



export default PageSections
