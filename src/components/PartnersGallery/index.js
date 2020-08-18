import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

import axios from 'axios'
import Loading from '../Loading'
import { Link } from 'gatsby'

const PartnersGallery = ({ mainOnly }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [partners, setPartners] = useState([])

    useEffect(() => {
        axios
            .get('https://ais.armada.nu/api/partners')
            .then(res => {
                setPartners(res.data)
            })
            .finally(() => setIsLoading(false))
    }, [])

    const isMain = partner => partner.is_main_partner

    const renderPartners = p => {
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
        (mainOnly && partners.filter(isMain).length > 0) || !mainOnly ? (
            <div className='partners-gallery'>
                <h1>Partners</h1>
                {renderPartners(partners.filter(isMain))}
                {mainOnly ? (
                    <p>
                        <span>Want to see your company here? </span>{' '}
                        <span>
                            Click <Link to='/partners'>here</Link> for
                            information about becoming a partner!
                        </span>
                    </p>
                ) : (
                    <>
                        <hr />
                        {renderPartners(
                            partners.filter(partner => !isMain(partner))
                        )}
                    </>
                )}
            </div>
        ) : (
            <></>
        )
    ) : (
        <></>
    )
}

PartnersGallery.propTypes = {
    mainOnly: PropTypes.bool,
}

export default PartnersGallery
