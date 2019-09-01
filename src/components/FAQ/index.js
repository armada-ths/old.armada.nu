import React from "react"
import FAQHeader from './FAQHeader'
import FAQContent from './FAQContent'

const faq_data = [
    {question: "Question 1  aklhfa dsjkf hadsjk?", answer: "jhsda kjlgasdg jahdsgk aslkjdgh aslkjdhg kjsadhgkj asdhgka jsdhfkja shkjasdfh askdjfh askdja sdgja skdj asdlkögjsadkgj saldkj"},
    {question: "Question 2 dhlkajslhgsadkljgalskdjgaskdljhalsdökhjj aklhfa dsjkf hadsjk?", answer: "jhsda kjlgasdg jahdsgk aslkjdgh aslkjdhg kjsadhgkj asdhgka jsdhfkja shkjasdfh askdjfh askdja sdgja skdj asdlkögjsadkgj saldkj"},
    {question: "Question 3 dhlkajslhgsadkljgalskdjgaskdljhalsdökhjj aklhfa dsjkf?", answer: "jhsda kjlgasdg jahdsgk aslkjdgh aslkjdhg kjsadhgkj asdhgka jsdhfkja shkjasdfh askdjfh askdja sdgja skdj asdlkögjsadkgj saldkj"},
    {question: "Question 4 dhlkajslhgsadkljgalskdjgaskdljhalsdökhjj aklhfa  hadsjk?", answer: "jhsda kjlgasdg jahdsgk aslkjdgh aslkjdhg kjsadhgkj asdhgka jsdhfkja shkjasdfh askdjfh askdja sdgja skdj asdlkögjsadkgj saldkj"},
]

const FAQContainer = () => {
    return(
        <div>
            <FAQHeader/>
            <FAQContent faq_data={faq_data}/>
        </div>
    )
}

export default FAQContainer