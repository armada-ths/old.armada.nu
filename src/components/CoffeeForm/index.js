import React from "react"
import "./index.scss"
import CoffeeCat from "../CoffeeCat"


class CoffeeForm extends React.Component {

    createForm(){
      return(
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfOll2DpQLCzNlVnj-UPalANOi_R5LBYNSTbsv3TydEKU3aSw/viewform?embedded=true" width="640" height="532" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
      )
    }

    render() {
        return (
            <div id="coffee">
              <CoffeeCat/>
              {this.createForm()}
            </div>
        );
    }
}

export default CoffeeForm;
