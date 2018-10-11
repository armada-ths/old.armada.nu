import React from "react"
import "./cat.scss";


class Cat extends React.Component {

    createCat(){
      return(
        <div className="main">
        <span className="stand"></span>
        <div className="cat">
         <div className="body"></div>
         <div className="head">
           <div className="ear"></div>
         <div className="ear"></div>
         </div>
         <div className="face">
          <div className="nose"></div>
         <div className="whisker-container">
           <div className="whisker"></div>
           <div className="whisker"></div>
         </div>
         <div className="whisker-container">
           <div className="whisker"></div>
           <div className="whisker"></div>
         </div>
         </div>
         <div className="tail-container">
          <div className="tail">
            <div className="tail">
              <div className="tail">
                <div className="tail">
                  <div className="tail">
                    <div className="tail">
                      <div className="tail"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>
       </div>
    </div>

      );
    }

    render() {
        return (
            <div id="test">
              {this.createCat()}
            </div>
        );
    }
}

export default Cat;
