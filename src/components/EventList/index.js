import React from "react";
import axios from "axios";

import "./eventlist.scss";
import queryString from "query-string";

import {ReactPageClick} from 'react-page-click';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ];

const Modal = ({onClose, ...rest}) => (
      <div>
        <div className="shade" />
        <ReactPageClick notify={onClose}>
          <div className="popup">
            <div className="content" {...rest} />
          </div>
        </ReactPageClick>
      </div>
    );

Modal.propTypes = {
      onClose: undefined
    };

class EventList extends React.Component {
    constructor(props) {
        super(props); // adopts parent qualities

        this.state = {
            events: [],  // json object
            showModal: false,
            eventId: undefined
        };
    }

    componentDidMount() {  // only called when eventpage is created or updated.
        axios.get('https://ais.armada.nu/api/events')  // fetch data witt promise (then) and res(ult)
          .then( (res)  => {
            const events = res.data;  // create variable and store result within parameter data
            this.setState({ events });  // component saves its own data
            // Get from url path the GET params ?id=number, to know what event to display
            let parsed = queryString.parse(location.search);
            if (parsed.id !== undefined ){
              this.setState({eventId: parsed.id, showModal:true, events});
          }
          });


    }

      hideModal = () => {
        this.setState({showModal: false, eventId: undefined});
      };

      showModal = (eventId) => {
        this.setState({showModal: true, eventId});

      };


    render() {
        let today = new Date();
        let comingEvents = this.state.events.filter(event => event.event_start * 1000 > today);
        let pastEvents = this.state.events.filter(event => event.event_start * 1000 < today);

        // get the event to display. Don't know behaviour when this.state.eventId = undefined
        let eventToDisplay = this.state.events.filter(event => event.id == this.state.eventId)[0];
        return (


            <div className="events">

            {this.state.showModal ? (
              <Modal onClose={this.hideModal}>
                <h3>{eventToDisplay.name} </h3>
                <h4>{eventToDisplay.location}</h4>
                <h5>{eventToDisplay.descripion_short}</h5>
              </Modal>
              ) : null}

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


                                <div className = "event-item" onClick={()=>this.showModal(event.id)}>
                                  <a href={"/events/?id="+event.id}> READ MORE</a>




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
