import React, { useState } from 'react'
import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'
import Fuse from 'fuse.js'
import Modal from 'react-modal'
import 'survey-core/defaultV2.min.css'
import './index.scss'

const Questionnaire = props => {
    const majorList = [
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
        'Media Technology',
        'Medical Engineering',
        'Material & Product Design',
        'Other',
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

    const programsAndIndustries = [
        {
            program: 'Biomedical Engineering',
            industries: ['Pharmaceutical', 'Biotechnology'],
        },
        {
            program: 'Chemical Engineering',
            industries: [
                'Solid Mechanics',
                'Pharmaceutical',
                'Biotechnology',
                'Nuclear Power',
                'Energy Technology',
                'Nanotechnology',
            ],
        },
        {
            program: 'Civil Engineering',
            industries: [
                'Architecture',
                'Construction',
                'Property & Infrastructure',
                'Railway',
            ],
        },
        {
            program: 'Computer Science & Engineering',
            industries: [
                'Simulation Technology',
                'Software Development',
                'Web Development',
                'Telecommunication',
                'IT Infrastructure',
                'Interaction Design',
            ],
        },
        {
            program: 'Electrical Engineering',
            industries: [
                'Acoustics',
                'Aerospace',
                'Telecommunication',
                'Mechatronics',
                'Electronics',
                'Nanotechnology',
            ],
        },
        {
            program: 'Engineering Mathematics & Physics',
            industries: [
                'Solid Mechanics',
                'Acoustics',
                'Nuclear Power',
                'Fluid Mechanics',
                'Industry Design',
            ],
        },
        {
            program: 'Environmental Engineering',
            industries: ['Environmental Sector', 'Energy Technology'],
        },
        {
            program: 'Industrial Engineering',
            industries: [
                'Manufacturing Industry',
                'Management Consulting',
                'Insurance',
                'Finance',
                'Logistics & Supply Chain',
                'Mechatronics',
                'Property & Infrastructure',
                'Industry Design',
                'Recruitment',
            ],
        },
        {
            program: 'Information Technology',
            industries: [
                'Web Development',
                'Simulation Technology',
                'Telecommunication',
                'IT Infrastructure',
                'Software Development',
                'Interaction Design',
            ],
        },
        {
            program: 'Mechanical Engineering',
            industries: [
                'Automotive',
                'Fluid Mechanics',
                'Solid Mechanics',
                'Aerospace',
                'Acoustics',
                'Marine System',
                'Mechatronics',
                'Nanotechnology',
            ],
        },
        {
            program: 'Media Technology',
            industries: [
                'Web Development',
                'Simulation Technology',
                'Media Technology',
                'Telecommunication',
                'IT Infrastructure',
                'Software Development',
                'Interaction Design',
            ],
        },
        {
            program: 'Medical Engineering',
            industries: ['Medical Technology'],
        },
        {
            program: 'Material & Product Design',
            industries: [
                'Pharmaceutical',
                'Wood-Processing Industry',
                'Steel Industry',
                'Manufacturing Industry',
                'Logistics & Supply Chain',
                'Material Development',
                'Nanotechnology',
                'Product Development',
            ],
        },
        {
            program: 'Other',
            industries: ['Research', 'Pedagogy', 'Retail'],
        },
        // Add more program-industry associations
    ]

    const options = {
        keys: ['program'], // Search based on the program name
        threshold: 0.1, // Adjust the threshold for fuzzy matching
    }

    const fuse = new Fuse(programsAndIndustries, options) //instance for fuzzy searching

    function matchedIndustries(program) {
        const results = fuse.search(program)
        return results.map(result => result.item.industries).flat()
    }

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
        completeText: 'Continue',
    }

    const [modalOpen, setModalOpen] = useState(false)

    const openModal = () => {
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
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
        const surveyData = survey.data
        const matches = matchedIndustries(surveyData.Programme)
        const data = {}
        data.type = surveyData['Job Type']
        data.industries = matches
        const data_json = JSON.stringify(data)
        sessionStorage.setItem('my-data', data_json)
    }

    const survey = new Model(surveyJson)
    survey.showCompletedPage = false
    survey.css = customCss
    survey.onComplete.add(saveSurveyData)

    return (
        <div>
            <button className='button-open-questionnaire' onClick={openModal}>
                Open Questionnaire
            </button>

            <div className='questionnaire-container'>
                <Modal
                    isOpen={modalOpen}
                    onRequestClose={closeModal}
                    contentLabel='Questionnaire Modal'
                >
                    <button className='modal-close-btn' onClick={closeModal}>
                        X
                    </button>
                    <Survey model={survey} />
                </Modal>
            </div>
        </div>
    )
}

export default Questionnaire
