import React, { useState } from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'
import MatchingLogo from '../../../static/assets/MatchingLogo.png'

const MatchingQuestion = props => {
    const [isHiding, setIsHiding] = useState(false)
    const [selected, setSelected] = useState([])
    const [value, setValue] = useState(5)

    useEffect(() => {
        // Typical usage (don't forget to compare props):
        setValue(props.weight)
    }, [props.question])

    const handleSelect = selectedOptions => {
        props.handleChange(selectedOptions)
    }

    const onClick = e => {
        const id = e.target.id
        if (id === 'next') {
            props.nextClick()
        } else if (id === 'prev') {
            props.prevClick()
        }
        props.onWeightChange(props.index, value)
    }

    const handleSlider = e => {
        setValue(e.target.value)
    }

    return (
        <div className='question-card-wrapper'>
            <div className='question-index'>
                <span className='index-value'> {props.index + 1}/5 </span>
            </div>
            <img alt='' src={MatchingLogo} />
            <h3 className='question-header'>{props.question}</h3>
            <div className='questions'>
                <Select
                    placeholder='Select one or more options...'
                    value={props.preSelected}
                    closeMenuOnSelect={false}
                    blurInputOnSelect={false}
                    isMulti
                    isSearchable={false}
                    options={props.answers}
                    onChange={handleSelect}
                    defaultValue={props.preSelected}
                    className='basic-multi-select'
                    classNamePrefix='select'
                />
            </div>

            <div className='question-content'>
                <h3 className='question-header'>
                    HOW IMPORTANT IS THIS QUESTION TO YOU?
                </h3>
                <div className='slidecontainer'>
                    <input
                        aria-label='slider'
                        className='slider'
                        // style={{background: MatchingLogo}}
                        id='typeinp'
                        type='range'
                        min='0'
                        max='10'
                        value={value}
                        onChange={handleSlider}
                        step='1'
                    />
                    <h3 className='question-header'>{value / 10}</h3>
                </div>
                <div className='nav-btns'>
                    <button
                        className='match'
                        id='prev'
                        disabled={props.prevDisabled}
                        onClick={onClick}
                    >
                        Previous question!
                    </button>
                    <button
                        className='match'
                        id='next'
                        onClick={props.nextDisabled ? props.onSubmit : onClick}
                    >
                        {props.nextDisabled
                            ? 'Get matching!'
                            : 'Next question!'}
                    </button>
                </div>
            </div>
        </div>
    )
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

export default MatchingQuestion
