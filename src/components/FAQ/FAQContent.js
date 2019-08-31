import React from "react"
import './index.scss'
import chevronDown from '../../../content/assets/pil_melon.png'
import chevronUp from '../../../content/assets/pil_melon_up.png'

class FAQContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionClicked: false,
        }; 
    }

    questionOnClicked = () => {
        this.setState({questionClicked: !this.state.questionClicked});
    }

    render() {
        return(
            <div className='faq-content-body'>
                <section className='primary-container'>
                    <div className='page-width-container'>
                        <div className='main-content'>
                            <article className='no-article-survey'>
                                <nav className='accordion-homepage'>
                                    <section className='parent' onClick={ () => this.questionOnClicked()}>
                                        <h2 tabIndex='0' aria-expanded='false'>
                                        FAQ Content
                                        <img src={this.state.questionClicked ? chevronUp : chevronDown} className='chevron'></img>
                                        </h2>
                                    </section>
                                    <section className='parent' onClick={ () => this.questionOnClicked()}>
                                        <h2 tabIndex='0' aria-expanded='false'>
                                        FAQ Content
                                        <img src={this.state.questionClicked ? chevronUp : chevronDown} className='chevron'></img>
                                        </h2>
                                    </section>
                                    <section className='parent' onClick={ () => this.questionOnClicked()}>
                                        <h2 tabIndex='0' aria-expanded='false'>
                                        FAQ Content
                                        <img src={this.state.questionClicked ? chevronUp : chevronDown} className='chevron'></img>
                                        </h2>
                                    </section>
                                    <section className='parent' onClick={ () => this.questionOnClicked()}>
                                        <h2 tabIndex='0' aria-expanded='false'>
                                        FAQ Content
                                        <img src={this.state.questionClicked ? chevronUp : chevronDown} className='chevron'></img>
                                        </h2>
                                    </section>
                                    <section className='parent' onClick={ () => this.questionOnClicked()}>
                                        <h2 tabIndex='0' aria-expanded='false'>
                                        FAQ Content
                                        <img src={this.state.questionClicked ? chevronUp : chevronDown} className='chevron'></img>
                                        </h2>
                                    </section>
                                    <section className='parent' onClick={ () => this.questionOnClicked()}>
                                        <h2 tabIndex='0' aria-expanded='false'>
                                        FAQ Content
                                        <img src={this.state.questionClicked ? chevronUp : chevronDown} className='chevron'></img>
                                        </h2>
                                    </section>
                                </nav>
                            </article>
                            
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default FAQContent