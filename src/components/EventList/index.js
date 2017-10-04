import React from "react";
import axios from "axios";

//import "./partners.scss";

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
      let today = new Date()
      // console.error(today)
      // {today.toString()}
      // {this.state.events.map(event => (<li>{event.event_start} {event.name} </li>))}

      let commingEvents = this.state.events.filter(event => event.event_start*1000 > today)
      let pastEvents = this.state.events.filter(event => event.event_start*1000 < today)

        return (
            <div className="events">
              <h1> Events </h1>
              <div className="events-table">
              <h2> Comming Events </h2>

              {commingEvents.map(event => (
                <li>{new Date(event.event_start*1000).toISOString()} {event.event_start} {event.name} </li>))}

              <h2> Past Events </h2>
              {pastEvents.map(event => (<li>{new Date(event.event_start*1000).toISOString()} {event.name} </li>))}

        </div>
            </div>
        );
    }

}

export default EventList;
