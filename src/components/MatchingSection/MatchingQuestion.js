import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import MatchingLogo from "../../../content/assets/MatchingLogo.png"

class MatchingQuestion extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            hide: false,
            selected: [],
            value: 5
        }
    }

    // componentWillReceiveProps = () => {
    //     this.setState({selected: })
    // }

    handleSelect = (selectedOptions) => {
        /* eslint-disable no-console */
        // console.log(selectedOptions);
        /* eslint-enable no-console */
        // this.setState({selected: selectedOptions})
        this.props.handleChange(selectedOptions);
        // this.props.handleChange(selectedOptions);
        // this.props.preSelected();
    }

    onClick = (e) => {
        const id = e.target.id;
        /* eslint-disable no-console */
        // console.log('hello from onclick', id);
        // console.log();
        /* eslint-enable no-console */
        // this.props.handleChange(this.state.selected);
        if(id === "next") {
            this.props.nextClick()
        } else if(id === "prev"){
            this.props.prevClick()
        }
        
    }

    handleSlider = (e) => {
        this.setState({value: e.target.value})
    }
    
    render() {
        return (
            <div>
                <img src={MatchingLogo} />
                <h2 className="helmet">{this.props.question}</h2>
                    <p>Try out Armada's brand new <span className="bold">matching functionality</span> that matches </p>
                    <p>students with companies through their shared values!</p>
                <div className="questions">
                <Select
                    placeholder="Select option(s)..."
                    value={this.props.preSelected}
                    closeMenuOnSelect={false}
                    isMulti
                    isSearchable
                    name="Hej"
                    options = {this.props.answers}
                    onChange={this.handleSelect}
                    defaultValue={this.props.preSelected}
                    className="basic-multi-select"
                    classNamePrefix="select"/>
                </div>
                
                <div>
                    <h3>HOW IMPORTANT IS THIS QUESTION TO YOU?</h3>
                    <div className="slidecontainer">
                    <input
                        className="slider"
                        style={{background: MatchingLogo}} 
                        id="typeinp" 
                        type="range" 
                        min="0" max="10" 
                        value={this.state.value} 
                        onChange={this.handleSlider}
                        step="1"/>
                        <h3>{(this.state.value)/10}</h3>
                    </div>
                        
                        
                    
                    
                    <button className="match" id="prev" onClick={this.onClick}>Previous question!</button>
                    <button className="match" id="next" onClick={this.onClick}>Next question!</button>
                </div>
                
            </div>
        )
    }
}

MatchingQuestion.propTypes = {
    question: PropTypes.string,
    answers: PropTypes.array,
    handleChange: PropTypes.func,
    preSelected: PropTypes.func,
    prevClick: PropTypes.func,
    nextClick: PropTypes.func,
}

export default MatchingQuestion;