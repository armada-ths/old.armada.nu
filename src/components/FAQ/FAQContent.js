import React from "react"
import './index.scss'
import chevronDown from '../../../content/assets/pil_melon.png'
import chevronUp from '../../../content/assets/pil_melon_up.png'
import FAQQuestion from './FAQQuestion'



class FAQContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionClicked: false,
        }; 
    }

    faq_data = [{title: "THE FAIR", body: [
                                            {question: "Question 1  aklhfa dsjkf hadsjk?", answer: "jhsda kjlgasdg jahdsgk aslkjdgh aslkjdhg kjsadhgkj asdhgka jsdhfkja shkjasdfh askdjfh askdja sdgja skdj asdlkögjsadkgj saldkj"},
                                            {question: "Question 2 dhlkajslhgsadkljgalskdjgaskdljhalsdökhjj aklhfa dsjkf hadsjk?", answer: "jhsda kjlgasdg jahdsgk aslkjdgh aslkjdhg kjsadhgkj asdhgka jsdhfkja shkjasdfh askdjfh askdja sdgja skdj asdlkögjsadkgj saldkj"},
                                            {question: "Question 3 dhlkajslhgsadkljgalskdjgaskdljhalsdökhjj aklhfa dsjkf?", answer: "jhsda kjlgasdg jahdsgk aslkjdgh aslkjdhg kjsadhgkj asdhgka jsdhfkja shkjasdfh askdjfh askdja sdgja skdj asdlkögjsadkgj saldkj"},
                                            {question: "Question 4 dhlkajslhgsadkljgalskdjgaskdljhalsdökhjj aklhfa  hadsjk?", answer: "jhsda kjlgasdg jahdsgk aslkjdgh aslkjdhg kjsadhgkj asdhgka jsdhfkja shkjasdfh askdjfh askdja sdgja skdj asdlkögjsadkgj saldkj"},
                                        ]},
                {title: "RECRUITMENT", body: [
                                            {question: "Question 1  aklhfa dsjkf hadsjk?", answer: "jhsda kjlgasdg jahdsgk aslkjdgh aslkjdhg kjsadhgkj asdhgka jsdhfkja shkjasdfh askdjfh askdja sdgja skdj asdlkögjsadkgj saldkj"},
                                            {question: "Question 2 dhlkajslhgsadkljgalskdjgaskdljhalsdökhjj aklhfa dsjkf hadsjk?", answer: "jhsda kjlgasdg jahdsgk aslkjdgh aslkjdhg kjsadhgkj asdhgka jsdhfkja shkjasdfh askdjfh askdja sdgja skdj asdlkögjsadkgj saldkj"},
                                            {question: "Question 3 dhlkajslhgsadkljgalskdjgaskdljhalsdökhjj aklhfa dsjkf?", answer: "jhsda kjlgasdg jahdsgk aslkjdgh aslkjdhg kjsadhgkj asdhgka jsdhfkja shkjasdfh askdjfh askdja sdgja skdj asdlkögjsadkgj saldkj"},
                                            {question: "Question 4 dhlkajslhgsadkljgalskdjgaskdljhalsdökhjj aklhfa  hadsjk?", answer: "jhsda kjlgasdg jahdsgk aslkjdgh aslkjdhg kjsadhgkj asdhgka jsdhfkja shkjasdfh askdjfh askdja sdgja skdj asdlkögjsadkgj saldkj"},
                                        ]}
];
      
    questionOnClicked = () => {
        this.setState({questionClicked: !this.state.questionClicked});
    }

    // generateQuestions = (category) => {
    //     console.log('from generateQuestions ', category);
    //     const body = category.map((faq, i) => <FAQQuestion key={i} question={faq.question} answer={faq.answer}/>)
    //     return <nav className='accordion-homepage'>{body}</nav>;
    // }

    // test = () => {}
    render() {
        return(
            <div className='faq-content-body'>
                <section className='primary-container'>
                    <div className='page-width-container'>
                        <div className='main-content'>
                            <article className='no-article-survey'>
                                <h3 className="category-header"> THE FAIR </h3>
                                <nav className='accordion-homepage'>
                                    {this.props.faq_data.map((faq, i) => 
                                        <FAQQuestion key={i} question={faq.question} answer={faq.answer}/>
                                    )}
                                </nav>
                                <h3 className="category-header"> RECRUITMENT </h3>
                                <nav className='accordion-homepage'>
                                    {this.props.faq_data.map((faq, i) => 
                                        <FAQQuestion key={i} question={faq.question} answer={faq.answer}/>
                                    )}
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