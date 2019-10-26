import React from "react";
// import Select from 'react-select'
import Loading from "../Loading"
// import Text from "../Text"
import axios from "axios";
import  "../Card/Card.scss"
import MatchingQuestion from "./MatchingQuestion"; 
import MatchingWelcomeScreen from "./MatchingWelcomeScreen"

const ais = 'https://ais.armada.nu/';

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
            currentOption: {}
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

    matchagain() {
        this.setState({hide: false})
        this.setState({industries: []})
        this.setState({values: []})
        this.setState({employments: []})
        this.setState({locations: []})
        this.setState({benefits: []})
        this.setState({exhibitors: []})
    }

    carousel(option){
      return (
          <div className="matching-question">
            <MatchingQuestion question={option.question} prevClick={this.prevOption} nextClick={this.nextOption} answers={option.answers} handleChange={this.handleChange(this.state.optionIndex)} preSelected={this.getResult(this.state.optionIndex)} />
              
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
      const nextIndex = this.state.optionIndex+1;
      this.setState({
        currentOption: this.state.options[nextIndex],
        optionIndex: nextIndex
      })
    }

    // buildOptions(array) {
    //     var listitems = []
    //     for (let i = 0; i < array.length; i++) {
    //       listitems.push(<div><p>{array[i].question}</p><Select
    //         placeholder="Select option(s)..."
    //         closeMenuOnSelect={false}
    //         isMulti
    //         isSearchable
    //         name="Hej"
    //         options = {array[i].answers}
    //         onChange={this.handleChange(i)}
    //         className="basic-multi-select"
    //         classNamePrefix="select"
    //     />
    //     </div>);
    //     }
    //     return listitems;
    //   }

    //   createStars(thisrating){
    //     var rating = 0;
    //     if (thisrating == 0) {rating = 125}
    //     if (thisrating > 0 && thisrating <= 1.0) {rating = 100}
    //     if (thisrating > 1.0 && thisrating <= 2.0) {rating = 75}
    //     if (thisrating > 2.0 && thisrating <= 3.0) {rating = 50}
    //     if (thisrating == 3.0) {rating = 25}

    //     return(
    //       <div className="star-ratings-css">
    //         <div className="star-ratings-css-top" style={{width:rating+'%'}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
    //         <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
    //       </div>

    //     );
    //   }

    //   createJobs(i) {
    //     let array = this.state.exhibitors;
    //     array = array[i].exhibitor.employments.map(item => item.name).toString()
    //     return array
    //   }

    //   createCard(i){
    //     let array = this.state.exhibitors;
    //     var textrating = Math.round(-33.3333*(array[i].distance) + 100)
    //     var background = {
    //         backgroundImage: 'url('+ ais + array[i].exhibitor.logo_squared + ')'
    //     }

    //     if (i==0) {var dynamicclass = "corner gold"
    //     var match = "Best match"}
    //     else {dynamicclass = "corner"
    //     match = "Match " + (i+1)}

    //     return(
    //       <div className="row">
    //             <div className="example-1 card">
    //             <div className="wrapper" style={background}>
    //                 <div className={dynamicclass}>
    //                 <span className="corner-title">{match}</span>

    //                <span className="stars">{this.createStars(array[i].distance)}</span>
    //                 <span >{textrating + '% match'}</span>
    //                 </div>
    //                 <div className="data">
    //                 <div className="content">
    //                     <h1 className="title">{array[i].exhibitor.name}</h1>
    //                     <p className="textcard">{array[i].exhibitor.about}</p>
    //                     <p className="text jobs"><br/>{this.createJobs(i)}</p>
    //                 </div>
    //                 </div>
    //             </div>
    //             </div>
    //         </div>
    //     );
    //   }


    //   presentMatches() {
    //     var listitems = []
    //     let array = this.state.exhibitors;
    //     if (array.length > 0) {
    //         for (let i = 0; i < array.length; i++) {
    //         listitems.push(this.createCard(i))
    //         }
    //         return listitems;
    //     }
    //     else {return <Text/>}
    //   }

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
        const temp = this.state.options[index].answers.filter( value => {
          !res.includes(value.id)
       });
        console.log('hej');
        console.log(res);
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
