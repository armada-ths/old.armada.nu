import React from "react";
import axios from "axios";
import './recruitment.scss';
import Testimonials from '../Testimonials'
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

    componentDidMount() {  // only called when page is created or updated.
        axios.get('https://ais.armada.nu/api/recruitment')  // fetch data witt promise (then) and res(ult)
            .then( (res)  => {
                let result = res.data;  // create variable and store result within parameter data
                if(result.length > 0) {

                    this.setState({ groups: result[0].groups, 
                        recruitmentName: result[0].name, 
                        recruitmentLink: result[0].link,
                        recruitmentStart: result[0].start_date, 
                        recruitmentEnd: result[0].end_date });  // component saves its own data
                }
            });
    }



    render() {
            const groups = Object.keys(this.state.groups).map((groupkey, i)=> {
                return (
                    <div className='groups' key={i}>
                        <h3 className='group-header' >{groupkey}</h3>
                        {this.state.groups[groupkey].map((role, j) => {
                            return( <RoleSection role={role} key={`${j}`}/>);
                        })}
                    </div>
                )
            });
        if (groups.length > 0) {
            return (
                <div className="rolelist">

                    <StickyContainer>
                        <Sticky>
                            {
                                ({style}) => {
                                    return (
                                        <div style={style}>
                                            <div className={"applysection"}>
                                                <a href={'https://ais.armada.nu/' + this.state.recruitmentLink}>
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

                )
        } else {
            return (<div>
                <h4> Application is closed, stay tuned for new roles </h4>
                <Testimonials/>
            </div>);
        }
    }
}

class RoleSection extends React.Component {

    constructor() {
        super();
        this.state = {collapsed: true};
    }

    render() {
           return ( <div className='role-container'>
                <div className='role-header' onClick={() => this.setState({collapsed: !this.state.collapsed})} >
                    <div className='role-header-left' >
                        <h4>  {this.props.role.name  }</h4>
                    </div>
                    <div className='role-header-right' >
                        <p className={'arrow-icon' + (this.state.collapsed ? ' collapsed-arrow': ' expanded-arrow')}> › </p>
                    </div>
                </div>
               <div className={'role-description' + (this.state.collapsed ? ' collapsed': ' expanded')}>
                {!this.state.collapsed ? <p>  {this.props.role.description  }</p> : null }
               </div>
            </div>
           );

    }

}


export default Recruitment;
