/* Instant sales contact submission form created by Nima */
import { BsChevronCompactRight, BsChevronCompactDown } from 'react-icons/bs'
import { FaRegWindowMinimize } from 'react-icons/fa'
import { RiCustomerService2Line } from 'react-icons/ri'
import React, { useState, useEffect } from 'react'
import './index.scss'
import useWindowSize from './useGatsbyWindowSize'
import ReCAPTCHA from 'react-google-recaptcha'

const THIS_PAGE = '/'
const Form = () => {
    const createEmptyForm = () => {
        return {
            name: '',
            email: '',
            message: '',
        }
    }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [statusText, setStatusText] = useState('')
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [formedFilled, setFormFilled] = useState(false) //used to keep track if the form if fully filled out or not
    const [captchaFilled, setCaptchaFilled] = useState(false)
    const handleChange = event => {
        const key = event.target.name
        const updatedFormValue = event.target.value
        const newFormData = { ...formData, [key]: updatedFormValue }
        setFormData(newFormData)
    }

    useEffect(() => {
        if (
            formData.name !== '' &&
            formData.email !== '' &&
            formData.message !== '' &&
            captchaFilled
        ) {
            setFormFilled(true)
        } else {
            setFormFilled(false)
        }
    }, [formData, captchaFilled])

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target
        fetch(THIS_PAGE, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                'form-name': form.getAttribute('name'),
                ...formData,
            }).toString(),
        })
            .then(response => {
                //where your custom handling goes
                if (!response.ok) throw Error(response.statusText)
                /*console.log(response)
                console.log(response.ok)
                console.log(response.statusText)*/
                const emptyForm = createEmptyForm()
                setFormData(emptyForm)
                setFormSubmitted(true)
                setStatusText('Thank you! We will be in touch soon!')
            })
            .catch(error => setStatusText(`Error: ${error.message}`))
    }

    return (
        <>
            {formSubmitted ? (
                <div className='submittedText'>{statusText}</div>
            ) : (
                <form
                    name='contact-form'
                    id='contact-form'
                    method='POST'
                    onSubmit={e => handleSubmit(e)}
                    action={THIS_PAGE}
                    data-netlify='true'
                    data-netlify-honeypot='bot-field'
                    className='formActual'
                >
                    <input type='hidden' name='bot-field' />
                    <input
                        type='hidden'
                        name='form-name'
                        value='contact-form'
                    />
                    <div className='label'>
                        <label htmlFor='name'>Name:</label>
                        <input
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={e => handleChange(e)}
                            className='input'
                        />
                    </div>
                    <div className='label'>
                        <label htmlFor='email'>Your Email:</label>
                        <input
                            type='text'
                            name='email'
                            value={formData.email}
                            onChange={e => handleChange(e)}
                            className='input'
                        />
                    </div>
                    <div className='label'>
                        <label htmlFor='message'>Message:</label>
                        <textarea
                            name='message'
                            value={formData.message}
                            onChange={e => handleChange(e)}
                            className='input'
                        />
                    </div>
                    <ReCAPTCHA
                        className='captcha'
                        sitekey='6LdlSPwnAAAAADCALl0tmledXQ2NofF5J0Ssi1wH'
                        onChange={() => {
                            setCaptchaFilled(true)
                        }}
                    />
                    <div className='label'>
                        {formedFilled ? (
                            <button
                                style={{ margin: '10px 0 10px 0' }}
                                type='submit'
                                name='submit'
                            >
                                Submit
                            </button>
                        ) : (
                            <button disabled={true}>Submit</button>
                        )}
                    </div>
                </form>
            )}
        </>
    )
}

const SubmissionForm = () => {
    const [formShowing, showForm] = useState(true)
    var w = useWindowSize().width
    return (
        <div className='entireBox'>
            {formShowing ? (
                <div className='formBox'>
                    <div className='titleFormBox'>
                        <div
                            style={{
                                textDecoration: 'underline',
                                fontSize: 22,
                            }}
                        >
                            Hey! Would you like to contact our sales team
                            directly?
                        </div>
                        <FaRegWindowMinimize
                            className={
                                formShowing ? 'arrow rotate-icon' : 'arrow'
                            }
                            onClick={() => showForm(!formShowing)}
                        />
                    </div>
                    <Form />
                </div>
            ) : (
                <>
                    {/*This is so that the button becomes smaller on mobile */}
                    {w > 850 ? (
                        <button
                            className='salesContactBtn'
                            onClick={() => showForm(!formShowing)}
                        >
                            <>
                                Contact Sales
                                <RiCustomerService2Line />
                            </>
                        </button>
                    ) : (
                        <button
                            className='salesContactBtn'
                            onClick={() => showForm(!formShowing)}
                        >
                            <>
                                <RiCustomerService2Line />
                            </>
                        </button>
                    )}
                </>
            )}
        </div>
    )
}

export default SubmissionForm
