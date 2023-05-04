import React, { useState, useEffect } from 'react'
import FAQHeader from './FAQHeader'
import FAQBackground from '../../../static/assets/faqbanner.png'
import FAQQuestion from './FAQQuestion'
import PropTypes from 'prop-types'
import { studentQuestions, exhibitorQuestions } from './FAQConst'
import EmailForm from '../EmailForm'
import './index.scss'

const FAQContainer = props => {
    const [faq, setFaq] = useState()
    const [questions, setQuestions] = useState(studentQuestions)
    const [visible, setVisability] = useState()
    const visibilityContactFrom = visible === true ? 'block' : 'none'
    const visibilityContactBtn = visible === true ? 'none' : 'block'

    useEffect(() => {
        setFaq(questions[0]);
    }, []);

    useEffect(() => {
        if (props.type === 'student') {
            setQuestions(studentQuestions)
        } else if (props.type === 'exhibitor') {
            setQuestions(exhibitorQuestions)
        }
    }, [questions, props.type])

    function topicClicked(event, topic){
        setFaq(topic);
        const topicButtons = document.getElementsByClassName('topic-container');
        for(const topicButton of topicButtons){
            const topicId = topicButton.id;
            if(topicId == topic.title){
                topicButton.style.backgroundColor = "green";
            }
            else{
                topicButton.style.backgroundColor = "white";
            }
        }
    }
    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <div className='FAQ-Container'>
                <FAQHeader />
                {/* <img alt='' className='terre' src={FAQBackground} /> */}
                {/* <p className='browse-header'>Browse by key topics:</p> */}
                <div className='topics-container grid-container'>
                    {questions &&
                        questions.map(topic => {
                            return (
                                <div
                                    key={topic.title}
                                    className='topic-container'
                                    id={topic.title}
                                    onClick={(event) => topicClicked(event,topic)}
                                    onKeyDown={() => setFaq(topic)}
                                    role='none'
                                >
                                    <p className='topic'>{topic.title}</p>
                                </div>
                            )
                        })}
                </div>
                <div className='answers-wrap'>
                    {faq && (
                        <div className='accordion-homepage grid-container-answers'>
                            {faq.body.map(faq => {
                                return (
                                    <FAQQuestion
                                        key={faq.question}
                                        question={faq.question}
                                        answer={
                                            faq.displayAnswer
                                                ? faq.displayAnswer
                                                : faq.answer
                                        }
                                    />
                                )
                            })}
                        </div>
                    )}
                    <button
                        style={{ display: `${visibilityContactBtn}` }}
                        className='contactBtn'
                        onClick={() => setVisability(!visible)}
                    >
                        Contact us!
                    </button>
                    <div className='contact-us'
                        style={{
                            display: `${visibilityContactFrom}`,
                            marginBottom: '2em',
                        }}
                    >
                        <EmailForm emailTo='a@armada.nu' />
                    </div>
                </div>
            </div>
        </>
    )
}

FAQContainer.propTypes = {
    type: PropTypes.string,
}

export default FAQContainer
