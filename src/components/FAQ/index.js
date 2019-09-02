import React from "react"
import FAQHeader from './FAQHeader'
import FAQContent from './FAQContent'

const faq_data = [{title: "THE FAIR", body: [
    {question: "Question 1  aklhfa dsjkf hadsjk?", answer: "jhsda kjlgasdg jahdsgk aslkjdgh aslkjdhg kjsadhgkj asdhgka jsdhfkja shkjasdfh askdjfh askdja sdgja skdj asdlkögjsadkgj saldkj"},
    {question: "Question 2 dhlkajslhgsadkljgalskdjg askdljhalsdökhjj aklhfa dsjkf hadsjk?", answer: "jhsda kjlgasdg jahdsgk aslkjdgh aslkjdhg kjsadhgkj asdhgka jsdhfkja shkjasdfh askdjfh askdja sdgja skdj asdlkögjsadkgj saldkj"},
    {question: "Question 3 dhlkajslhgsadkljgalskdjgask d ljhalsdökhjj aklhfa dsjkf?", answer: "jhsda kjlgasdg jahdsgk aslkjdgh aslkjdhg kjsadhgkj asdhgka jsdhfkja shkjasdfh askdjfh askdja sdgja skdj asdlkögjsadkgj saldkj"},
    {question: "Question 13 dhlkajslhgsadkljgalskdjgaskdljhalsdökhjj aklhfa  hadsjk?", answer: "jhsda kjlgasdg jahdsgk aslkjdgh aslkjdhg kjsadhgkj asdhgka jsdhfkja shkjasdfh askdjfh askdja sdgja skdj asdlkögjsadkgj saldkj"},
]},
{title: "RECRUITMENT", body: [
    {question: "Question 1  aklhfa dsjkf hadsjk?", answer: "jhsda kjlgasdg jahdsgk aslkjdgh aslkjdhg kjsadhgkj asdhgka jsdhfkja shkjasdfh askdjfh askdja sdgja skdj asdlkögjsadkgj saldkj"},
    {question: "Question 2 dhlkajslhgsadkljgalskdjgaskdljhal sdökhjj aklhfa dsjkf hadsjk?", answer: "jhsda kjlgasdg jahdsgk aslkjdgh aslkjdhg kjsadhgkj asdhgka jsdhfkja shkjasdfh askdjfh askdja sdgja skdj asdlkögjsadkgj saldkj"},
    {question: "Question 3 dhlkajslhgsadkljgalskdjgaskdljhalsd ökhjj aklhfa dsjkf?", answer: "jhsda kjlgasdg jahdsgk aslkjdgh aslkjdhg kjsadhgkj asdhgka jsdhfkja shkjasdfh askdjfh askdja sdgja skdj asdlkögjsadkgj saldkj"},
    {question: "Question 4 dhlkajslhgsadkljgalskdjgaskdljhalsdök hjj aklhfa  hadsjk?", answer: "jhsda kjlgasdg jahdsgk aslkjdgh aslkjdhg kjsadhgkj asdhgka jsdhfkja shkjasdfh askdjfh askdja sdgja skdj asdlkögjsadkgj saldkj"},
]}
];

const FAQContainer = () => {
    return(
        <div>
            <FAQHeader/>
            <FAQContent faq_data={faq_data}/>
        </div>
    )
}

export default FAQContainer