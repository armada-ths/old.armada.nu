import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {addUrlProps, UrlQueryParamTypes} from 'react-url-query';
import {ReactPageClick} from 'react-page-click';
import "./eventlist.scss";

const urlPropsQueryConfig = {
  eventId: { type: UrlQueryParamTypes.number, queryParam: 'eventId' },
};

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ];


//{ @media == true (<p className='cross'>Swipe down to close</p>) : (<p className='cross'>˟</p>)}

const Modal = ({onClose, ...rest}) => (
      <div className='popupcontainer'>
        <div className="shade" >
          <div className='shadecontent'>
            <p className='cross'></p>
          </div>
        </div>
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

    showModal = (eventId) => {
      this.setState({showModal: !this.state.showModal, eventId});
      this.props.onChangeEventId(eventId);
    };

    displayEvent = (event) => {
      let today = new Date();
      let eventdate = new Date (event.event_start * 1000);
      let registration_end = new Date (event.registration_end * 1000);
      let minutes = "0" + eventdate.getMinutes();
      let hours = eventdate.getHours();
      let eventdate_end = new Date (event.event_end * 1000);
      let endminutes = "0" + eventdate_end.getMinutes();
      let endhours = eventdate_end.getHours();

      return (
        <Modal onClose={() => this.showModal(event.id)}>
        <div>
          <div className="modalimage">
            <img src={event.image_url}/>
            </div>
            <div className="modalinfo">
              <h3>{event.name}</h3>
                <div className='modal-event-property'>
                  <div className='icon_group'>
                    <img className='icon' src='/assets/calendar-round.svg'/>
                    {eventdate.getDate() != eventdate_end.getDate() ? (
                    <p> {eventdate.getDate() + '-' + eventdate_end.getDate() + ' ' + monthNames[eventdate.getMonth()]} </p>
                    ):( <p> {eventdate.getDate() + ' ' + monthNames[eventdate.getMonth()]} </p>)}
                  </div>
                  <div className='icon_group'>
                    <img className='icon' src='/assets/clock.svg'/>
                    <p className ="time" > {hours + ':' + minutes.substr(-2) + '-' + endhours + ':' + endminutes.substr(-2) }</p>
                  </div>
                  <div className='icon_group'>
                    <img className='icon' src='/assets/place.svg'/>
                    <p> {event.location}</p>
                  </div>
                </div>
                <div className="description">
                  {event.description}
                </div>
              </div>
              <div className="modalbutton">
                {eventdate > today ? (
                  <a href={event.signup_link}>
                  <button className="rsvpbutton">
                    RSVP BEFORE {registration_end.getDate()} {monthNames[registration_end.getMonth()]}
                  </button>
                </a>):(
                  <button className="rsvpclosed">
                    RSVP CLOSED
                  </button>)}
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
                  <div className='comingEvents'>
                    {comingEvents.length > 0 ? (<h2> Upcoming Events </h2>)
                    :null }
                    {comingEvents.map(this.getEventItem)}
                  </div>

                    <div className='pastEvents'>
                      {pastEvents.length > 0 ? (<h2> Past Events </h2>)
                      :null }
                      <div className="pastEvent">
                        {pastEvents.map(this.getEventItem)}
                      </div>
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

let toExport;
if(global.window!=undefined){
  toExport = addUrlProps({urlPropsQueryConfig})(EventList);
}else{
  toExport=EventList;
}
export default toExport;
