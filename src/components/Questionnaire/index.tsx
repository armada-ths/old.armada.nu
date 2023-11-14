import React, { useState, useEffect } from 'react'
import { Model } from 'survey-core'
import Modal from 'react-modal'
import 'survey-core/defaultV2.min.css'
import './index.scss'
import Fuse from 'fuse.js'
import { Dropdown } from 'primereact/dropdown'
import { MultiSelect } from 'primereact/multiselect'
import { Button as PrimeButton } from 'primereact/button'
import 'primereact/resources/themes/tailwind-light/theme.css'
import 'primereact/resources/primereact.min.css'
import { Exhibitor } from '@/components/Map/types'
import { RiSurveyLine } from 'react-icons/ri'
import { window } from 'browser-monads-ts'

const LOCAL_STORAGE_KEY = 'survey_data'
interface SurveryData {
    Programme: string
    JobType: string[]
}

const Questionnaire = ({
    setShowButtons,
    setRecommendedExhibitors,
    exhibitorsMap,
}: {
    setShowButtons: (value: boolean) => void
    setRecommendedExhibitors: (exhibitors: any) => void
    exhibitorsMap: Exhibitor[]
}) => {
    const rawStoredData = localStorage.getItem(LOCAL_STORAGE_KEY)
    const storedData = (
        rawStoredData ? JSON.parse(rawStoredData) : null
    ) as SurveryData | null

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

    function matchProgramToIndustries(program: string) {
        const results = fuse.search(program)
        const industries = results.map(result => result.item.industries).flat()
        return industries
    }

    function matchIndustriesToExhibitors(
        industries: string[],
        allExhibitors: Exhibitor[]
    ) {
        console.log(allExhibitors)
        return allExhibitors.reduce<Exhibitor[]>(
            (matchedExhibitors, exhibitor) => {
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
            },
            []
        )
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
    const [width, setWidth] = useState<number>()
    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    const [modalOpen, setModalOpen] = useState(storedData == null)

    console.log('TEST', exhibitorsMap)

    const openModal = () => {
        setModalOpen(true)
        setShowButtons(false)
        setFormState(0)
    }

    const closeModal = () => {
        setModalOpen(false)
        setShowButtons(true)
    }

    const [formState, setFormState] = useState<number | null>(
        storedData == null ? 0 : null
    )
    const [programme, setProgramme] = useState<string | null>(
        storedData?.Programme || null
    )
    const [jobTypes, setJobTypes] = useState<string[]>(
        storedData?.JobType || []
    )

    function finishQuestionnaire() {
        setFormState(null)

        if (programme == null) return

        localStorage.setItem(
            LOCAL_STORAGE_KEY,
            JSON.stringify({
                Programme: programme,
                JobType: jobTypes,
            })
        )

        const industries = matchProgramToIndustries(programme)

        setRecommendedExhibitors(
            industries &&
                exhibitorsMap.length > 0 &&
                matchIndustriesToExhibitors(industries, exhibitorsMap)
        )
        setModalOpen(false)
    }

    return (
        <div>
            {formState == null && (
                <>
                    {width && width > 768 ? (
                        <button
                            className='button-open-questionnaire'
                            onClick={openModal}
                        >
                            Find Recommendations
                        </button>
                    ) : (
                        <RiSurveyLine
                            className='button-open-questionnaire'
                            onClick={openModal}
                            id='mobile'
                        />
                    )}
                </>
            )}
            {formState != null && (
                <div className='q-top-container' style={{ zIndex: 1000 }}>
                    <Modal
                        className='questionnaire-container'
                        isOpen={modalOpen}
                        onRequestClose={closeModal}
                        contentLabel='Questionnaire Modal'
                        shouldCloseOnOverlayClick={true}
                        style={{
                            overlay: {
                                backgroundColor: '#0006',
                            },
                            content: {
                                display: 'flex',
                                borderColor: '#ccc',
                                borderStyle: 'solid',
                                borderWidth: '2px',
                            },
                        }}
                    >
                        <div
                            style={{
                                flex: 1,
                                rowGap: '1rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingLeft: '1rem',
                                paddingRight: '1rem',
                            }}
                        >
                            {formState == 0 ? (
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '100%',
                                        maxWidth: '300px',
                                    }}
                                >
                                    <p
                                        style={{
                                            fontSize: '15px',
                                            color: '#555',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Pick the programme that you are studying
                                    </p>
                                    <Dropdown
                                        style={{
                                            width: '100%',
                                            maxWidth: '300px',
                                            marginBottom: '1rem',
                                        }}
                                        placeholder='Select a programme'
                                        value={programme}
                                        onChange={event =>
                                            setProgramme(event.value)
                                        }
                                        options={majorList}
                                    />
                                    <div
                                        style={{
                                            display: 'flex',
                                            columnGap: '1rem',
                                        }}
                                    >
                                        <PrimeButton
                                            label='Next'
                                            onClick={() =>
                                                setFormState(formState + 1)
                                            }
                                        />
                                        <PrimeButton
                                            label='Close'
                                            onClick={() =>
                                                setFormState(formState + 1)
                                            }
                                        />
                                    </div>
                                </div>
                            ) : formState == 1 ? (
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '100%',
                                        maxWidth: '300px',
                                    }}
                                >
                                    <p
                                        style={{
                                            fontSize: '15px',
                                            color: '#555',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Select your job type interest
                                    </p>
                                    <MultiSelect
                                        className='[&>div>div]:flex-wrap'
                                        style={{
                                            width: '100%',
                                            maxWidth: '300px',
                                            marginBottom: '1rem',
                                        }}
                                        placeholder='Select job types'
                                        value={jobTypes}
                                        onChange={event =>
                                            setJobTypes(event.value)
                                        }
                                        options={jobTypeList}
                                        display='chip'
                                    />
                                    <PrimeButton
                                        label='Finish'
                                        onClick={finishQuestionnaire}
                                    />
                                </div>
                            ) : null}
                        </div>
                    </Modal>
                </div>
            )}
        </div>
    )
}

export default Questionnaire
