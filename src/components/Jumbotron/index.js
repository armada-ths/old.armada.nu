import React from "react"
import PropTypes from "prop-types"
import "./jumbotron.scss";

var smoothScroll = {
    timer: null,

    stop: function () {
        clearTimeout(this.timer);
    },

    changeColor: function(){
        document.getElementById("scrollarrowIMG").src="/assets/pil_melon.png";

    },
    changeBack: function(){
        document.getElementById("scrollarrowIMG").src="/assets/pil.png";

    },



    scrollTo: function (id, callback) {
        var settings = {
            duration: 1000,
            easing: {
                outQuint: function (x, t, b, c, d) {
                    return (c*((t=t/d-1)*t*t*t*t + 1) + b)*1.9;
                }
            }
        };
        var percentage;
        var startTime;
        var node = document.getElementById(id);
        var nodeTop = node.offsetTop;
        var nodeHeight = node.offsetHeight;
        var body = document.body;
        var html = document.documentElement;
        var height = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );
        var windowHeight = window.innerHeight
        var offset = window.pageYOffset;
        var delta = nodeTop - offset;
        var bottomScrollableY = height - windowHeight;
        var targetY = (bottomScrollableY < delta) ?
            bottomScrollableY - (height - nodeTop - nodeHeight + offset):
            delta;

        startTime = Date.now();
        percentage = 0;

        if (this.timer) {
            clearInterval(this.timer);
        }

        function step () {
            var yScroll;
            var elapsed = Date.now() - startTime;

            if (elapsed > settings.duration) {
                clearTimeout(this.timer);
            }

            percentage = elapsed / settings.duration;

            if (percentage > 1) {
                clearTimeout(this.timer);

                if (callback) {
                    callback();
                }
            } else {
                yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
                window.scrollTo(0, yScroll);
                this.timer = setTimeout(step, 10);
            }
        }

        this.timer = setTimeout(step, 10);
    }
};


class Jumbotron extends React.Component {

    mouseEnter(){
        smoothScroll.changeColor();
    }
    mouseOut(){
        smoothScroll.changeBack();
    }

    mouseDown(){
        smoothScroll.scrollTo("scrollarrow");
    }

    render() {


    /*
     * The date here is hardcoded because there is no api that gives the dates as answer.
     **/
    return (

				<div id={"header"}>
						<div className="logo-container fixed">
										<img src={require('../../../content/assets/images/header-images/logo.png')} />
										<p className="logo-date">THE FAIR 19-20 NOV 2019</p>

												<div id="scrollarrow" className="scroll-arrow" onMouseDown={this.mouseDown} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseOut}>
														<img id="scrollarrowIMG" src="/assets/pil.png" alt="\/"/>
												</div>

						</div>
						<div className="header-home">
						<video autoPlay="true" loop muted>
										<source src={this.props.video} type="video/mp4"/>
										</video>
						</div>

				</div>

    );
}
}

Jumbotron.propTypes = {
    image: PropTypes.string,
    video: PropTypes.string,
    header_class: PropTypes.string,
};

export default Jumbotron;
