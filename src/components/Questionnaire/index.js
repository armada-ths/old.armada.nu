import React, { useState, useEffect } from 'react'
import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'
import Modal from 'react-modal'
import 'survey-core/defaultV2.min.css'
import './index.scss'
import Fuse from 'fuse.js'
import { GrClose } from 'react-icons/gr'
import { window } from 'browser-monads'
import { RiSurveyLine } from 'react-icons/ri'

const Questionnaire = ({
    setShowButtons,
    setRecommendedExhibitors,
    exhibitorsMap,
}) => {
    const majorList = [
        'Architecture',
        'Biotechnology',
        'Biomedical Engineering',
        'Chemical Engineering',
        'Civil Engineering',
        'Computer Science',
        'Electrical Engineering',
        'Engineering Mathematics & Physics',
        'Environmental Engineering',
        'Industrial Engineering',
        'Information Technology',
        'Mechanical Engineering',
        'Media Technology',
        'Medical Engineering',
        'Material & Product Design',
        'Vechicle Engineering',
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

    const surveyJson = {
        title: 'Find recommended exhibitors for you',
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
                        colCount: 2,
                    },
                ],
            },
        ],
    }
    const [modalOpen, setModalOpen] = useState(true)
    const [exhibitorsQuestionnaire, setExhibitorsQuestionnaire] = useState([])
    const [width, setWidth] = useState(undefined)
    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    useEffect(() => {
        console.log('setting exhibitors')
        console.log(exhibitorsMap)
        setExhibitorsQuestionnaire(exhibitorsMap)
    }, [exhibitorsMap])

    const openModal = () => {
        setModalOpen(true)
        setShowButtons(false)
    }

    const closeModal = () => {
        setModalOpen(false)
        setShowButtons(true)
    }

    function saveSurveyData(survey) {
        const data = survey.data
        const data_json = JSON.stringify(data)
        localStorage.setItem('my-data', data_json)
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

    //custom css from index.scss applied on questionnaire component.
    const customCss = {
        root: 'root-container',
        question: {
            content: 'question-content',
        },
        title: 'root-title',
    }

    const survey = new Model(surveyJson)
    survey.completeText = 'Continue'
    survey.showCompletedPage = false
    survey.onComplete.add(saveSurveyData)
    survey.css = customCss
    console.log(survey)

    return (
        <div>
            {width > 768 ? (
                <button
                    className='button-open-questionnaire'
                    onClick={openModal}
                >
                    Find recommendations
                </button>
            ) : (
                <RiSurveyLine
                    className='button-open-questionnaire'
                    id='mobile'
                    onClick={openModal}
                />
            )}
            <div className='q-top-container' style={{ zIndex: 1000 }}>
                <Modal
                    className='questionnaire-container'
                    isOpen={modalOpen}
                    onRequestClose={closeModal}
                    contentLabel='Questionnaire Modal'
                    shouldCloseOnOverlayClick={true}
                    style={{ overlay: {}, content: {} }}
                >
                    <GrClose
                        class='cross crossQuestionnaire'
                        onClick={closeModal}
                    />
                    <Survey model={survey} />
                </Modal>
            </div>
        </div>
    )
}

export default Questionnaire
