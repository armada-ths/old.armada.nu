import React from "react";
import axios from "axios";

//import "./partners.scss";

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
        return (
            <div className="events">
            <h2> Events </h2>
            <div className="events-table">
            {/*below :map = for-loop   translation: for every even*/}
            {this.state.events.map (event => {
                let date = new Date (event.event_start * 1000); //from seconds to milliseconds

                return (
                <div className = "event-item">
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
            )}

          )}

        </div>
            </div>
        );
    }

}

export default EventList;
