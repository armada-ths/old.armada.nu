import React from "react";
import axios from "axios";
import './recruitment.scss';
import {StickyContainer, Sticky} from 'react-sticky';



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
                    <h3>{groupkey}</h3>

                    {this.state.groups[groupkey].map((role) => {

                        return( <RoleSection role={role} />);

                    })}

                </div>)
                });
        return (
            <div className="rolelist">

                <StickyContainer>
                    <Sticky>
                        {
                            ({style}) => {
                                return (
                                    <div style={style}>
                                        <div className={"applysection"}>
                                            <a href="https://ais.armada.nu/fairs/2017/recruitment/">
                                                <button> APPLY HERE</button>
                                            </a>
                                        </div>
                                    </div>
                                )
                            }
                        }
                    </Sticky>

                {groups}

                </StickyContainer>
            </div>

            )}
}

class RoleSection extends React.Component {

    constructor() {
        super();
        this.state = {collapsed: true};
    }

    render() {
           return ( <div className='role-container'>
                <div className='role-header' onClick={() => this.setState({collapsed: !this.state.collapsed})} >
                    <h4>  {this.props.role.name  }</h4>
                    <p> {'^'} </p> 
                </div>
                {!this.state.collapsed ? <p>  {this.props.role.description  }</p> : null }
            </div>
           );

    }

}


export default Recruitment;
