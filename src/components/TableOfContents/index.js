import React from "react";
import "./table-of-contents.scss";
//import PropTypes from "prop-types";

class TableOfContents extends React.Component {

    render() {
        return(
            <div className="toc-container">
              <h2 className="toc-header">Table of contents</h2>
              <h3 className="toc-element"><a href="#general-info">General Info</a></h3>
              <h3 className="toc-element"><a href="#before-the-fair">Before the fair</a></h3>
              <h3 className="toc-element"><a href="#after-the-fair">After the fair</a></h3>
              <h3 className="toc-element"><a href="#contact-info">Contact Info</a></h3>
            </div>
        );
    }
}

export default TableOfContents