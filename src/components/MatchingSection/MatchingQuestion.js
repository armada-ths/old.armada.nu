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
            value: 5,
        }
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.question !== prevProps.question) {
          this.setState({ value: this.props.weight });
        }
    }

    handleSelect = (selectedOptions) => {
        this.props.handleChange(selectedOptions);
    }

    onClick = (e) => {
        const id = e.target.id;
        if(id === "next") {
            this.props.nextClick()
        } else if(id === "prev"){
            this.props.prevClick()
        }
        this.props.onWeightChange(this.props.index, this.state.value)
    }

    handleSlider = (e) => {
        this.setState({value: e.target.value})
    }
    
    render() {
        return (
            <div className="question-card-wrapper">
                <div className="question-index">
                <span className="index-value"> {this.props.index +1}/5 </span>
                </div>
                <img src={MatchingLogo} />
                <h3 className="question-header">{this.props.question}</h3>
                <div className="questions">
                <Select
                    placeholder="Select one or more options..."
                    value={this.props.preSelected}
                    closeMenuOnSelect={false}
                    blurInputOnSelect={false}
                    isMulti
                    isSearchable= {false}
                    
                    options = {this.props.answers}
                    onChange={this.handleSelect}
                    defaultValue={this.props.preSelected}
                    className="basic-multi-select"
                    classNamePrefix="select"/>
                </div>
                
                <div className="question-content">
                    <h3 className="question-header">HOW IMPORTANT IS THIS QUESTION TO YOU?</h3>
                    <div className="slidecontainer">
                    <input
                        className="slider"
                        // style={{background: MatchingLogo}} 
                        id="typeinp" 
                        type="range" 
                        min="0" max="10" 
                        value={this.state.value} 
                        onChange={this.handleSlider}
                        step="1"/>
                        <h3 className="question-header">{(this.state.value)/10}</h3>
                    </div>
                    <div className="nav-btns">
                        <button className="match" id="prev" disabled={this.props.prevDisabled} onClick={this.onClick}>Previous question!</button>
                        <button className="match" id="next" onClick={this.props.nextDisabled ? this.props.onSubmit : this.onClick}>{this.props.nextDisabled ? "Get matching!" : "Next question!"}</button>
                    </div>
                </div>
            </div>
        )
    }
}

MatchingQuestion.propTypes = {
    question: PropTypes.string,
    answers: PropTypes.array,
    handleChange: PropTypes.func,
    preSelected: PropTypes.array,
    prevClick: PropTypes.func,
    nextClick: PropTypes.func,
    nextDisabled: PropTypes.bool,
    prevDisabled: PropTypes.bool,
    onWeightChange: PropTypes.func,
    index: PropTypes.number,
    weight: PropTypes.number,
    onSubmit: PropTypes.func,
}

export default MatchingQuestion;