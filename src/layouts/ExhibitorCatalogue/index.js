import React from 'react'
import Page from '../../templates/page'
import './index.scss'
import ExhibitorCatalgueInfo from '../../components/ExhibitorCatalogueInfo'


const ExhibitorCatalogue = props => {
    return (
        <div className='exhibitor-catalogue-container'>
            <h1 id='information-for-exhibitors'>Armada Exhibitor Catalogue 2022</h1>
            <div className='page-container'>
                <Page {...props} />
            </div>
            <ExhibitorCatalgueInfo />
        </div>   
    )
}
export default ExhibitorCatalogue