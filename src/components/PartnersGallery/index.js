import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

import axios from 'axios'
import Loading from '../Loading'

const PartnersGallery = ({ mainOnly }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [partners, setPartners] = useState([])

    useEffect(() => {
        /*
        axios
            .get('https://ais.armada.nu/api/partners')
            .then(res => {
                setPartners(res.data)
            })
            .finally(() => setIsLoading(false))
        */

        //TODO Remove test code and uncomment the block above
        axios
            .get('https://ais.armada.nu/api/exhibitors?year=2019')
            .then(res => {
                setPartners(
                    res.data.splice(37, 25).map((partner, i) => {
                        return {
                            id: partner.id,
                            name: partner.name,
                            logo_url:
                                'https://ais.armada.nu' +
                                    partner.logo_squared ??
                                partner.logo_freesize,
                            link_url: partner.company_website,
                            is_main_partner: i < 5,
                        }
                    })
                )
            })
            .finally(() => setIsLoading(false))
    }, [])

    const renderPartnersTable = p => {
        return (
            <div className='partners-table'>
                {p.map((partner, i) => (
                    <a
                        key={i}
                        href={partner.link_url}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img
                            src={partner.logo_url}
                            alt={partner.name}
                            className={
                                partner.is_main_partner ? 'main-partner' : ''
                            }
                        />
                    </a>
                ))}
            </div>
        )
    }

    return isLoading ? (
        <Loading />
    ) : partners.length > 0 ? (
        <div className='partners-gallery'>
            <h1>Main partners</h1>
            {renderPartnersTable(
                partners.filter(partner => partner.is_main_partner)
            )}
            {!mainOnly && (
                <>
                    <hr />
                    <h2>Partners</h2>
                    {renderPartnersTable(
                        partners.filter(partner => !partner.is_main_partner)
                    )}
                </>
            )}
        </div>
    ) : (
        <></>
    )
}

PartnersGallery.propTypes = {
    mainOnly: PropTypes.bool
}

export default PartnersGallery
