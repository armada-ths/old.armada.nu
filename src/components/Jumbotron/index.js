import React, {PropTypes} from 'react';
import "./jumbotron.scss";

const Jumbotron =  (props) => {
    let image = props.image ? (<div className="header-image">
                <img alt="" src={props.image}/> </div>) : null;
    let video = props.video ? (<video autoPlay="true" loop muted>
            <source src={props.video} type="video/mp4"/> </video>) : null;

    let video_or_image = video ? video : image;

    return (
        <div id={"header"}>
            <div className="logo-container">
                    <img src={require('../../../content/assets/images/header-images/logo.png')} />
                    <p className="logo-date"> 21-22 NOV</p>
            </div>
            {video_or_image ? video_or_image : <div className="header-image"></div>}
            
        </div>
    );
}

Jumbotron.propTypes = {
    image: PropTypes.string,
    video: PropTypes.string,
};

export default Jumbotron;



