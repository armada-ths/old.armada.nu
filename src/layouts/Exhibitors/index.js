import React, { useState } from 'react'
import ExhibitorList from '../../components/ExhibitorList'
import './index.scss'
/* Last edited by Nima 17-04-23 to add year alternatives */
const Exhibitors = props => {
    const currentYear = new Date().getFullYear()
    const [year, setYear] = useState(currentYear.toString()) //default year is current year
    const yearList = [
        currentYear.toString(),
        (currentYear - 1).toString(),
        (currentYear - 2).toString(),
    ]

    return (
        <>
            <div class='buttonContainer'>
                <button
                    onClick={() => {
                        setYear(yearList[0])
                    }}
                >
                    {yearList[0]}
                </button>
                <button
                    onClick={() => {
                        setYear(yearList[1])
                    }}
                >
                    {yearList[1]}
                </button>
                <button
                    onClick={() => {
                        setYear(yearList[2])
                    }}
                >
                    {yearList[2]}
                </button>
            </div>
            <div className='exhibitors-container'>
                <ExhibitorList {...props} year={year} />
            </div>
        </>
    )
}
export default Exhibitors
