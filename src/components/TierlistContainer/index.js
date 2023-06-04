import React, { useState } from 'react'
import './index.scss'
//import Tierlistcard from './TierlistCard'
//import TierlistInfo from './TierlistCard/TierlistInfo'
function TierlistContainer() {
    const [hovered, setHovered] = useState(null) //We use this to track which list item is hovered over all the components
    return (
        <div class='teirCardContainer'>
            <div class='tierCard'>
                <div class='titleLayout'>
                    <div>Bronze</div>
                </div>
                <div class='tierCardInterior'>
                    <div class='cardDescription'>
                        Get started with the basics:
                    </div>
                    <div class='tierCardList'>
                        <div class='lineLayout'>
                            <p>✅</p>
                            <p>Booth of size 2x3 m</p>
                        </div>
                        <div class='lineLayout'>
                            <p>✅</p>
                            <p>Armada Transport</p>
                        </div>
                        <div class='lineLayout'>
                            <p>✅</p>
                            <p>Free Wifi</p>
                        </div>
                        <div class='lineLayout'>
                            <p>✅</p>
                            <p>Electricity</p>
                        </div>
                        <div class='lineLayout'>
                            <p>✅</p>
                            <p>Lunch tickets</p>
                        </div>
                        <div class='lineLayout'>
                            <p>✅</p>
                            <p>Exhibitor catalogue</p>
                        </div>
                        <div class='lineLayout'>
                            <p>✅</p>
                            <p>Host</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class='tierCard'>
                <div class='titleLayout'>
                    <div>Silver</div>
                </div>
                <div class='tierCardInterior'>
                    <div class='cardDescription'>
                        Everything in Bronze, plus:
                    </div>
                    <div class='tierCardList'>
                        <div class='lineLayout'>
                            <p>✅</p>
                            <p>Booth of size 2x4 m</p>
                        </div>
                        <div class='lineLayout'>
                            <p>✅</p>
                            <p>Banquet tickets</p>
                        </div>
                        <div class='lineLayout'>
                            <p>✅</p>
                            <p>Armada run competition</p>
                        </div>
                        <div class='lineLayout'>
                            <p>✅</p>
                            <p>Field visit or Panel discussion</p>
                        </div>
                        <div class='lineLayout'>
                            <p>✅</p>
                            <p>Premium spot for Silver partners</p>
                        </div>
                        <div class='lineLayout'>
                            <p>✅</p>
                            <p>
                                Marketed as Silver partner with both social
                                media and website
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class='tierCard'>
                <div class='titleLayout'>
                    <div>Gold</div>
                </div>
                <div class='tierCardInterior'>
                    <div class='cardDescription'>
                        Everything in Bronze, plus:
                    </div>
                    <div class='tierCardList'>
                        <div class='lineLayout'>
                            <p>✅</p>
                            <p>Booth of size 2x5 m</p>
                        </div>
                        <div class='lineLayout'>
                            <p>✅</p>
                            <p>Banquet tickets</p>
                        </div>
                        <div class='lineLayout'>
                            <p>✅</p>
                            <p>Armada run competition</p>
                        </div>
                        <div class='lineLayout'>
                            <p>✅</p>
                            <p>Field visit and Panel discussion</p>
                        </div>
                        <div class='lineLayout'>
                            <p>✅</p>
                            <p>Premium spot for Gold partners</p>
                        </div>
                        <div class='lineLayout'>
                            <p>✅</p>
                            <p>
                                Marketed as Main partner with exclusive
                                marketing on social media and website
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TierlistContainer
