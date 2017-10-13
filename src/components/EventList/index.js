import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "./eventlist.scss";
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';
import {ReactPageClick} from 'react-page-click';


const urlPropsQueryConfig = {
  eventId: { type: UrlQueryParamTypes.number, queryParam: 'eventId' },
};

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ];


const Modal = ({onClose, ...rest}) => (
      <div>
        <div className="shade" />
        <ReactPageClick notify={onClose}>
          <div className="popup">
            <div className="modalcontent" {...rest} />
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
        axios.get('https://ais2.armada.nu/api/events')  // fetch data witt promise (then) and res(ult)
          .then( (res)  => {
            const events = res.data;  // create variable and store result within parameter data
            this.setState({ events });  // component saves its own data
            // Get from url path the GET params ?id=number, to know what event to display
            if (this.props.eventId !== undefined ){
              this.setState({eventId: this.props.eventId, showModal:true, events});
          }
          });
    }

      hideModal = () => {
        this.setState({showModal: false, eventId: undefined});
        this.props.onChangeEventId(null);
      };

      showModal = (eventId) => {
        this.setState({showModal: true, eventId});
        this.props.onChangeEventId(eventId);
      };

    displayEvent = (event) => {
      let eventdate = new Date (event.event_start * 1000);
      let registration_end = new Date (event.registration_end * 1000);

      return (
        <Modal onClose={this.hideModal}>
        <div>
          <div className="modalimage">
            <img src={event.image_url}/>
            </div>
            <div className="modalinfo">
              <h3>{event.name} {event.descripion_short}</h3>
              <h4>{event.location}</h4>
              {eventdate.getDate()} {monthNames[eventdate.getMonth()]}
              <br/>
              {event.description}
              <br/>

              <div className="modalbutton">
              <a href={event.signup_link}>
              <button>
              RSVP BEFORE {registration_end.getDate()} {monthNames[registration_end.getMonth()]}
              </button>
              </a>
              </div>
              </div>
            </div>

      </Modal>
    );
  }

    getEventItem = (event) => {
        let date = new Date (event.event_start * 1000); //from seconds to milliseconds
        let minutes = "0" + date.getMinutes();
        let hours = date.getHours();


        return (
            <div>
                <div className = "event-item" onClick={()=>this.showModal(event.id)}>

                    <div className = "image-section">
                        <img src = { event.image_url }/>

                    </div>

                    <div className = "details-section">

                        <h3 className ="name" >{event.name} </h3>
                        <div className='event-property'>
                            <img className='icon' src='/assets/calendar-round.svg'/>
                            <p> {date.getDate()} {monthNames[date.getMonth()]} </p>
                        </div>
                        <div className='event-property'>
                            <img className='icon' src='/assets/place.svg'/>
                            <p> {event.location}</p>
                        </div>
                        <div className='event-property'>
                            <img className='icon' src='/assets/clock.svg'/>
                            <p className ="time" > {hours + ':' + minutes.substr(-2)}</p>
                        </div>
                        <p className ="description" >{event.description_short}</p>
                    </div>
                </div>

                <hr/>
            </div>
        );
    }


    render() {
        let today = new Date();
        let comingEvents = this.state.events.filter(event => event.event_start * 1000 > today);
        let pastEvents = this.state.events.filter(event => event.event_start * 1000 < today);
        // get the event to display. Don't know behaviour when this.state.eventId = undefined
        let eventToDisplay = this.state.events.filter(event => event.id == this.state.eventId)[0];

        return (


            <div className="events">

            {this.state.showModal ? (this.displayEvent(eventToDisplay) ) : null}

                <div className="events-feed">
                    {
                    comingEvents.length > 0 ? (

                            <h2> Upcoming Events </h2>
                    )
                    :null }
                    {comingEvents.map(this.getEventItem)}



                    {
                    comingEvents.length > 0 ? (

                            <h2> Past Events </h2>
                    )
                    :null }
                    {pastEvents.map(this.getEventItem)}

                </div>

        </div>
        )
    }
}

EventList.propTypes = {
    eventId: PropTypes.number,
    onChangeEventId: PropTypes.func,
}

export default addUrlProps({ urlPropsQueryConfig })(EventList)
