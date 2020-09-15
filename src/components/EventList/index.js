import React, { useEffect } from 'react'
import axios from 'axios'
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query'
import './index.scss'
import Modal from '../Modal'
import { useState } from 'react'

const urlPropsQueryConfig = {
    eventId: { type: UrlQueryParamTypes.number, queryParam: 'eventId' },
}

const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
]

const EventList = props => {
    const [events, setEvents] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [eventId, setEventId] = useState(undefined)

    useEffect(() => {
        axios
            .get('https://ais.armada.nu/api/events') // fetch data witt promise (then) and res(ult)
            .then(res => {
                let events = res.data // create variable and store result within parameter data
                events.sort((a, b) => a.event_start - b.event_start)

                setEvents(events) // component saves its own data
                // Get from url path the GET params ?id=number, to know what event to display
                if (props.eventId !== undefined) {
                    setEventId(props.eventId)
                    setShowModal(true)
                }
            })
    })

    const updateEventId = eventId => {
        setShowModal(!showModal)
        setEventId(eventId)
        props.onChangeEventId(eventId)
    }

    const getOrdinalNum = n => {
        return (
            n +
            (n > 0
                ? ['th', 'st', 'nd', 'rd'][
                      (n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10
                  ]
                : '')
        )
    }

    const displayEvent = event => {
        let today = new Date()
        let eventdate = new Date(event.event_start * 1000)
        // let registration_end = new Date (event.registration_end * 1000);
        let minutes = '0' + eventdate.getMinutes()
        let hours = eventdate.getHours()
        let eventdate_end = new Date(event.event_end * 1000)
        let endminutes = '0' + eventdate_end.getMinutes()
        let endhours = eventdate_end.getHours()

        return (
            <Modal onClose={() => updateEventId(null)}>
                <div>
                    <div className='modalimage-event'>
                        <img
                            alt=''
                            className='event-picture'
                            src={event.image_url}
                        />
                    </div>
                    <div className='modalinfo'>
                        <h2 className='event-info'>{event.name}</h2>
                        <div className='modalbutton'>
                            {eventdate > today ? (
                                <a href={event.signup_link}>
                                    <button className='rsvpbutton'>
                                        {/* <span>SIGN UP BEFORE {getOrdinalNum(registration_end.getDate())} {monthNames[registration_end.getMonth()]}</span> */}
                                        <span>SIGN UP HERE</span>
                                    </button>
                                </a>
                            ) : (
                                <a href={event.signup_link}>
                                    <button className='rsvpclosed'>
                                        VIEW TICKET - SIGNUP CLOSED
                                    </button>
                                </a>
                            )}
                        </div>
                        <div className='modal-property-event'>
                            <div className='icon-group'>
                                <img
                                    alt=''
                                    className='icon'
                                    src='/assets/calendar-round.svg'
                                />
                                {eventdate.getDate() !==
                                eventdate_end.getDate() ? (
                                    <p>
                                        {' '}
                                        {eventdate.getDate() +
                                            '-' +
                                            eventdate_end.getDate() +
                                            ' ' +
                                            monthNames[
                                                eventdate.getMonth()
                                            ]}{' '}
                                    </p>
                                ) : (
                                    <p>
                                        {' '}
                                        {getOrdinalNum(eventdate.getDate()) +
                                            ' ' +
                                            monthNames[
                                                eventdate.getMonth()
                                            ]}{' '}
                                    </p>
                                )}
                            </div>
                            <div className='icon-group'>
                                <img
                                    alt=''
                                    className='icon'
                                    src='/assets/clock.svg'
                                />
                                <p className='time'>
                                    {' '}
                                    {hours +
                                        ':' +
                                        minutes.substr(-2) +
                                        '-' +
                                        endhours +
                                        ':' +
                                        endminutes.substr(-2)}
                                </p>
                            </div>
                            <div className='icon-group'>
                                <img
                                    alt=''
                                    className='icon'
                                    src='/assets/place.svg'
                                />
                                <p> {event.location}</p>
                            </div>
                        </div>
                        <div className='description-container'>
                            <div
                                className='description'
                                style={{ whiteSpace: 'pre-line' }}
                                dangerouslySetInnerHTML={{
                                    __html: event.description,
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className='modalbutton'>
                        {eventdate > today ? (
                            <a href={event.signup_link}>
                                <button className='rsvpbutton'>
                                    {/* <span>SIGN UP BEFORE {getOrdinalNum(registration_end.getDate())} {monthNames[registration_end.getMonth()]}</span> */}
                                    <span>SIGN UP HERE</span>
                                </button>
                            </a>
                        ) : (
                            <a href={event.signup_link}>
                                <button className='rsvpclosed'>
                                    VIEW TICKET - SIGNUP CLOSED
                                </button>
                            </a>
                        )}
                    </div>
                </div>
            </Modal>
        )
    }

    const getEventItem = event => {
        let date = new Date(event.event_start * 1000) //from seconds to milliseconds
        let minutes = '0' + date.getMinutes()
        let hours = date.getHours()

        let today = new Date()
        let eventdate = new Date(event.event_start * 1000)
        // let registration_end = new Date (event.registration_end * 1000);
        return (
            <div>
                <div
                    role='presentation'
                    className='event-item'
                    onClick={() => updateEventId(event.id)}
                >
                    <div className='image-section'>
                        <img alt='' src={event.image_url} />
                    </div>
                    <div className='details-section'>
                        <h3 className='event-name'>{event.name} </h3>
                        <div className='event-property'>
                            <img
                                alt=''
                                className='icon'
                                src='/assets/calendar-round.svg'
                            />
                            <p>
                                {' '}
                                {getOrdinalNum(date.getDate())}{' '}
                                {monthNames[date.getMonth()]}{' '}
                            </p>
                        </div>
                        <div className='event-property'>
                            <img
                                alt=''
                                className='icon'
                                src='/assets/place.svg'
                            />
                            <p> {event.location}</p>
                        </div>
                        <div className='event-property'>
                            <img
                                alt=''
                                className='icon'
                                src='/assets/clock.svg'
                            />
                            <p className='time'>
                                {' '}
                                {hours + ':' + minutes.substr(-2)}
                            </p>
                        </div>
                        <div className='modalbutton'>
                            {eventdate > today ? (
                                <button className='rsvpbutton'>
                                    {/* <span>SIGN UP BEFORE {getOrdinalNum(registration_end.getDate())} {monthNames[registration_end.getMonth()]}</span> */}
                                    <span>SIGN UP HERE</span>
                                </button>
                            ) : (
                                <button className='rsvpclosed'>
                                    VIEW TICKET - SIGNUP CLOSED
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        )
    }

    let today = new Date()
    let comingEvents = events.filter(event => event.event_start * 1000 > today)
    let pastEvents = events.filter(event => event.event_start * 1000 < today)
    // get the event to display. Don't know behaviour when this.state.eventId = undefined
    let eventToDisplay = events.filter(event => event.id === eventId)[0]

    return (
        <div className='events'>
            {showModal && displayEvent(eventToDisplay)}

            <div className='events-feed'>
                <div className='comingEvents'>
                    <h2> Upcoming Events </h2>
                    {comingEvents.length > 0 ? (
                        comingEvents.map(getEventItem)
                    ) : (
                        <p>Stay tuned!</p>
                    )}
                </div>
                <div className='thickline'>
                    <hr />
                </div>
                <div className='pastEvents'>
                    <h2> Past Events </h2>
                    <div className='pastEvent'>
                        {pastEvents.length > 0 ? (
                            pastEvents.map(getEventItem)
                        ) : (
                            <p>No past events</p>
                        )}
                    </div>
                </div>
                <div className='thickline'>
                    <hr />
                </div>
            </div>
        </div>
    )
}

EventList.propTypes = {
    eventId: PropTypes.number,
    onChangeEventId: PropTypes.func,
}

let toExport
if (global.window !== undefined) {
    toExport = addUrlProps({ urlPropsQueryConfig })(EventList)
} else {
    toExport = EventList
}
export default toExport
