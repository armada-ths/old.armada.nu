import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import './index.scss'
import Modal from '../Modal'
/* Events does not work currently. Check how the API calls are made */

/*const urlPropsQueryConfig = {
    eventId: { type: UrlQueryParamTypes.number, queryParam: 'eventId' },
}*/
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
] //There's gotta be a better way to do this? /Nima Also feel free to come document this file

class EventList extends React.Component {
    constructor(props) {
        super(props) // adopts parent qualities
        this.state = {
            events: [], // json object
            showModal: false,
            eventId: undefined,
        }
    }

    componentDidMount() {
        // only called when eventpage is created or updated.
        axios
            .get('https://ais.armada.nu/api/events') // fetch data witt promise (then) and res(ult)
            .then(res => {
                let events = res.data // create variable and store result within parameter data

                events.sort((a, b) => a.event_start - b.event_start)
                events.forEach(ev => {
                    let eventDate = new Date(ev.event_start * 1000)
                    console.log(eventDate.toString())
                    let factor = 3600
                    if (
                        eventDate.getMonth() <= 10 &&
                        eventDate.getDate() < 29
                    ) {
                        ev.event_start -= 2 * factor
                        ev.event_end -= 2 * factor
                        ev.registration_end -= 2 * factor
                    } else {
                        ev.event_start -= factor
                        ev.event_end -= factor
                        ev.registration_end -= factor
                    }
                })

                this.setState({ events }) // component saves its own data
                // Get from url path the GET params ?id=number, to know what event to display
                if (this.props.eventId !== undefined) {
                    this.setState({
                        eventId: this.props.eventId,
                        showModal: true,
                        events,
                    })
                }
            })
    }

    showModal = eventId => {
        this.setState({ showModal: !this.state.showModal, eventId })
        this.props.onChangeEventId(eventId)
    }

    getOrdinalNum = n => {
        return (
            n +
            (n > 0
                ? ['th', 'st', 'nd', 'rd'][
                      (n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10
                  ]
                : '')
        )
    }

    displayEvent = event => {
        let today = new Date()

        let eventdate = new Date(event.event_start * 1000)
        // let registration_end = new Date (event.registration_end * 1000);
        let minutes = '0' + eventdate.getMinutes()
        let hours = eventdate.getHours()
        let eventdate_end = new Date(event.event_end * 1000)
        let endminutes = '0' + eventdate_end.getMinutes()
        let endhours = eventdate_end.getHours()
        let open_for_signup = event.open_for_signup
        return (
            <Modal onClose={() => this.showModal(null)}>
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
                                <a href={event.signup_link}></a>
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
                                        {this.getOrdinalNum(
                                            eventdate.getDate()
                                        ) +
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
                            open_for_signup ? (
                                <a href={event.signup_link}>
                                    <button className='rsvpbutton'>
                                        {/* <span>SIGN UP BEFORE {this.getOrdinalNum(registration_end.getDate())} {monthNames[registration_end.getMonth()]}</span> */}
                                        <span>Sign up! </span>
                                    </button>
                                </a>
                            ) : (
                                <button className='rsvpclosed'>Full</button>
                            )
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

    getEventItem = event => {
        console.log(event)
        let date = new Date(event.event_start * 1000) //from seconds to milliseconds
        let minutes = '0' + date.getMinutes()
        let hours = date.getHours()

        let today = new Date()
        let eventdate = new Date(event.event_start * 1000)
        // let registration_end = new Date (event.registration_end * 1000);
        let open_for_signup = event.open_for_signup
        return (
            <div>
                <div
                    role='presentation'
                    className='event-item'
                    onClick={() => this.showModal(event.id)}
                >
                    {event.image_url && (
                        <div className='image-section'>
                            <img alt='' src={event.image_url} />
                        </div>
                    )}
                    <div className='details-section'>
                        <h4 className='event-name'>{event.name} </h4>
                        <div className='event-property'>
                            <img
                                alt='date'
                                className='icon'
                                src='/assets/date.png'
                            />
                            <p>
                                {' '}
                                {this.getOrdinalNum(date.getDate())}{' '}
                                {monthNames[date.getMonth()]}{' '}
                            </p>
                        </div>
                        <div className='event-property'>
                            <img
                                alt='location'
                                className='icon'
                                src='/assets/location.png'
                            />
                            <p> {event.location}</p>
                        </div>
                        <div className='event-property'>
                            <img
                                alt='time'
                                className='icon'
                                src='/assets/time.png'
                            />
                            <p className='time'>
                                {' '}
                                {hours + ':' + minutes.substr(-2)}
                            </p>
                        </div>
                        <div className='modalbutton'>
                            {eventdate > today ? (
                                open_for_signup ? (
                                    <button className='rsvpbutton-small'>
                                        {/* <span>SIGN UP BEFORE {this.getOrdinalNum(registration_end.getDate())} {monthNames[registration_end.getMonth()]}</span> */}
                                        <span>Sign up!</span>
                                    </button>
                                ) : (
                                    <button className='rsvpclosed'>Full</button>
                                )
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

    render() {
        let today = new Date()
        let comingEvents = this.state.events.filter(
            event => event.event_start * 1000 > today
        )
        let pastEvents = this.state.events.filter(
            event => event.event_start * 1000 < today
        )
        // get the event to display. Don't know behaviour when this.state.eventId = undefined
        let eventToDisplay = this.state.events.filter(
            event => event.id === this.state.eventId
        )[0]

        return (
            <div className='events'>
                {this.state.showModal
                    ? this.displayEvent(eventToDisplay)
                    : null}
                <div
                    aria-hidden={this.state.showModal ? true : false}
                    className='events-feed'
                >
                    <div className='comingEvents'>
                        <h2> Upcoming Events </h2>
                        {comingEvents.length > 0 ? (
                            comingEvents.map(this.getEventItem)
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
                                pastEvents.map(this.getEventItem)
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
}

EventList.propTypes = {
    eventId: PropTypes.number,
    onChangeEventId: PropTypes.func,
}
/*
let toExport
if (global.window !== undefined) {
    toExport = addUrlProps({ urlPropsQueryConfig })(EventList)
} else {
    toExport = EventList
}*/
export default EventList
