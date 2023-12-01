import React from 'react'
import './timeline.scss'

const images = [
    {
        pmImage: '/assets/images/header-images/home.jpg',
        fairImage: '/assets/thefair.jpg',
        banquetImage: '/assets/images/armada-banquet.jpg',
        pgImage: '/assets/images/projectgroup-armada.jpg',
        summerImage: '/assets/images/summer.jpg',
        arunImage: '/assets/images/armada_run.jpg',
        writeImage: '/assets/images/write.jpg',
        kickOutImage: '/assets/images/kickOut.jpg',
        salesOpenImage: '/assets/images/salesOpen.jpg',
        hostImage: '/assets/images/host.jpg',
        completeImage: '/assets/images/complete.jpg',
        kickOffImage: '/assets/images/kickOff.jpg',
        salesEndImage: '/assets/images/salesEnd.jpg',
        otImage: '/assets/images/ot.jpg',
    },
]

const Timeline = () => {
    return (
        <div>
            <h2>A year with Armada</h2>
            <div className='timeline'>
                <div className='containerleft leftleft'>
                    <div className='contentt'>
                        <h4>November</h4>
                        <p id='p_text'>New project manager is chosen.</p>
                        <div id='images_PM'>
                            <img
                                alt=''
                                id='timeline_pic_PM'
                                src={images[0].pmImage}
                            />
                        </div>
                    </div>
                </div>
                <div className='containerright rightright'>
                    <div className='contentt'>
                        <h4>January</h4>
                        <p id='p_text'>The Project Group is recruited.</p>
                        <div id='images'>
                            <img
                                alt=''
                                id='timeline_pic'
                                src={images[0].pgImage}
                            />
                        </div>
                    </div>
                </div>
                <div className='containerleft leftleft'>
                    <div className='contentt'>
                        <h4>April</h4>
                        <p id='p_text'>Sales period opens.</p>
                        <div id='images'>
                            <img
                                alt=''
                                id='timeline_pic'
                                src={images[0].salesOpenImage}
                            />
                        </div>
                    </div>
                </div>
                <div className='containerright rightright'>
                    <div className='contentt'>
                        <h4>April</h4>
                        <p id='p_text'>The Operation Team is recruited.</p>
                        <div id='images'>
                            <img
                                alt=''
                                id='timeline_pic'
                                src={images[0].otImage}
                            />
                        </div>
                    </div>
                </div>
                <div className='containerleft leftleft'>
                    <div className='contentt'>
                        <h4>May</h4>
                        <p id='p_text'>Sales period closes.</p>
                        <div id='images'>
                            <img
                                alt=''
                                id='timeline_pic'
                                src={images[0].salesEndImage}
                            />
                        </div>
                    </div>
                </div>
                <div className='containerright rightright'>
                    <div className='contentt'>
                        <h4>June-August</h4>
                        <p id='p_text'>Summer break!</p>
                        <div id='images'>
                            <img
                                alt=''
                                id='timeline_pic'
                                src={images[0].summerImage}
                            />
                        </div>
                    </div>
                </div>
                <div className='containerleft leftleft'>
                    <div className='contentt'>
                        <h4>August</h4>
                        <p id='p_text'>Company registration closes.</p>
                        <div id='images'>
                            <img
                                alt=''
                                id='timeline_pic'
                                src={images[0].completeImage}
                            />
                        </div>
                    </div>
                </div>
                <div className='containerright rightright'>
                    <div className='contentt'>
                        <h4>September</h4>
                        <p id='p_text'>Host recruitment.</p>
                        <div id='images'>
                            <img
                                alt=''
                                id='timeline_pic'
                                src={images[0].hostImage}
                            />
                        </div>
                    </div>
                </div>
                <div className='containerleft leftleft'>
                    <div className='contentt'>
                        <h4>September</h4>
                        <p id='p_text'>
                            Grand kick-off for everyone in Armada.
                        </p>
                        <div id='images'>
                            <img
                                alt=''
                                id='timeline_pic'
                                src={images[0].kickOffImage}
                            />
                        </div>
                    </div>
                </div>
                <div className='containerright rightright'>
                    <div className='contentt'>
                        <h4>Oktober/November</h4>
                        <p id='p_text'>Event weeks.</p>
                        <div id='images'>
                            <img
                                alt=''
                                id='timeline_pic'
                                src={images[0].arunImage}
                            />
                        </div>
                    </div>
                </div>
                <div className='containerleft leftleft'>
                    <div className='contentt'>
                        <h4>November</h4>
                        <p id='p_text'>Armada Fair.</p>
                        <div id='images'>
                            <img
                                alt=''
                                id='timeline_pic'
                                src={images[0].fairImage}
                            />
                        </div>
                    </div>
                </div>
                <div className='containerright rightright'>
                    <div className='contentt'>
                        <h4>November</h4>
                        <p id='p_text'>Armada Banquet.</p>
                        <div id='images'>
                            <img
                                alt=''
                                id='timeline_pic'
                                src={images[0].banquetImage}
                            />
                        </div>
                    </div>
                </div>
                <div className='containerleft leftleft'>
                    <div className='contentt'>
                        <h4>December</h4>
                        <p id='p_text'>Armada Grand Kick-out.</p>
                        <div id='images'>
                            <img
                                alt=''
                                id='timeline_pic'
                                src={images[0].kickOutImage}
                            />
                        </div>
                    </div>
                </div>
                <div className='containerright rightright'>
                    <div className='contentt'>
                        <h4>December</h4>
                        <p id='p_text'>Project Group post-evaluation.</p>
                        <div id='images'>
                            <img
                                alt=''
                                id='timeline_pic'
                                src={images[0].writeImage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline
