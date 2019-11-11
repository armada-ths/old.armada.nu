import React from "react";
import "./table-of-contents.scss";
//import PropTypes from "prop-types";

class TableOfContents extends React.Component {

    render() {
        return(
            <div className="toc-container">
              <h2 className="toc-header">Table of contents</h2>
              <h3 className="toc-element"><a href="#fair-schedule">Fair schedule</a></h3>
              <h3 className="toc-element"><a href="#transport">Transport</a></h3>
              <h4 className="toc-subelement"><a href="#how-to-book-transport">&#8226; How to book transport</a></h4>
              <h4 className="toc-subelement"><a href="#packaging-instructions">&#8226; Packaging instructions</a></h4>
              <h4 className="toc-subelement"><a href="#exhibiting-at-both-arkad-and-ths-armada">&#8226; Exhibiting at both Arkad and THS Armada</a></h4>
            </div>
        );
    }
}

export default TableOfContents