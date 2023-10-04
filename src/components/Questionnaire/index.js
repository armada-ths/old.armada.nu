import React from 'react';
import './index.scss';

const Questionnaire = (props) => {
    return (
        <div id='questionnaire-container'>
            <div className='questions-group'>
                <div>Question 1</div>
                <input></input>
                <div>Question 2</div>
                <input></input>
            </div>
            <div className='button-group'>
                <button>Submit</button>
                <button>Close</button>
            </div>
        </div>
    );
}

export default Questionnaire;