import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
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

    // Dirty solution to set the recommended on load if they exist
    // WIP
    useEffect(() => {
        if (exhibitorsMap.length <= 0) return
        console.log('TEST', storedData)
        if (storedData == null) return
        setQuestionaireData(
            storedData?.Programme || null,
            storedData?.JobType || []
        )
    }, [exhibitorsMap])

    const majorList = [
        'Architecture',
        'Biotechnology',
        'Building Engineering',
        'Chemical Engineering',
        'Computer Science',
        'Electrical Engineering',
        'Engineering and Education',
        'Environmental & Sustainability Engineering',
        'Industrial Engineering',
        'Industrial Economics',
        'Information Technology',
        'Technical Mathematics',
        'Material design',
        'Mechanical Engineering',
        'Media Technology',
        'Medical Engineering',
        'Material & Product Design',
        'Physics',
        'Vehicle Engineering',
        'Urban Management Engineering',
        'Open',
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
            programme: 'Architecture',
            industries: [
                'Architecture',
                'Construction',
                'Property & Infrastructure',
            ],
        },
        {
            program: 'Biomedical Engineering',
            industries: [
                'Pharmaceutical',
                'Biotechnology',
                'Medical Technology',
                'Medical Engineering',
                'Chemical Science and Engineering',
            ],
        },
        {
            program: 'Building Engineering',
            industries: [
                'Architecture',
                'Construction',
                'Property & Infrastructure',
                'The Built Environment',
                'Management Consulting',
                'Mechanical Engineering',
            ],
        },
        {
            program: 'Chemical Engineering',
            industries: [
                'Chemical Science and Engineering',
                'Solid Mechanics',
                'Pharmaceutical',
                'Biotechnology',
                'Nuclear Power',
                'Energy Technology',
                'Nanotechnology',
                'Medical Engineering',
                'Medical Technology',
            ],
        },
        {
            program: 'Computer Science',
            industries: [
                'Simulation Technology',
                'Software Development',
                'Web Development',
                'Telecommunication',
                'IT Infrastructure',
                'Interaction Design',
                'IT Consulting',
                'Computer Science & IT',
                'Computer Science and Engineering',
                'Information and Communication Technology',
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
                'Electrical Engineering',
                'Telecommunication',
                'IT Infrastructure',
            ],
        },
        {
            program: 'Engineering and Education',
            industries: [
                'Research',
                'Pedagogy',
                'Retail',
                'Chemical Science and Engineering',
                'Engineering Physics',
                'IT Consulting',
                'IT Infrastructure',
                'Computer Science & IT',
                'Computer Science and Engineering',
                'Information and Communication Technology',
                'Environmental Engineering',
                'Environmental Sector',
                'Technology and Learning',
            ],
        },
        {
            program: 'Environmental & Sustainability Engineering',
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
                'Industry Engineering',
                'Wood-Processing Industry',
                'Steel Industry',
            ],
        },
        {
            program: 'Industrial Economics',
            industries: [
                'Management Consulting',
                'Insurance',
                'Finance',
                'Logistics & Supply Chain',
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
            program: 'Material Design',
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
            program: 'Physics',
            industries: [
                'Nuclear Power',
                'Energy Technology',
                'Nanotechnology',
                'Engineering Physics',
                'Mathematics',
                'Aerospace',
                'Research',
            ],
        },
        {
            program: 'Vehicle Engineering',
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
            program: 'Urban Management Engineering',
            industries: [
                'Construction',
                'Property & Infrastructure',
                'The Built Environment',
                'Research',
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
        industries: string[] | null,
        jobTypes: string[],
        allExhibitors: Exhibitor[]
    ) {
        return allExhibitors.reduce<Exhibitor[]>(
            (matchedExhibitors, exhibitor) => {
                // Check if the exhibitor has all the specified industries
                const hasSomeIndustry = industries?.some(industry =>
                    exhibitor.industries.some(
                        exhibitorIndustry => exhibitorIndustry.name === industry
                    )
                )

                const hasJobType = exhibitor.employments.some(employment =>
                    jobTypes.some(jobType => employment.name === jobType)
                )

                // If the exhibitor has all the specified industries, add it to the result array
                if (
                    (industries == null || hasSomeIndustry) &&
                    (jobTypes.length <= 0 || hasJobType)
                ) {
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

        localStorage.setItem(
            LOCAL_STORAGE_KEY,
            JSON.stringify({
                Programme: programme,
                JobType: jobTypes,
            })
        )

        setQuestionaireData(programme, jobTypes)
    }

    function setQuestionaireData(programme: string | null, jobTypes: string[]) {
        const industries =
            programme == null ? null : matchProgramToIndustries(programme)

        if (exhibitorsMap.length > 0) {
            setRecommendedExhibitors(
                matchIndustriesToExhibitors(industries, jobTypes, exhibitorsMap)
            )
        }
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
                        onAfterClose={() => {
                            setFormState(null)
                            setModalOpen(false)
                        }}
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
                                    <b style={{ textAlign: 'center' }}>
                                        Find the exhibitors that match you:
                                    </b>
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
                                            label='Close'
                                            style={{
                                                backgroundColor: '#999',
                                            }}
                                            onClick={() => setFormState(null)}
                                        />
                                        <PrimeButton
                                            label='Next'
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
