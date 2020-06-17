import React from 'react'
import './index.scss'
import FAQQuestion from './FAQQuestion'

const FAQContent = (props) => {
    return(<div className='faq-content-body'>
        <section className='primary-container'>
            <div className='page-width-container'>
                <div className='main-content'>
                    {props.faq_data.length === 0 && <p style={{marginTop: '30px', textAlign: 'center'}}>No results found. Please broaden your search</p> }
                    {props.faq_data.map((category, i) => {
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

export default FAQContent