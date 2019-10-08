import React from "react";
import Select from 'react-select'
import Loading from "../Loading"
import Text from "../Text"
import axios from "axios";
import  "../Card/Card.scss"

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
            employments: [],
            locations: [],
            benefits: [],
            selectOptions : null,
            hide: false,
            isLoading: false
        };
    }

    componentDidMount() {
        axios.get('https://ais.armada.nu/api/matching/choices')  // fetch data witt promise (then) and res(ult)
        .then( (res)  => {
          let optionsRes = res.data.options;  // create variable and store result within parameter data
          // events.sort( (a, b) => a.event_start - b.event_start);

          this.setState({ options: optionsRes });  // component saves its own data
          // // Get from url path the GET params ?id=number, to know what event to display
          // if (this.props.eventId !== undefined ){
          //   this.setState({eventId: this.props.eventId, showModal:true, events});
          // }
          console.log(res.data.options);
        }).catch((err) => {
          console.log(err);
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

      createStars(thisrating){
        var rating = 0;
        if (thisrating == 0) {rating = 125}
        if (thisrating > 0 && thisrating <= 1.0) {rating = 100}
        if (thisrating > 1.0 && thisrating <= 2.0) {rating = 75}
        if (thisrating > 2.0 && thisrating <= 3.0) {rating = 50}
        if (thisrating == 3.0) {rating = 25}

        return(
          <div className="star-ratings-css">
            <div className="star-ratings-css-top" style={{width:rating+'%'}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
          </div>

        );
      }

      createJobs(i) {
        let array = this.state.exhibitors;
        array = array[i].exhibitor.employments.map(item => item.name).toString()
        return array
      }

      createCard(i){
        let array = this.state.exhibitors;
        var textrating = Math.round(-33.3333*(array[i].distance) + 100)
        var background = {
            backgroundImage: 'url('+ ais + array[i].exhibitor.logo_squared + ')'
        }

        if (i==0) {var dynamicclass = "corner gold"
        var match = "Best match"}
        else {dynamicclass = "corner"
        match = "Match " + (i+1)}

        return(
          <div className="row">
                <div className="example-1 card">
                <div className="wrapper" style={background}>
                    <div className={dynamicclass}>
                    <span className="corner-title">{match}</span>

                   <span className="stars">{this.createStars(array[i].distance)}</span>
                    <span >{textrating + '% match'}</span>
                    </div>
                    <div className="data">
                    <div className="content">
                        <h1 className="title">{array[i].exhibitor.name}</h1>
                        <p className="textcard">{array[i].exhibitor.about}</p>
                        <p className="text jobs"><br/>{this.createJobs(i)}</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
      }


      presentMatches() {
        var listitems = []
        let array = this.state.exhibitors;
        if (array.length > 0) {
            for (let i = 0; i < array.length; i++) {
            listitems.push(this.createCard(i))
            }
            return listitems;
        }
        else {return <Text/>}
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
            {this.state.exhibitors.length ? <div className="trycontainer"><button className="match" onClick={() => this.matchagain()}>Try matching again!</button></div> : null}

            </div>
					</div>
        );
    }

}

export default MatchingSection;
