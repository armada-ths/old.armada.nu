import React, { useState, useEffect } from 'react'
import ExhibitorList from '../../components/ExhibitorList'
import './index.scss'
import Cat from '../../components/Cat'

/* Last edited by Nima 17-05-12 to add year alternatives */
/* This file loads the exhibitorlist component which pulls all the exhibitors from the AIS.
Don't display unless we've passed the final registration date if the current year is selected */
const Exhibitors = props => {
    const now = new Date() //current date
    const currentYear = now.getFullYear()
    const [year, setYear] = useState(currentYear.toString()) //default year is current year
    const yearList = [
        currentYear.toString(),
        (currentYear - 1).toString(),
        (currentYear - 2).toString(),
    ]
    const isAfterFinalReg = new Date() > new Date(currentYear, 8, 28)
    const [displayList, setDisplayList] = useState(false)
    const [displayCVFilter, setDisplayCVFilter] = useState(true) //This allows you to display the core values filters (green room and diversity room)
    return (
        <>
            <div className='buttonContainer'>
                <div
                    className={year === yearList[0] ? 'active' : ''}
                    onClick={() => {
                        setYear(yearList[0])
                        if (!isAfterFinalReg) {
                            setDisplayList(false)
                        }
                        setDisplayCVFilter(true)
                    }}
                >
                    {yearList[0]}
                </div>
                <div
                    className={year === yearList[1] ? 'active' : ''}
                    onClick={() => {
                        setYear(yearList[1])
                        setDisplayList(true)
                        setDisplayCVFilter(false)
                    }}
                >
                    {yearList[1]}
                </div>
                <div
                    className={year === yearList[2] ? 'active' : ''}
                    onClick={() => {
                        setYear(yearList[2])
                        setDisplayList(true)
                        setDisplayCVFilter(false) //If a previous year (in the future) still retains the information for gr and div room, then you can easily change this
                    }}
                >
                    {yearList[2]}
                </div>
            </div>
            <div className='exhibitors-container'>
                {displayList ? (
                    <ExhibitorList
                        {...props}
                        year={year}
                        showCV={displayCVFilter}
                    /> //Display the Exibitor list
                ) : (
                    <div class='tooEarly'>
                        <h1>Exhibitors</h1>
                        <p>
                            The exhibitors for this year will be posted after
                            all the companies have registered. Please check out
                            the{' '}
                            <a
                                onClick={() => {
                                    setYear(yearList[1])
                                    setDisplayList(true)
                                    setDisplayCVFilter(false)
                                }}
                            >
                                previous years exhibitors
                            </a>{' '}
                            in the meanwhile.
                        </p>
                        <Cat />
                    </div>
                )}
            </div>
        </>
    )
}
export default Exhibitors
