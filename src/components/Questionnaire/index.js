import React, {useState} from 'react';
import { Model } from 'survey-core';
import { surveyLocalization } from "survey-core";
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';
import './index.scss';
import Modal from 'react-modal';


const Questionnaire = (props) => {

    const majorList = [
        'Computer Science',
        'Computer Engineering',
        'Electrical Engineering',
        'Mechanical Engineering',
        'Civil Engineering',
        'Chemical Engineering',
        'Biomedical Engineering',
    ];

    const jobTypeList = [
        'Full-time',
        'Part-time',
        'Summer job',
        'Internship',
        'Trainee',
        'Bachelor thesis',
        'Master thesis'
    ];

    
    const surveyJson = {
        elements: [{
            name: "Programme",
            title: "What programme do you study?",
            type: "dropdown",
            choices: majorList
            }, {
            name: "Job Type",
            title: "What types of job are you looking for?",
            type: "checkbox",
            choices: jobTypeList
        }]
    };
    const [modalOpen, setModalOpen] = useState(true);
    const [savedData, setSavedData] = useState(sessionStorage.getItem("my-data"));
    
    const openModal = () => {
        setModalOpen(true);
        setSavedData(null);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    function saveSurveyData (survey) {
        const data = survey.data;
        const data_json = JSON.stringify(data);
        sessionStorage.setItem("my-data", data_json);
        setSavedData(sessionStorage.setItem("my-data", data_json));
        setModalOpen(false);
    }

    const survey = new Model(surveyJson);
    survey.completeText = "Find";
    survey.showCompletedPage = false;
    survey.onComplete.add(saveSurveyData);

    survey.addNavigationItem({
        id: "sv-nav-clear-page",
        title: "Close",
        action: () => {
            closeModal();
        },
        css: "nav-button",
        innerCss: "sd-btn nav-input"
    });
    return (
         <div>
            <button className="button-open-questionnaire" onClick={openModal}>Open Questionnaire</button>
            {!savedData 
            && <Modal 
                    className='questionnaire-container'
                    isOpen={modalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Questionnaire Modal"
                >
                <Survey model={survey} />
            </Modal>}
        </div>
    );
}

export default Questionnaire;