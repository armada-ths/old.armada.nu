import React, { useState, useEffect } from 'react'
import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'
import Modal from 'react-modal'
import 'survey-core/defaultV2.min.css'
import './index.scss'
import { surveyLocalization } from 'survey-core'
import './pop.scss'
import Fuse from 'fuse.js'

const Questionnaire = ({
    setShowButtons,
    setRecommendedExhibitors,
    exhibitorsMap,
}) => {
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

    function matchProgramToIndustries(program) {
        const results = fuse.search(program)
        const industries = results.map(result => result.item.industries).flat()
        return industries
    }

    function matchIndustriesToExhibitors(industries, allExhibitors) {
        console.log(allExhibitors)
        return allExhibitors.reduce((matchedExhibitors, exhibitor) => {
            // Check if the exhibitor has all the specified industries
            const hasAllIndustries = industries.some(industry =>
                exhibitor.industries.some(
                    exhibitorIndustry => exhibitorIndustry.name === industry
                )
            )

            // If the exhibitor has all the specified industries, add it to the result array
            if (hasAllIndustries) {
                matchedExhibitors.push(exhibitor)
            }

            return matchedExhibitors
        }, [])
    }

    // const options = {
    //     keys: ['program'], // Search based on the program name
    //     threshold: 0.1, // Adjust the threshold for fuzzy matching
    // }

    // const fuse = new Fuse(programsAndIndustries, options) //instance for fuzzy searching

    // function matchedIndustries(program) {
    //     const results = fuse.search(program)
    //     return results.map(result => result.item.industries).flat()
    // }
    console.log('hasdahsd')

    const surveyJson = {
        pages: [
            {
                elements: [
                    {
                        name: 'Programme',
                        title: 'What programme do you study?',
                        type: 'dropdown',
                        choices: majorList,
                        isRequired: true,
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
                        isRequired: true,
                    },
                ],
            },
        ],
    }
    const [modalOpen, setModalOpen] = useState(true)
    const [exhibitorsQuestionnaire, setExhibitorsQuestionnaire] = useState([])

    useEffect(() => {
        console.log('setting exhibitors')
        console.log(exhibitorsMap)
        setExhibitorsQuestionnaire(exhibitorsMap)
    }, [exhibitorsMap])

    const openModal = () => {
        setModalOpen(true)
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
        setModalOpen(false)
        // console.log(data)
        const industries = matchProgramToIndustries(data['Programme'])
        console.log('check if theres something here:')
        console.log(industries)
        console.log(exhibitorsQuestionnaire.length)
        setRecommendedExhibitors(
            industries &&
                exhibitorsQuestionnaire.length > 0 &&
                matchIndustriesToExhibitors(industries, exhibitorsQuestionnaire)
        )
    }

    const survey = new Model(surveyJson)
    survey.completeText = 'Find'
    survey.showCompletedPage = false
    survey.onComplete.add(saveSurveyData)
    survey.css = customCss
    // console.log(survey)

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
            <div className='q-top-container' style={{ zIndex: 1000 }}>
                <Modal
                    className='questionnaire-container'
                    isOpen={modalOpen}
                    onRequestClose={closeModal}
                    contentLabel='Questionnaire Modal'
                    shouldCloseOnOverlayClick={true}
                    style={{ overlay: {}, content: {} }}
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
