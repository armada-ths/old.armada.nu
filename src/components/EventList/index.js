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
        axios.get('https://ais2.armada.nu/api/events')  // fetch data witt promise (then) and res(ult)
          .then( (res)  => {
            const events = res.data;  // create variable and store result within parameter data
            this.setState({ events });  // component saves its own data
          });
    }


    render() {
        let today = new Date();
        let comingEvents = this.state.events.filter(event => event.event_start * 1000 > today);
        let pastEvents = this.state.events.filter(event => event.event_start * 1000 < today);



        return (
            <div className="events">



                <div className="events-feed">
                    {
                    comingEvents.length > 0 ? (

                            <h2> Upcoming Events </h2>
                    )
                    :null }



                    {comingEvents.map(event => {
                            let date = new Date(event.event_start * 1000); //from seconds to milliseconds
                            let hours = date.getHours();
                            let minutes = "0" + date.getMinutes();


                            return (

                                <div className="line-spacing"> <hr/>

                                <div className="event-item">


                                    <div className="date-section">
                                        <h2>{date.getDate()}</h2>
                                        <h2>{monthNames[date.getMonth()]}</h2>
                                    </div>
                                    <div className="image-section">
                                        <img src={event.image_url}/>

                                    </div>
                                    <div className = "details-section">
                                        <h3 className ="name" >{event.name} </h3>
                                        <br/>
                                        <h4 className ="location" >Location: {event.location}</h4>
                                        <br/>
                                        <h4 className ="time" >Time: {hours + ':' + minutes.substr(-2)}</h4>
                                        <br/>
                                        <h6 className ="description" >{event.description_short}</h6>
                                    </div>

                                </div>

                                </div>

                            )

                        }
                    )}

                    { pastEvents.map (event => {
                            let date = new Date (event.event_start * 1000); //from seconds to milliseconds
                            let minutes = "0" + date.getMinutes();
                            let hours = date.getHours();



                            return (

                                <div className = "secondary-title">

                                <h2> Past Events </h2>
                                 <br/>
                                    <hr/>


                                <div className = "event-item">



                                    <div className = "date-section">
                                        <h2>{date.getDate() }</h2>
                                        <h2>{monthNames[date.getMonth()]}</h2>
                                    </div>
                                    <div className = "image-section">
                                        <img src = { event.image_url }/>

                                    </div>
                                    <div className = "details-section">
                                        <h3 className ="name" >{event.name} </h3>
                                        <br/>
                                        <h4 className ="location" >Location: {event.location}</h4>
                                        <br/>
                                        <h4 className ="time" >Time: {hours + ':' + minutes.substr(-2)}</h4>
                                        <br/>
                                        <h6 className ="description" >{event.description_short}</h6>
                                    </div>
                                </div>
                                    <hr/>
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

