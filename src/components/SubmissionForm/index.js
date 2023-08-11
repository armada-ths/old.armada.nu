/* Instant sales contact submission form created by Nima */
import { BsChevronCompactRight, BsChevronCompactDown } from 'react-icons/bs'
import { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = event => {
        const key = event.target.name
        const updatedFormValue = event.target.value
        const newFormData = { ...formData, [key]: updatedValue }
        setFormData(newFormData)
    }
    return (
        <form
            name='contact-form'
            id='contact-form'
            method='POST'
            data-netlify='true'
            data-netlify-honeypot='bot-field'
        >
            <input type='hidden' name='bot-field' />
            <input type='hidden' name='form-name' value='contact-form' />
            <div>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={e => handleChange(e)}
                />
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    name='email'
                    value={formData.email}
                    onChange={e => handleChange(e)}
                />
            </div>
            <div>
                <label htmlFor='message'>Message</label>
                <textarea
                    name='message'
                    value={formData.message}
                    onChange={e => handleChange(e)}
                />
            </div>
            <div>
                <button type='submit' name='submit'>
                    Send Email
                </button>
            </div>
        </form>
    )
}

const SubmissionForm = () => {
    return (
        <BsChevronCompactRight className='expandable'>
            <Form />
        </BsChevronCompactRight>
    )
}

export default SubmissionForm
