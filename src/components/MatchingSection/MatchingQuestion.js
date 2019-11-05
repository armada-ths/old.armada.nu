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
        // this.props.onWeightChange(e.target.value);
    }
    
    render() {
        return (
            <div>
                <img src={MatchingLogo} />
                <h3 className="helmet">{this.props.question}</h3>
                    <p>Try out Armada's brand new <span className="bold">matching functionality</span> that matches </p>
                    <p>students with companies through their shared values!</p>
                <div className="questions">
                <Select
                    placeholder="Select option(s)..."
                    value={this.props.preSelected}
                    closeMenuOnSelect={false}
                    isMulti
                    isSearchable
                    
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
                        // style={{background: MatchingLogo}} 
                        id="typeinp" 
                        type="range" 
                        min="0" max="10" 
                        value={this.state.value} 
                        onChange={this.handleSlider}
                        step="1"/>
                        <h3>{(this.state.value)/10}</h3>
                    </div>
                        
                        
                    {/* TODO: Handle matching when done */}
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
    preSelected: PropTypes.func,
    prevClick: PropTypes.func,
    nextClick: PropTypes.func,
    nextDisabled: PropTypes.bool,
    prevDisabled: PropTypes.bool,
    onWeightChange: PropTypes.func,
    index: PropTypes.number,
}

export default MatchingQuestion;