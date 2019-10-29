import React from "react";
import Select from 'react-select'
import Loading from "../Loading"
import Text from "../Text"
import  "../Card/Card.scss"

const ais = 'https://ais.armada.nu/';

import "./MatchingSection.scss";

class MatchingSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options : [{question: "What industries are you interested in?", answers :[{ value: 'Retail', label: 'Retail', id: "1" },
            { value: 'Graphic Productions', label: 'Graphic Productions', id: "2" },
            { value: 'Recruitment', label: 'Recruitment', id: "3" }, { value: 'Architecture', label: 'Architecture', id: "4" }, { value: 'Investment', label: 'Investment', id: "5" }, { value: 'Environmental Sector', label: 'Environmental Sector', id: "6" }, { value: 'Pedagogy', label: 'Pedagogy', id: "7" }, { value: 'Web Development', label: 'Web Development', id: "8" }, { value: 'Solid Mechanics', label: 'Solid Mechanics', id: "9" }, { value: 'Simulation Technology', label: 'Simulation Technology', id: "10" }, { value: 'Pharmacy', label: 'Pharmacy', id: "11" }, { value: 'Nuclear Power', label: 'Nuclear Power', id: "12" }, { value: 'Fluid Mechanics', label: 'Fluid Mechanics', id: "13" }, { value: 'Wood-Processing Industry', label: 'Wood-Processing Industry', id: "14" }, { value: 'Medical Technology', label: 'Medical Technology', id: "15" }, { value: 'Media Technology', label: 'Media Technology', id: "16" }, { value: 'Marine Systems', label: 'Marine Systems', id: "17" }, { value: 'Manufacturing Industry', label: 'Manufacturing Industry', id: "18" }, { value: 'Management Consulting', label: 'Management Consulting', id: "19" }, { value: 'Management', label: 'Management', id: "20" }, { value: 'Insurance', label: 'Insurance', id: "21" }, { value: 'Finance & Consultancy', label: 'Finance & Consultancy', id: "22" }, { value: 'Construction', label: 'Construction', id: "23" }, { value: 'Aerospace', label: 'Aerospace', id: "24" }, { value: 'Telecommunication', label: 'Telecommunication', id: "25" }, { value: 'Electronics', label: 'Electronics', id: "26" }, { value: 'Material Development', label: 'Material Development', id: "27" }, { value: 'Industry', label: 'Industry', id: "28" }, { value: 'Energy Technology', label: 'Energy Technology', id: "29" }, { value: 'Research', label: 'Research', id: "30" }, { value: 'Systems Development', label: 'Systems Development', id: "31" }, { value: 'Property & Infrastructure', label: 'Property & Infrastructure', id: "32" }, { value: 'Computer Science & IT', label: 'Computer Science & IT', id: "33" }, { value: 'Technical Consulting', label: 'Technical Consulting', id: "34" }, { value: 'Product Development', label: 'Product Development', id: "35" }, { value: 'Interaction Design', label: 'Interaction Design', id: "36" }, { value: 'Industry Design', label: 'Industry Design', id: "37" }]},
            {question: "What values are important to you?", answers :[{ value: 'Entrepreneurship', label: 'Entrepreneurship', id: "1" },
            { value: 'Active work for gender equality', label: 'Active work for gender equality', id: "2" },
            { value: 'Diversity and inclusion', label: 'Diversity and inclusion', id: "3" },
            { value: 'International environment and possibilities', label: 'International environment and possibilities', id: "4" },
            { value: 'Performance and results', label: 'Performance and results', id: "5" },
            { value: 'Environmental liability', label: 'Environmental liability', id: "6" },
            { value: 'Sustainability', label: 'Sustainability', id: "7" },
            { value: 'Organisational transparency', label: 'Organisational transparency', id: "8" },
            { value: 'Innovation', label: 'Innovation', id: "9" },
            { value: 'Creative and dynamic', label: 'Creative and dynamic', id: "10" },
            { value: 'Teamwork', label: 'Teamwork', id: "11" },
            { value: 'Personal development', label: 'Personal development', id: "12" },
            { value: 'Corporate social responsibility (CSR)', label: 'Corporate social responsibility (CSR)', id: "13" }]},{question: "What kind of employments are you interested in?", answers :[{ value: 'Trainee', label: 'Trainee', id: "1" },
            { value: 'Internship', label: 'Internship', id: "2" },
            { value: 'Summer job', label: 'Summer job', id: "3" }, { value: 'Part-time job', label: 'Part-time job', id: "4" },
            { value: 'Master thesis', label: 'Master thesis', id: "5" },
            { value: 'Bachelor thesis', label: 'Bachelor thesis', id: "6" }, { value: 'Full time job', label: 'Full time job', id: "7" }]},
            {question: "Where in the world?", answers :[{ value: 'Sweden – Norrland', label: 'Sweden – Norrland', id: "1" },
            { value: 'Sweden – Svealand', label: 'Sweden – Svealand', id: "2" },
            { value: 'Sweden – Götaland', label: 'Sweden – Götaland', id: "3" }, { value: 'World – Europe', label: 'World – Europe', id: "4" },
            { value: 'World – Asia', label: 'World – Asia', id: "5" },
            { value: 'World – North America', label: 'World – North America', id: "6" }, { value: 'World – South America', label: 'World – South America', id: "7" }, { value: 'World – Oceania', label: 'World – Oceania', id: "8" }, { value: 'World – Africa', label: 'World – Africa', id: "9" }]},
            {question: "What benefits are important to you?", answers :[{ value: 'Professional development (education)', label: 'Professional development (education)', id: "1" },
            { value: 'Extra long vacation', label: 'Extra long vacation', id: "2" },
            { value: 'Gym', label: 'Gym', id: "3" }, { value: 'Free Food', label: 'Free Food', id: "4" },
            { value: 'Car', label: 'Car', id: "5" },
            { value: 'Phone', label: 'Phone', id: "6" }, { value: 'Computer', label: 'Computer', id: "7" }, { value: 'Pay for overtime work', label: 'Pay for overtime work', id: "8" }, { value: 'Bonus system', label: 'Bonus system', id: "9" }, { value: 'Possibility to work in other countries', label: 'Possibility to work in other countries', id: "10" }, { value: 'Ability to work from home', label: 'Ability to work from home', id: "11" }, { value: 'Flexible work hours', label: 'Flexible work hours', id: "12" }]}],
            match_result: null,
            show_more: false,
            industries: [],
            values: [],
            employments: [],
            locations: [],
            benefits: [],
            selectOptions : null,
            hide: false,
            isLoading: false
        };
    }

    componentDidMount() {
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
        if (this.state.industries.length == 0 || this.state.values.length == 0 || this.state.employments.length == 0 || this.state.locations.length == 0 || this.state.benefits.length == 0) {
        //    alert("You have to select at least one option for every question!")
        //}
        //else {

        this.postData('https://ais.armada.nu/api/matching/',{
          "industries": {"answer": [1], "weight": 1},
          "values": {"answer": [], "weight": 1},
          "employments": {"answer": [1, 2, 3, 4], "weight": 0.5},
          "locations": {"answer": [4, 5, 6], "weight": 0.3},
          "competences": {"answer": [33, 34, 35], "weight": 1},
          "cities": {"answer": "Stockholm, Göteborg", "weight": 0},
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
        this.setState({benefits: []})
        this.setState({match_result: null})
    }

    buildOptions(array) {
        var listitems = []
        for (let i = 0; i < array.length; i++) {
          listitems.push(<div><p>{array[i].question}</p><Select
            placeholder="Select option(s)..."
            closeMenuOnSelect={false}
            isMulti
            isSearchable
            name="Hej"
            options = {array[i].answers}
            onChange={this.handleChange(i)}
            className="basic-multi-select"
            classNamePrefix="select"
        />
        </div>);
        }
        return listitems;
      }

      createStars(similarity){
        var rating = similarity * 100;

        return(
          <div className="star-ratings-css">
            <div className="star-ratings-css-top" style={{width:rating+'%'}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
          </div>

        );
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
            if (index == 0) {bindedthis.setState({industries: result})}
            if (index == 1) {bindedthis.setState({values: result})}
            if (index == 2) {bindedthis.setState({employments: result})}
            if (index == 3) {bindedthis.setState({locations: result})}
            if (index == 4) {bindedthis.setState({benefits: result})}
        }
      }
    
    render() {
        return (
					<div>
						<h1 className="helmet">Matching</h1>
						<p>Try out Armada's brand new <span className="bold">matching functionality</span> that matches </p>
						<p>students with companies through their shared values!</p>
            <div className="questions">
            {!this.state.hide ? <div className="optioncontainer">{this.buildOptions(this.state.options)}
                <button className="match" onClick={() => this.submit()}>Get my match!</button></div> : null}
            {this.state.hide ? <div className="matchgrid">{this.presentMatches()}</div> : null}
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
