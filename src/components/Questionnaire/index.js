import React, { useState } from 'react'
import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'
import Modal from 'react-modal'
import 'survey-core/defaultV2.min.css'
import './index.scss'
import { surveyLocalization } from 'survey-core'
import './pop.scss'
import { CCloseButton } from '@coreui/react'

const Questionnaire = ({ setShowButtons }) => {
    const majorList = [
        'Computer Science',
        'Computer Engineering',
        'Biomedical Engineering',
        'Chemical Engineering',
        'Civil Engineering',
        'Computer Science & Engineering',
        'Electrical Engineering',
        'Engineering Mathematics & Physics',
        'Environmental Engineering',
        'Industrial Engineering',
        'Information Technology',
        'Mechanical Engineering',
        'Civil Engineering',
        'Chemical Engineering',
        'Biomedical Engineering',
        'Media Technology',
        'Medical Engineering',
        'Material & Product Design',
        'Other...',
    ]

    const jobTypeList = [
        'Full-time',
        'Part-time',
        'Summer job',
        'Internship',
        'Trainee',
        'Bachelor thesis',
        'Master thesis',
    ]

    // const options = {
    //     keys: ['program'], // Search based on the program name
    //     threshold: 0.1, // Adjust the threshold for fuzzy matching
    // }

    // const fuse = new Fuse(programsAndIndustries, options) //instance for fuzzy searching

    // function matchedIndustries(program) {
    //     const results = fuse.search(program)
    //     return results.map(result => result.item.industries).flat()
    // }

    const surveyJson = {
        pages: [
            {
                elements: [
                    {
                        name: 'Programme',
                        title: 'What programme do you study?',
                        type: 'dropdown',
                        choices: majorList,
                    },
                ],
            },
            {
                elements: [
                    {
                        name: 'Job Type',
                        title: 'What types of job are you looking for?',
                        type: 'checkbox',
                        choices: jobTypeList,
                    },
                ],
            },
        ],
    }
    const [modalOpen, setModalOpen] = useState(true)
    const [savedData, setSavedData] = useState(
        sessionStorage.getItem('my-data')
    )

    const openModal = () => {
        setModalOpen(true)
        setSavedData(null)
    }

    const closeModal = () => {
        setModalOpen(false)
        setShowButtons(true)
    }

    const customCss = {
        root: 'root-container',
        question: {
            content: 'question-content',
        },
        dropdown: {
            control: 'dropdown-button',
            chevronButton: 'dropdown-button',
            cleanButton: 'dropdown-eraser',
        },
        /*  navigation: {
            controls: 'navigation-button',
            next: 'navigation button',
        }, */
    }

    function saveSurveyData(survey) {
        const data = survey.data
        const data_json = JSON.stringify(data)
        sessionStorage.setItem('my-data', data_json)
        setSavedData(sessionStorage.setItem('my-data', data_json))
        setModalOpen(false)
    }

    const survey = new Model(surveyJson)
    survey.completeText = 'Find'
    survey.showCompletedPage = false
    survey.onComplete.add(saveSurveyData)
    survey.css = customCss
    console.log(survey)

    /* survey.addNavigationItem({
        id: 'sv-nav-clear-page',
        title: 'Close',
        action: () => {
            closeModal()
        },
        css: 'nav-button',
        innerCss: 'sd-btn nav-input',
    }) */
    return (
        <div>
            <button className='button-open-questionnaire' onClick={openModal}>
                Open Questionnaire
            </button>
            {!savedData && (
                <div className='q-top-container' style={{ zIndex: 1000 }}>
                    <Modal
                        className='questionnaire-container'
                        isOpen={modalOpen}
                        onRequestClose={closeModal}
                        contentLabel='Questionnaire Modal'
                        shouldCloseOnOverlayClick={true}
                        style={{ overlay: {}, content: {} }}
                    >
                        <button
                            className='modal-close-btn'
                            onClick={closeModal}
                        >
                            X
                        </button>
                        <Survey model={survey} />
                    </Modal>
                </div>
            )}
        </div>
    )
}

export default Questionnaire
