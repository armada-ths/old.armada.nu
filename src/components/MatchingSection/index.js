import React, { useEffect, useState } from 'react'
import Loading from '../Loading'
import axios from 'axios'
import MatchingQuestion from './MatchingQuestion'
import MatchingWelcomeScreen from './MatchingWelcomeScreen'
import LoadingText from '../LoadingText'

import './index.scss'

const ais = 'https://ais.armada.nu/'

const MatchingSection = () => {
    const [matchResult, setMatchResult] = useState(null)
    const [showMore, setShowMore] = useState(false)
    const [options, setOptions] = useState([])
    const [industries, setIndustries] = useState([])
    const [values, setValues] = useState([])
    const [competences, setCompetences] = useState([])
    const [employments, setEmployments] = useState([])
    const [locations, setLocations] = useState([])
    const [benefits, setBenefits] = useState([])
    const [selectOptions, setSelectOptions] = useState(null)
    const [isHiding, setIsHiding] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [started, setStarted] = useState(false)
    const [optionIndex, setOptionIndex] = useState(0)
    const [currentOption, setCurrentOption] = useState({})
    const [weights, setWeights] = useState([5, 5, 5, 5, 5])

    useEffect(() => {
        axios
            .get('https://ais.armada.nu/api/matching/choices') // fetch data witt promise (then) and res(ult)
            .then(res => {
                setOptions(res.data.options) // create variable and store result within parameter data
                setCurrentOption(res.data.options[0])
            })
            .catch(() => {
                alert('Failed to get data. Try again later.')
            })
    }, [])

    const postData = (url, data) => {
        axios
            .post(
                `https://cors-anywhere.herokuapp.com/${url}`,
                JSON.stringify(data),
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            )
            .then(json => {
                setMatchResult(json)
            })
            .catch(function () {
                alert('Matching failed! Please try again later')
                matchagain()
            })
    }

    const submit = () => {
        if (
            industries.length === 0 &&
            values.length === 0 &&
            employments.length === 0 &&
            locations.length === 0 &&
            competences.length === 0
        ) {
            alert(
                'You have to select at least one option for at least one question!'
            )
        } else {
            postData('https://ais.armada.nu/api/matching/', {
                industries: {
                    answer: industries.map(i => i.id),
                    weight: weights[1],
                },
                values: { answer: values.map(i => i.id), weight: weights[0] },
                employments: {
                    answer: employments.map(i => i.id),
                    weight: weights[3],
                },
                locations: {
                    answer: locations.map(i => i.id),
                    weight: weights[4],
                },
                competences: {
                    answer: competences.map(i => i.id),
                    weight: weights[2],
                },
                cities: { answer: 'Stockholm', weight: 0 },
                response_size: 4,
            })
            setIsHiding(true)
        }
    }

    const matchagain = () => {
        setIsHiding(false)
        setShowMore(false)
        setIndustries([])
        setValues([])
        setEmployments([])
        setLocations([])
        setCompetences([])
        setMatchResult(null)
        setOptionIndex(0)
        setWeights([5, 5, 5, 5, 5])
        setCurrentOption(options[0])
    }

    const createStars = similarity => {
        return (
            <div className='star-ratings-css'>
                <div
                    className='star-ratings-css-top'
                    style={{ width: `${similarity * 100}%` }}
                >
                    <i className='fa-star-icon'></i>
                    <i className='fa-star-icon'></i>
                    <i className='fa-star-icon'></i>
                    <i className='fa-star-icon'></i>
                    <i className='fa-star-icon'></i>
                </div>
                <div className='star-ratings-css-bottom'>
                    <i className='fa-star-icon'></i>
                    <i className='fa-star-icon'></i>
                    <i className='fa-star-icon'></i>
                    <i className='fa-star-icon'></i>
                    <i className='fa-star-icon'></i>
                </div>
            </div>
        )
    }

    const carousel = option => {
        return (
            <div>
                <div className='wrapper'>
                    <div className='matching-question-card'>
                        <MatchingQuestion
                            onSubmit={() => submit()}
                            question={option.question}
                            nextDisabled={optionIndex === options.length - 1}
                            prevDisabled={optionIndex === 0}
                            prevClick={prevOption}
                            nextClick={nextOption}
                            answers={option.answers}
                            handleChange={handleChange(optionIndex)}
                            preSelected={getResult(optionIndex)}
                            onWeightChange={onWeightChange}
                            index={optionIndex}
                            weight={weights[optionIndex]}
                        />
                    </div>
                </div>
            </div>
        )
    }

    const createJobs = exhibitor_id => {
        let exhibitor = match_result.exhibitors[exhibitor_id]
        let array = exhibitor.employments.map(item => item.name)
        return array.join(', ')
    }

    const createCard = (result, best) => {
        let exhibitor_id = result.exhibitor_id
        let exhibitor = match_result.exhibitors[exhibitor_id]
        //var textrating = Math.round(best[i].similarity*100);
        var background = {
            backgroundImage: `url('${ais}${exhibitor.logo_squared})`,
        }

        if (best) {
            var dynamicclass = 'corner gold'
            var match = 'Best'
        } else {
            dynamicclass = 'corner'
            match = 'Match'
        }

        return (
            <div className='row'>
                <div className='example-1 card card-hover-disabled'>
                    <div className='wrapper' style={background}>
                        <div className={dynamicclass}>
                            <span className='corner-title'>{match}</span>

                            <span className='stars'>
                                {createStars(result.similarity)}
                            </span>
                            {/* <span >{textrating + '% match'}</span> */}
                        </div>
                    </div>
                    <div className='data'>
                        <div className='content'>
                            <div className='matching-details'>
                                {presentMatchDetails(exhibitor_id)}
                            </div>
                            <h1 className='title'>{exhibitor.name}</h1>
                            <p className='textcard'>{exhibitor.about}</p>
                            <p className='text jobs'>
                                <br />
                                {createJobs(exhibitor_id)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const presentMatchDetails = exhibitor_id => {
        var categories = [
            'competences',
            'industries',
            'employments',
            'values',
            'locations', //, 'cities'
        ]

        var similarities = match_result.similarities
        var mapped = {}

        // convert similatiries object to mapped structure
        // { 'category': { exhibitor_id: similarity_score, ... } }
        categories.forEach(cat => {
            mapped[cat] = {}
            similarities[cat].forEach(result => {
                mapped[cat][result.exhibitor_id] = result.similarity
            })
        })

        var toUpper = lower =>
            lower.charAt(0).toUpperCase() + lower.substring(1)

        var matchingCat = categories.filter(cat => mapped[cat][exhibitor_id]) // find similarity categories where exhibitor_id exists

        return [
            <div key={1}>
                {matchingCat.map((cat, i) => (
                    <div key={i}>{toUpper(cat)}</div>
                ))}
            </div>,
            <div className='score-bar-container' key={2}>
                {matchingCat.map((cat, i) => {
                    var style = {
                        background: '#00d790',
                        width: mapped[cat][exhibitor_id] * 100 + '%',
                    }
                    return (
                        <div key={i} style={style}>
                            match
                        </div>
                    )
                })}
            </div>,
        ]
    }

    const presentMatches = () => {
        var listitems = []
        if (match_result) {
            for (let i = 0; i < match_result.similarities.total.length; i++) {
                listitems.push(
                    createCard(match_result.similarities.total[i], i === 0)
                )
            }
            return listitems
        } else {
            return <LoadingText />
        }
    }

    const prevOption = () => {
        const prevIndex = optionIndex - 1
        setCurrentOption(options[prevIndex])
        setOptionIndex(prevIndex)
    }

    const nextOption = () => {
        setIsHiding(true)
        const nextIndex = optionIndex + 1
        setCurrentOption(options[nextIndex])
        setOptionIndex(nextIndex)
        setIsHiding(false)
    }

    const onWeightChange = (index, value) => {
        const newWeights = weights
        newWeights[index] = Number(value) // Make sure it's a number
        setWeights(newWeights)
    }

    const presentMoreMatches = () => {
        var listitems = []
        if (!match_result) return null

        var similarities = match_result.similarities
        // skip exbihitor in total category, they are already shown
        var skip = similarities.total.map(result => result.exhibitor_id)

        for (var cat in similarities) {
            if (cat === 'cities') {
                continue
            }

            similarities[cat].forEach(result => {
                if (skip.indexOf(result.exhibitor_id) >= 0) return

                skip.push(result.exhibitor_id)
                listitems.push(createCard(result, false))
            })
        }

        return listitems
    }

    const handleChange = index => {
        return function (value) {
            if (index === 0) {
                setValues(value)
            }
            if (index === 1) {
                setIndustries(value)
            }
            if (index === 2) {
                setCompetences(value)
            }
            if (index === 3) {
                setEmployments(value)
            }
            if (index === 4) {
                setLocations(value)
            }
        }
    }

    const handleClick = () => {
        setStarted(!started)
    }

    const getResult = index => {
        let res = []
        switch (index) {
            case 0:
                res = values
                break
            case 1:
                res = industries
                break
            case 2:
                res = competences
                break
            case 3:
                res = employments
                break
            case 4:
                res = locations
                break
        }
        return res
    }

    const renderQuestions = () => {
        return started === true && isLoading === false ? (
            carousel(currentOption)
        ) : (
            <MatchingWelcomeScreen handleClick={handleClick} />
        )
    }

    return (
        <div>
            <div className='questions'>
                {isHiding ? presentMatches() : renderQuestions()}
                {isLoading && <Loading />}
                {match_result && (
                    <div className='trycontainer'>
                        <button className='match' onClick={() => matchagain()}>
                            Try matching again!
                        </button>
                    </div>
                )}
                <br />
                <br />
                <br />
                <br />
                {match_result && show_more ? (
                    <div>
                        {presentMoreMatches()}
                        <div className='trycontainer'>
                            <button
                                className='match'
                                onClick={() => matchagain()}
                            >
                                Try matching again!
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className='trycontainer'>
                        <button
                            className='match'
                            onClick={() => setShowMore(true)}
                        >
                            Show more companies
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MatchingSection
