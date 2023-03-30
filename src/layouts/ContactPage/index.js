import React from 'react'
import Loadable from 'react-loadable'
import Contacts from '../../components/Contacts'

const ContactPage = () => {
    const ContactMap = Loadable({
        loader: () => import('../../components/ContactMap'),
        loading() {
            return <div></div>
        },
    })

    return (
        <>
            <Contacts />
            <ContactMap />
        </>
    )
}

export default ContactPage
