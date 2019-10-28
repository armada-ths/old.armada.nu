import React from "react";
import Loading from "../Loading"
import axios from "axios";
import  "../Card/Card.scss"
import MatchingQuestion from "./MatchingQuestion"; 
import MatchingWelcomeScreen from "./MatchingWelcomeScreen"

// const ais = 'https://ais.armada.nu/';

import "./MatchingSection.scss";

class MatchingSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options : [],
            exhibitors: [],
            industries: [],
            values: [],
            competences: [],
            employments: [],
            locations: [],
            benefits: [],
            selectOptions : null,
            hide: false,
            isLoading: false,
            started: false,
            optionIndex: 0,
            currentOption: {},
            weights: [5,5,5,5,5]
        };
    }

    componentDidMount() {
        axios.get('https://ais.armada.nu/api/matching/choices')  // fetch data witt promise (then) and res(ult)
        .then((res)  => {
          const optionsRes = res.data.options;  // create variable and store result within parameter data
          this.setState({ 
            options: optionsRes,
            currentOption: optionsRes[0] 
          });  // component saves its own data
        }).catch(() => {
          alert("Failed to get data. Try again later.");
        });
    }

    postData (url, data) {
        var bindedthis = this;
        fetch('https://cors-anywhere.herokuapp.com/' + url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(function (a) {
            return a.json()
        }).then(function (json) {
            bindedthis.setState({exhibitors: json})
        }).catch(function() {
            alert("Matching failed! Please try again later");
            bindedthis.matchagain();
        });
    }

    submit() {
        if (this.state.industries.length == 0 || this.state.values.length == 0 || this.state.employments.length == 0 || this.state.locations.length == 0 || this.state.benefits.length == 0) {
            alert("You have to select at least one option for every question!")
        }
        else {

        this.postData('https://ais.armada.nu/api/matching/', {
            "industries": this.state.industries,
            "values": this.state.values,
            "employments": this.state.employments,
            "locations": this.state.locations,
            "benefits": this.state.benefits
          })
        this.setState({hide: true})
        }
    }

    carousel(option){
      return (
          <div className="matching-question-card" >
            <MatchingQuestion question={option.question} nextDisabled={this.state.optionIndex === this.state.options.length-1} prevDisabled={this.state.optionIndex === 0} prevClick={this.prevOption} nextClick={this.nextOption} answers={option.answers} handleChange={this.handleChange(this.state.optionIndex)} preSelected={this.getResult(this.state.optionIndex)} onWeightChange={this.onWeightChange} index={this.state.optionIndex} />
            {/* sliderValue={this.state.weights[this.state.optionIndex]} */}
          </div>
        )
    }


    
    prevOption = () => {
      const prevIndex = this.state.optionIndex-1;
      this.setState({
        currentOption: this.state.options[prevIndex],
        optionIndex: prevIndex
      })
    }

    nextOption = () => {
      this.setState({hide: true})
      const nextIndex = this.state.optionIndex+1;
      this.setState({
        currentOption: this.state.options[nextIndex],
        optionIndex: nextIndex,
        hide: false
      })
    }

    onWeightChange = (index, value) => {
      let temp = this.state.weights;
      temp[index] = value-0; // Make sure it's a number
      this.setState({weights: temp})
      /* eslint-disable no-console */
      console.log(this.state.weights);
      /* eslint-enable no-console */
    }

      handleChange = (index) => {
        /* eslint-disable no-console */
        console.log(index);
        
        /* eslint-enable no-console */
        var bindedthis = this;
        return function(value) {
            /* eslint-disable no-console */
            console.log('value ', value);
            /* eslint-enable no-console */
            var result = value.map(value => value.id);
            result = result.map(Number);
            if (index == 0) {bindedthis.setState({values: value})}
            if (index == 1) {bindedthis.setState({industries: value})}
            if (index == 2) {bindedthis.setState({competences: value})}
            if (index == 3) {bindedthis.setState({employments: value})}
            if (index == 4) {bindedthis.setState({locations: value})}
            /* eslint-disable no-console */
            console.log(result);
            /* eslint-enable no-console */
        }
      }

      handleClick = () => {
        /* eslint-disable no-console */
        console.log('clicked');
        /* eslint-enable no-console */
        this.setState({started: !this.state.started})
      }

      getResult = (index) => {
        let res = [];
        switch (index) {
          case 0:
            res = this.state.values;
            break;
          case 1:
            res = this.state.industries;
            break;
          case 2:
            res = this.state.competences;
            break;
          case 3:
            res = this.state.employments;
            break;
          case 4:
            res = this.state.locations;
            break;
        }
        return res;
      }

    render() {
        return (
					<div>
            
            <div className="questions">
            {this.state.started === true && this.state.isLoading === false ? this.carousel(this.state.currentOption) :  <MatchingWelcomeScreen handleClick={this.handleClick}/>} 
            {this.state.isLoading ? <Loading/> : null}
            {/* {this.state.exhibitors.length ? <div className="trycontainer"><button className="match" onClick={() => this.matchagain()}>Try matching again!</button></div> : null} */}

            </div>
            
					</div>
        );
    }

}

export default MatchingSection;
