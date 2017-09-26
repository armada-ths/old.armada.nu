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
        return (
            <div className="events">  //jsx html-ish
            <h2> Events </h2>
            <div className="events-table">
            // below :map = for-loop   translation: for every even
            {this.state.events.map(event =>(
              <p>{event.name}      {// read code and not print a string
              }
              </p>
            )

          )}

        </div>
            </div>
        );
    }

}

export default EventList;
