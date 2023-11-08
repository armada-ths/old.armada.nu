import React from 'react'
import { Model } from 'survey-core'
import { PopupSurvey } from 'survey-react-ui'
import Fuse from 'fuse.js' // Import the Fuse.js library
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

    //TODO: this matches programs to industries.
    function matchedIndustries(program) {
        const results = fuse.search(program)
        return results.map(result => result.item.industries).flat()
    }

    const surveyJson = {
        elements: [
            {
                name: 'Programme',
                title: 'What programme do you study?',
                type: 'dropdown',
                choices: majorList,
                isRequired: true,
            },
            {
                name: 'Job Type',
                title: 'What types of jobs are you looking for?',
                type: 'checkbox',
                choices: jobTypeList,
                isRequired: true,
            },
        ],
        completeText: 'Continue',
        completedHtml: '<h3>Here are your matches</h3>',
    }

    //TODO: this is what happens after submitting survey. It stores the answers and search results in session storage.
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
    //survey.width = '50%'
    survey.title = 'Want to find companies that interest you?'
    survey.onComplete.add(saveSurveyData)

    return (
        <div>
            <PopupSurvey
                model={survey}
                isExpanded={false}
                closeOnCompleteTimeout={3} //change value to 0 to close pop up immediately after clicking on "continue"
                allowClose
            />
        </div>
    )
}

export default Questionnaire
