import React from 'react'
import Loadable from 'react-loadable'
import Contacts from '../../components/Contacts'
import SubmissionForm from '../../components/SubmissionForm'

const ContactPage = () => {
    const ContactMap = Loadable({
        loader: () => import('../../components/ContactMap'),
        loading() {
            return <div></div>
        },
    })

    return (
        <>
            <SubmissionForm />
            <Contacts />
            <ContactMap />
        </>
    )
}

export default ContactPage
