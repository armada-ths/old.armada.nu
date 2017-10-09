import React from "react";
import axios from "axios";
import "./eventlist.scss";

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ];

class EventList extends React.Component {
    constructor(props) {
        super(props); // adopts parent qualities

        this.state = {
            events: []  // json object
        };
    }

    componentDidMount() {  // only called when eventpage is created or updated.
        axios.get('https://ais.armada.nu/api/events')  // fetch data witt promise (then) and res(ult)
          .then( (res)  => {
            const events = res.data;  // create variable and store result within parameter data
            this.setState({ events });  // component saves its own data
          });
    }


    render() {
       let today = new Date();
      // console.error(today)
      // {today.toString()}
      // {this.state.events.map(event => (<li>{event.event_start} {event.name} </li>))}

      let comingEvents = this.state.events.filter(event => event.event_start*1000 > today)
        let pastEvents = this.state.events.filter(event => event.event_start*1000 < today)

        return (
            <div className="events">

                <h2> </h2>

                <div className="events-table">

{/*

                        {comingEvents.map(event => (
                        <li>{new Date(event.event_start*1000).toISOString()} {event.event_start} {event.name} </li>))}

                        <h2> Past Events </h2>
                        {pastEvents.map(event => (<li>{new Date(event.event_start*1000).toISOString()} {event.name} </li>))}*/}

                    { comingEvents.map (event => {
                        let date = new Date (event.event_start * 1000); //from seconds to milliseconds

                            return (

                            <div className = "event-item">

                                <h2> Upcoming Events </h2>

                                <div className = "date-section">
                                    <h2>{date.getDate() }</h2>
                                    <h2>{monthNames[date.getMonth()]}</h2>
                                </div>
                                <div className = "image-section">
                                    <img src = { event.image_url }/>

                                </div>
                                <div className = "details-section">
                                    <h3>{event.name} </h3>
                                    <h4>{event.location}</h4>
                                    <h4>{date.toTimeString()}</h4>
                                    <h5>{event.descripion_short}</h5>
                                </div>
                            </div>
                                )
                    }
                    )}
                    { pastEvents.map (event => {
                            let date = new Date (event.event_start * 1000); //from seconds to milliseconds

                            return (

                                <div className = "event-item">

                                    <h2> Past Events </h2>

                                    <div className = "date-section">
                                        <h2>{date.getDate() }</h2>
                                        <h2>{monthNames[date.getMonth()]}</h2>
                                    </div>
                                    <div className = "image-section">
                                        <img src = { event.image_url }/>

                                    </div>
                                    <div className = "details-section">
                                        <h3>{event.name} </h3>
                                        <h4>{event.location}</h4>
                                        <h4>{date.toTimeString()}</h4>
                                        <h5>{event.descripion_short}</h5>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
        </div>
        )
    }

}

export default EventList;

