import React from "react";
import "./table-of-contents.scss";
import Collapsible from 'react-collapsible';

const style = {
    color: 'white',
    cursor: 'pointer',
    fontSize: '25px'
}

class TableOfContents extends React.Component {

    render() {
        return (
            <div className="toc-container">
                <h2 className="toc-header">Table of contents</h2>
                <h3 className="toc-element" style={{marginBottom: '26px'}}><a href="#general-info">General Info</a></h3>
                <h3 className="toc-element"><a href="#before-the-fair">Before the fair</a></h3>
                <Collapsible triggerStyle={style} trigger="&#xfe40;">
                    <h4 className="toc-subelement"><a href="#check-in">&#8226; Check-in</a></h4>
                    <h4 className="toc-subelement"><a href="#travel-to-the-fair">&#8226; Travel to the fair</a></h4>
                    <h4 className="toc-subelement"><a href="#transport-of-goods-to-the-fair">&#8226; Transport of goods to the fair</a></h4>
                    <h4 className="toc-subelement"><a href="#exhibition-area">&#8226; Exhibition area</a></h4>
                    <h4 className="toc-subelement"><a href="#general-rules-and-guidelines">&#8226; GENERAL RULES AND GUIDELINES</a></h4>
                    <h4 className="toc-subelement"><a href="#electricity">&#8226; Electricity</a></h4>
                    <h4 className="toc-subelement"><a href="#elevators">&#8226; Elevators</a></h4>
                </Collapsible>
                <h3 className="toc-element"><a href="#during-the-fair">During the fair</a></h3>
                <Collapsible triggerStyle={style} trigger="&#xfe40;">
                    <h4 className="toc-subelement"><a href="#service-information">&#8226; Service information</a></h4>
                    <h4 className="toc-subelement"><a href="#focus-rooms">&#8226; Focus Rooms</a></h4>
                    <h4 className="toc-subelement"><a href="#safety">&#8226; Safety</a></h4>
                    <h4 className="toc-subelement"><a href="#the-grand-banquet">&#8226; The grand banquet</a></h4>
                    <h4 className="toc-subelement"><a href="#events-during-the-fair">&#8226; Events during the fair</a></h4>
                    <h4 className="toc-subelement"><a href="#website">&#8226; Website</a></h4>
                    <h4 className="toc-subelement"><a href="#social-media">&#8226; Social Media</a></h4>
                </Collapsible>
                <h3 className="toc-element"><a href="#after-the-fair">After the fair</a></h3>
                <Collapsible triggerStyle={style} trigger="&#xfe40;">
                    <h4 className="toc-subelement"><a href="#check-out">&#8226; Check-out</a></h4>
                    <h4 className="toc-subelement"><a href="#deconstruction">&#8226; Deconstruction</a></h4>
                    <h4 className="toc-subelement"><a href="#transport-of-goods-after-the-fair">&#8226; Transport of goods after the fair</a></h4>
                    <h4 className="toc-subelement"><a href="#invoice">&#8226; Invoice</a></h4>
                </Collapsible>
            </div>
        );
    }
}

export default TableOfContents