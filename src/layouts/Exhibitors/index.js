import React, { useState, useEffect } from 'react'
import ExhibitorList from '../../components/ExhibitorList'
import './index.scss'
/* Last edited by Nima 17-04-23 to add year alternatives */
const Exhibitors = props => {
    const now = new Date() //current date
    const currentYear = now.getFullYear()
    const [year, setYear] = useState(currentYear.toString()) //default year is current year
    const yearList = [
        currentYear.toString(),
        (currentYear - 1).toString(),
        (currentYear - 2).toString(),
    ]
    const [isAfterFinalReg, setAfterFinalReg] = useState(false)
    useEffect(() => {
        const currentDate = new Date()
        const finalRegistration = new Date(currentYear, 8, 28) //Notice! This is the Final registration date. After this date we expect the companies to be in AIS
        setAfterFinalReg(currentDate > finalRegistration)
        console.log(currentDate > finalRegistration)
    }, [])
    const [displayList, setDisplayList] = useState(false)
   
    return (
        <>
            <div className='buttonContainer'>
                <div
                    className={year === yearList[0] ? 'active' : ''}
                    onClick={() => {
                        setYear(yearList[0])
                        setDisplayList(true)
                    }}
                >
                    {yearList[0]}
                </div>
                <div
                    className={year === yearList[1] ? 'active' : ''}
                    onClick={() => {
                        setYear(yearList[1])
                        setDisplayList(false)
                    }}
                >
                    {yearList[1]}
                </div>
                <div
                    className={year === yearList[2] ? 'active' : ''}
                    onClick={() => {
                        setYear(yearList[2])
                        setDisplayList(false)
                    }}
                >
                    {yearList[2]}
                </div>
            </div>
            <div className='exhibitors-container'>
                <ExhibitorList {...props} year={year} />
    
            </div>
        </>
    )
}
export default Exhibitors
