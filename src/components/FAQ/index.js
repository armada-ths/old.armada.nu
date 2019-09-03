import React from "react"
import FAQHeader from './FAQHeader'
import FAQContent from './FAQContent'
import background from '../../../content/assets/faqbanner.png'

const faq_data = [{title: "THE FAIR", body: [
    {question: "Question 1?", answer: "42"},
    {question: "Question 2?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"},
    {question: "Question 3?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit inj"},
    {question: "Question 13?", answer: "jhsda kjlgasdg jahdsgk aslkjdgh aslkjdhg kjsadhgkj asdhgka jsdhfkja shkjasdfh askdjfh askdja sdgja skdj asdlkögjsadkgj saldkj"},
]},
{title: "RECRUITMENT", body: [
    {question: "Question 1?", answer: "jhsda kjlgasdg jahdsgk aslkjdgh aslkjdhg kjsadhgkj asdhgka jsdhfkja shkjasdfh askdjfh askdja sdgja skdj asdlkögjsadkgj saldkj"},
    {question: "Question 2?", answer: "jhsda kjlgasdg jahdsgk aslkjdgh aslkjdhg kjsadhgkj asdhgka jsdhfkja shkjasdfh askdjfh askdja sdgja skdj asdlkögjsadkgj saldkj"},
    {question: "Question 3?", answer: "jhsda kjlgasdg jahdsgk aslkjdgh aslkjdhg kjsadhgkj asdhgka jsdhfkja shkjasdfh askdjfh askdja sdgja skdj asdlkögjsadkgj saldkj"},
    {question: "Question 4?", answer: "jhsda kjlgasdg jahdsgk aslkjdgh aslkjdhg kjsadhgkj asdhgka jsdhfkja shkjasdfh askdjfh askdja sdgja skdj asdlkögjsadkgj saldkj"},
]}
];


class FAQContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userInput: '',
            searchResult: faq_data
        }

        this.updateSearchResult = this.updateSearchResult.bind(this)
    }

    render() {
        return(
            <div>
                <div className="faq-search-form">
                    <img className="terre" src={background}></img>
                    <FAQHeader onQuestionUpdate={this.updateSearchResult} />   
                </div>
                <div >
                
                <FAQContent faq_data={this.state.searchResult}/>
    
                </div>
                
            </div>
        )
    }

    updateSearchResult(input) {
        input = input.target.value.toLowerCase()

        // actual result filtering
        let copy = JSON.parse(JSON.stringify(faq_data))

        // filter question
        copy = copy.map(group => {
            group.body = group.body.filter(question => question.question.toLowerCase().includes(input) || question.answer.toLowerCase().includes(input))
            return group
        }).filter(group => group.body.length > 0)

        console.log(copy)
        this.setState({
            searchResult: copy
        })

    }
}

export default FAQContainer