import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import FAQQuestion from './FAQQuestion'

const FAQContent = (props) => {
    return(<div className='faq-content-body'>
        <section className='primary-container'>
            <div className='page-width-container'>
                <div className='main-content'>
                    {props.questions.length === 0 && <p style={{marginTop: '30px', textAlign: 'center'}}>No results found. Please broaden your search</p> }
                    {props.questions.map((category, i) => {
                        return(
                            <article key={i} className='no-article-survey'>
                            <h3 className='category-header'>{category.title}</h3>
                            <nav className='accordion-homepage'>
                            {category.body.map((faq, i) => {
                                return(
                                    <FAQQuestion key={i} question={faq.question} answer={faq.displayAnswer ? faq.displayAnswer : faq.answer}/>
                                );
                            })}
                        </nav>
                        </article>
                        )
                    })}
                </div>
            </div>
        </section>
    </div>)
}

FAQContent.propTypes = {
    questions: PropTypes.array
}

export default FAQContent