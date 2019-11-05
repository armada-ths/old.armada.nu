import React from "react";
import Loading from "../Loading"
import axios from "axios";
import  "../Card/Card.scss"
import MatchingQuestion from "./MatchingQuestion"; 
import MatchingWelcomeScreen from "./MatchingWelcomeScreen"
import Text from '../Text'

const ais = 'https://ais.armada.nu/';

import "./MatchingSection.scss";

class MatchingSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            match_result: null,
            show_more: false,
            options : [],
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
            bindedthis.setState({match_result: json})
        }).catch(function(e) {
            alert("Matching failed! Please try again later");
            bindedthis.matchagain();
        });
    }

    submit() {
        if (this.state.industries.length == 0 && this.state.values.length == 0 && this.state.employments.length == 0 && this.state.locations.length == 0 && this.state.competences.length == 0) {
            alert("You have to select at least one option for at least one question!")
        }
        else {
          this.postData('https://ais.armada.nu/api/matching/', {
            "industries": {"answer": this.state.industries.map(i => i.id), "weight": this.state.weights[1]},
            "values": {"answer": this.state.values.map(i => i.id), "weight": this.state.weights[0]},
            "employments": {"answer": this.state.employments.map(i => i.id), "weight": this.state.weights[3]},
            "locations": {"answer": this.state.locations.map(i => i.id), "weight": this.state.weights[4]},
            "competences": {"answer": this.state.competences.map(i => i.id), "weight": this.state.weights[2]},
            "cities": {"answer": "Stockholm", "weight": 0},
            "response_size": 4
          })
          this.setState({hide: true})
        }
    }

    matchagain() {
        this.setState({hide: false, show_more: false})
        this.setState({industries: []})
        this.setState({values: []})
        this.setState({employments: []})
        this.setState({locations: []})
        this.setState({competences: []})
        this.setState({match_result: null})
        this.setState({
          optionIndex:0,
          weights: [5, 5, 5, 5, 5],
          currentOption: this.state.options[0],
        })
    }

      createStars(similarity){
        var rating = similarity * 100;

        return(
          <div className="star-ratings-css">
            <div className="star-ratings-css-top" style={{width:rating+'%'}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
          </div>
        )
      }

    carousel(option){
      return (
          <div className="matching-question-card" >
            <MatchingQuestion onSubmit={() => this.submit()} question={option.question} nextDisabled={this.state.optionIndex === this.state.options.length - 1} prevDisabled={this.state.optionIndex === 0} prevClick={this.prevOption} nextClick={this.nextOption} answers={option.answers} handleChange={this.handleChange(this.state.optionIndex)} preSelected={this.getResult(this.state.optionIndex)} onWeightChange={this.onWeightChange} index={this.state.optionIndex} />
            {/* sliderValue={this.state.weights[this.state.optionIndex]} */}
          </div>
        )
    }

        
      createJobs(exhibitor_id) {
        let exhibitor = this.state.match_result.exhibitors[exhibitor_id];
        let array = exhibitor.employments.map(item => item.name)
        return array.join(", ")
      }

      createCard(result, best){
        let exhibitor_id = result.exhibitor_id;
        let exhibitor = this.state.match_result.exhibitors[exhibitor_id];
        //var textrating = Math.round(best[i].similarity*100);
        var background = {
            backgroundImage: 'url('+ ais + exhibitor.logo_squared + ')'
        }

        if (best) {
          var dynamicclass = "corner gold"
          var match = "Best"
        }
        else {
          dynamicclass = "corner"
          match = "Match"
        }

        return (
          <div className="row">
            <div className="example-1 card card-hover-disabled">
              <div className="wrapper" style={background}>
                <div className={dynamicclass}>
                  <span className="corner-title">{match}</span>

                  <span className="stars">{this.createStars(result.similarity)}</span>
                  {/* <span >{textrating + '% match'}</span> */}
                </div>
              </div>
              <div className="data">
                <div className="content">
                  <div className="matching-details">
                    {this.presentMatchDetails(exhibitor_id)}
                  </div>
                  <h1 className="title">{exhibitor.name}</h1>
                  <p className="textcard">{exhibitor.about}</p>
                  <p className="text jobs"><br />{this.createJobs(exhibitor_id)}</p>
                </div>
              </div>
            </div>
          </div>
        );
      }

      presentMatchDetails(exhibitor_id) {
        var categories = [
          "competences", "industries", "employments", "values", "locations" //, "cities"
        ];

        var similarities = this.state.match_result.similarities;
        var mapped = {};

        // convert similatiries object to mapped structure
        // { "category": { exhibitor_id: similarity_score, ... } }
        categories.forEach(cat => {
          mapped[cat] = {}
          similarities[cat].forEach(result => {
            mapped[cat][result.exhibitor_id] = result.similarity;
          });
        });

        var toUpper = lower => lower.charAt(0).toUpperCase() + lower.substring(1);

        var matchingCat= categories
          .filter(cat => mapped[cat][exhibitor_id]) // find similarity categories where exhibitor_id exists

        return [
          <div>
            {matchingCat.map(cat => <div>{toUpper(cat)}</div>)}
          </div>,
          <div className="score-bar-container">
            {matchingCat.map(cat => {
              var style = {
                background: '#00d790',
                width: (mapped[cat][exhibitor_id] * 100) + "%"
              }
              return (<div style={style}>match</div>)
            })}
          </div>
        ];
      }


      presentMatches() {
        var listitems = []
        if (this.state.match_result) {
            for (let i = 0; i < this.state.match_result.similarities.total.length; i++) {
                listitems.push(
                    this.createCard(this.state.match_result.similarities.total[i], i==0)
                )
            }
            return listitems;
        }
        else {return <Text/>}
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

      presentMoreMatches() {
        var listitems = [];
        if (!this.state.match_result) return null;

        var similarities = this.state.match_result.similarities;
        // skip exbihitor in total category, they are already shown
        var skip = similarities.total.map(result => result.exhibitor_id);

        for (var cat in similarities) {
          similarities[cat].forEach(result => {
            if (skip.indexOf(result.exhibitor_id) >= 0) return;

            skip.push(result.exhibitor_id);
            listitems.push(
              this.createCard(result, false)
            )
          });
        }

        return listitems;
      }

      handleChange = (index) => {
        var bindedthis = this;
        return function(value) {
        
          var result = value.map(value => value.id);
            result = result.map(Number);
            if (index == 0) {bindedthis.setState({values: value})}
            if (index == 1) {bindedthis.setState({industries: value})}
            if (index == 2) {bindedthis.setState({competences: value})}
            if (index == 3) {bindedthis.setState({employments: value})}
            if (index == 4) {bindedthis.setState({locations: value})}
        }
      }

      handleClick = () => {
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

    renderQuestions() {
      return this.state.started === true && this.state.isLoading === false ? this.carousel(this.state.currentOption) : 
        <MatchingWelcomeScreen handleClick={this.handleClick}/>;
    }

    render() {
        return (
					<div>
            
            <div className="questions">
            {this.state.hide ? this.presentMatches() : this.renderQuestions()}
            {this.state.isLoading ? <Loading/> : null}
            {this.state.match_result ? <div className="trycontainer"><button className="match" onClick={() => this.matchagain()}>Try matching again!</button></div> : null}
            <br />
            <br />
            <br />
            <br />
            {!this.state.match_result ? null :
              this.state.show_more ? 
                <div>
                  {this.presentMoreMatches()}
                  <div className="trycontainer"><button className="match" onClick={() => this.matchagain()}>Try matching again!</button></div>
                </div> : 
                <div className="trycontainer"><button className="match" onClick={() => this.setState({ show_more:true })}>Show more companies</button></div>}

            </div>
            
					</div>
        );
    }

}

export default MatchingSection;
