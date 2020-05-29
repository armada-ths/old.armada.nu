import React from 'react'
import './index.scss'

class CareerCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false,
        }; 
    }

    questionOnClicked = (e) => {
        if (e.target.className !== 'external') this.setState({drawerOpen: !this.state.drawerOpen});
    }

    render() {
        return(<nav className='career-accordion'>
            <section className='accordion-parent' onClick={ (e) => this.questionOnClicked(e)}>
                <div className='accordion-header'>
                    <h4>{this.props.company}</h4>
                    <h5>
                        {this.props.jobTitle}
                        { this.props.external ? 
                            <a href={this.props.external} target='_blank' rel='noreferrer'>
                                <img className='external' src='/assets/external-link-outline.svg'/>
                            </a> : null
                        }
                    </h5>
                    <div className='chips'>  
                        <div className='chip'>Summer</div>
                        <div className='chip'>Part-time</div>
                    </div>
                </div>
                <img src="/assets/pil_melon.c12dca46463a9160e3ccffad3c2d4076.png" className={`arrow ${this.state.drawerOpen ? 'open' : ''}`} draggable="false"/> 
            </section> 
            
            <div className="accordion-children" style={{marginTop: 0, maxHeight: this.state.drawerOpen ? '8000px' : 0}} >
                <div className='job-grid'>

                <p2 className="answer">
                    <h3>The job</h3>
                We’re looking for an ambitious Data Scientist to join a team leading efforts to further expand our customer offering for Spotify Premium, and help us deliver a best-in-class Premium experience to the world’s music fans. 
                What does the music landscape look like in 2023? How will people listen to music in a world of voice controlled UI, autonomous cars and AR? With a focus on innovation projects, you will be part of a small, agile, and constantly evolving team, working to identify and execute upon growth opportunities that meet our ambitious commercial and user experience goals.
                In this role, you will empower the team with all things data – analyzing survey data to glean consumer insights and inform market sizing workstreams, dive into Spotify’s user-level streaming behavior, artist affinity to build new core datasets and dashboards – and more. We are looking for a Data Scientist capable of setting their own priorities and pushing ahead through any obstacle.
                </p2>
                <p2 className="answer">
                    <h3>Who we're looking for</h3>
                We’re looking for an ambitious Data Scientist to join a team leading efforts to further expand our customer offering for Spotify Premium, and help us deliver a best-in-class Premium experience to the world’s music fans. 
                What does the music landscape look like in 2023? How will people listen to music in a world of voice controlled UI, autonomous cars and AR? With a focus on innovation projects, you will be part of a small, agile, and constantly evolving team, working to identify and execute upon growth opportunities that meet our ambitious commercial and user experience goals.
                In this role, you will empower the team with all things data – analyzing survey data to glean consumer insights and inform market sizing workstreams, dive into Spotify’s user-level streaming behavior, artist affinity to build new core datasets and dashboards – and more. We are looking for a Data Scientist capable of setting their own priorities and pushing ahead through any obstacle.
                </p2>
                </div>
                
                <button>Apply now</button>
            </div>
        </nav>)
    }
}

CareerCard.propTypes = {
}


export default CareerCard
