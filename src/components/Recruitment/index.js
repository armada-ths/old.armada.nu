import React from "react";
import axios from "axios";
import './recruitment.scss';




class Recruitment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: [],  // json object
            recruitmentName: undefined,
            recruitmentStart: undefined,
            recruitmentEnd: undefined,
        };
    }

    componentDidMount() {  // only called when eventpage is created or updated.
        axios.get('https://ais2.armada.nu/api/recruitment')  // fetch data witt promise (then) and res(ult)
            .then( (res)  => {
                let result = res.data;  // create variable and store result within parameter data
                this.setState({ groups: result[0].groups, recruitmentName: result[0].name, recruitmentStart: result[0].start_date, recruitmentEnd: result[0].end_date });  // component saves its own data
                // Get from url path the GET params ?id=number, to know what event to display
            });
    }



    render() {
            /** OBS, a tag needs to be outside button for the link to work in firefox **/
                // get the event to display. Don't know behaviour when this.state.eventId = undefined
            //let eventToDisplay = this.state.events.filter(event => event.id == this.state.eventId)[0];
            const groups = Object.keys(this.state.groups).map((groupkey)=> {
                return (<div>
                    <p>{groupkey}</p>

                    {this.state.groups[groupkey].map((role) => {
                        return(
                            <div>
                                <p>  {role.name  }</p>
                                <p>  {role.description  }</p>
                            </div>

                        );
                    })}

                </div>)
                });
        return (
            <div className="events">
                {(this.state.recruitmentName)}
                {(this.state.recruitmentStart)}
                {(this.state.recruitmentEnd)}
                {groups}


            {/*<a href="https://ais.armada.nu/fairs/2017/recruitment/"> <button> APPLY HERE*/}
            {/*</button>*/}
            {/*</a>*/}
        </div>

        )}

}



export default Recruitment;
