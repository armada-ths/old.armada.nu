import React from "react"
import './index.scss'
import PropTypes from "prop-types";
import FAQQuestion from './FAQQuestion'



class FAQContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionClicked: false,
        }; 
    }

    render() {
        return(
            <div className='faq-content-body'>
                <section className='primary-container'>
                    <div className='page-width-container'>
                        <div className='main-content'>
                            {this.props.faq_data.length == 0 && 
                            <p style={{marginTop: '30px', textAlign: 'center'}}>No results found. Please broaden your search</p>
                            }
                            {this.props.faq_data.map((category, i) => {
                                return(
                                    <article key={i} className='no-article-survey'>
                                    <h3 className="category-header">{category.title}</h3>
                                    <nav className='accordion-homepage'>
                                    {category.body.map((faq, i) => {
                                        return(
                                            <FAQQuestion key={i} question={faq.question} answer={faq.answer}/>
                                        );
                                    })}
                                </nav>
                                </article>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

FAQContent.propTypes = {
    faq_data: PropTypes.array
  }

export default FAQContent