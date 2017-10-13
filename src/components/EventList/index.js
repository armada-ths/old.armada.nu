import React from "react";
import axios from "axios";

import "./eventlist.scss";

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
            showModal: false
        };
    }

    componentDidMount() {  // only called when eventpage is created or updated.
        axios.get('https://ais.armada.nu/api/events')  // fetch data witt promise (then) and res(ult)
          .then( (res)  => {
            const events = res.data;  // create variable and store result within parameter data
            this.setState({ events });  // component saves its own data
          });
    }

      hideModal = () => {
        this.setState({showModal: false});
      };

      showModal = () => {
        this.setState({showModal: true});
      };


    render() {
        let today = new Date();
        let comingEvents = this.state.events.filter(event => event.event_start * 1000 > today);
        let pastEvents = this.state.events.filter(event => event.event_start * 1000 < today);
        const {showModal} = this.state;



        return (


            <div className="events">



                <div className="events-table">
                    {
                    comingEvents.length > 0 ? (

                            <h2> Upcoming Events </h2>
                    )
                    :null }



                    {comingEvents.map(event => {
                            let date = new Date(event.event_start * 1000); //from seconds to milliseconds

                            return (

                                <div className="event-item">


                                    <div className="date-section">
                                        <h2>{date.getDate()}</h2>
                                        <h2>{monthNames[date.getMonth()]}</h2>
                                    </div>
                                    <div className="image-section">
                                        <img src={event.image_url}/>

                                    </div>
                                    <div className="details-section">
                                        <div className="button">
                                          <h3 >{event.name} </h3>
                                        </div>
                                        <h4>{event.location}</h4>
                                        <h4>moment.locale()</h4>
                                        <h4>{date.toISOString()}</h4>
                                        <h4>{event.description_short}</h4>
                                    </div>
                                </div>
                            )
                        }
                    )}


                    { pastEvents.map (event => {
                            let date = new Date (event.event_start * 1000); //from seconds to milliseconds

                            return (

                                <div className = "secondary-title">

                                <h2> Past Events </h2>

                                {showModal ? (
                                  <Modal onClose={this.hideModal}>
                                    <h3>{event.name} </h3>
                                    <h4>{event.location}</h4>
                                    <h4>{date.toTimeString()}</h4>
                                    <h5>{event.descripion_short}</h5>
                                  </Modal>
                                  ) : null}

                                <div className = "event-item" onClick={this.showModal}>



                                    <div className = "date-section">
                                        <h2>{date.getDate() }</h2>
                                        <h2>{monthNames[date.getMonth()]}</h2>
                                    </div>
                                    <div className = "image-section">
                                        <img src = { event.image_url }/>

                                    </div>
                                    <div className = "details-section">

                                        <h2>{event.name} </h2>

                                        <h4>{event.location}</h4>
                                        <h4>{date.toTimeString()}</h4>
                                        <h5>{event.descripion_short}</h5>

                                    </div>
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
