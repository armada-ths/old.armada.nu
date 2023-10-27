import React from 'react'
import { Model } from 'survey-core'
import { PopupSurvey } from 'survey-react-ui'
import 'survey-core/defaultV2.min.css'
import './index.scss'

const Questionnaire = props => {
    const majorList = [
        'Computer Science',
        'Computer Engineering',
        'Electrical Engineering',
        'Mechanical Engineering',
        'Civil Engineering',
        'Chemical Engineering',
        'Biomedical Engineering',
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

    function saveSurveyData(survey) {
        const data = survey.data
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
                closeOnCompleteTimeout={3}
                allowClose
            />
        </div>
    )
}

export default Questionnaire
