import React from "react";
import axios from "axios";
import Select from 'react-select'
import Loading from "../Loading"

import "./MatchingSection.scss";

class MatchingSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options : [{question: "What industries are you interested in?", answers :[{ value: 'Retail', label: 'Retail', id: "1" },
            { value: 'Graphic Productions', label: 'Graphic Productions', id: "2" },
            { value: 'Recruitment', label: 'Recruitment', id: "3" }, { value: 'Architecture', label: 'Architecture', id: "4" }, { value: 'Investment', label: 'Investment', id: "5" }, { value: 'Environmental Sector', label: 'Environmental Sector', id: "6" }, { value: 'Pedagogy', label: 'Pedagogy', id: "7" }, { value: 'Web Development', label: 'Web Development', id: "8" }, { value: 'Solid Mechanics', label: 'Solid Mechanics', id: "9" }, { value: 'Simulation Technology', label: 'Simulation Technology', id: "10" }, { value: 'Pharmacy', label: 'Pharmacy', id: "11" }, { value: 'Nuclear Power', label: 'Nuclear Power', id: "12" }, { value: 'Fluid Mechanics', label: 'Fluid Mechanics', id: "13" }, { value: 'Wood-Processing Industry', label: 'Wood-Processing Industry', id: "14" }, { value: 'Medical Technology', label: 'Medical Technology', id: "15" }, { value: 'Media Technology', label: 'Media Technology', id: "16" }, { value: 'Marine Systems', label: 'Marine Systems', id: "17" }, { value: 'Manufacturing Industry', label: 'Manufacturing Industry', id: "18" }, { value: 'Management Consulting', label: 'Management Consulting', id: "19" }, { value: 'Management', label: 'Management', id: "20" }, { value: 'Insurance', label: 'Insurance', id: "21" }, { value: 'Finance & Consultancy', label: 'Finance & Consultancy', id: "22" }, { value: 'Construction', label: 'Construction', id: "23" }, { value: 'Aerospace', label: 'Aerospace', id: "24" }, { value: 'Telecommunication', label: 'Telecommunication', id: "25" }, { value: 'Electronics', label: 'Electronics', id: "26" }, { value: 'Material Development', label: 'Material Development', id: "27" }, { value: 'Industry', label: 'Industry', id: "28" }, { value: 'Energy Technology', label: 'Energy Technology', id: "29" }, { value: 'Research', label: 'Research', id: "30" }, { value: 'Systems Development', label: 'Systems Development', id: "31" }, { value: 'Property & Infrastructure', label: 'Property & Infrastructure', id: "32" }, { value: 'Computer Science & IT', label: 'Computer Science & IT', id: "33" }, { value: 'Technical Consulting', label: 'Technical Consulting', id: "34" }, { value: 'Product Development', label: 'Product Development', id: "35" }, { value: 'Interaction Design', label: 'Interaction Design', id: "36" }, { value: 'Industry Design', label: 'Industry Design', id: "37" }]},
            {question: "What values are important to you?", answers :[{ value: 'Entrepreneurship', label: 'Entrepreneurship', id: "1" },
            { value: 'Active work for gender equality', label: 'Active work for gender equality', id: "2" },
            { value: 'Diversity and inclusion', label: 'Diversity and inclusion', id: "3" },
            { value: 'International environment and possibilities', label: 'International environment and possibilities', id: "4" },
            { value: 'Performance and results', label: 'Performance and results', id: "5" },
            { value: 'Environmental liability', label: 'Environmental liability', id: "6" },
            { value: 'Sustainability', label: 'Sustainability', id: "7" },
            { value: 'Organisational transparency', label: 'Organisational transparency', id: "8" },
            { value: 'Innovation', label: 'Innovation', id: "9" },
            { value: 'Creative and dynamic', label: 'Creative and dynamic', id: "10" },
            { value: 'Teamwork', label: 'Teamwork', id: "11" },
            { value: 'Personal development', label: 'Personal development', id: "12" },
            { value: 'Corporate social responsibility (CSR)', label: 'Corporate social responsibility (CSR)', id: "13" }]},{question: "What kind of employments are you interested in?", answers :[{ value: 'Trainee', label: 'Trainee', id: "1" },
            { value: 'Internship', label: 'Internship', id: "2" },
            { value: 'Summer job', label: 'Summer job', id: "3" }, { value: 'Part-time job', label: 'Part-time job', id: "4" },
            { value: 'Master thesis', label: 'Master thesis', id: "5" },
            { value: 'Bachelor thesis', label: 'Bachelor thesis', id: "6" }, { value: 'Full time job', label: 'Full time job', id: "7" }]},
            {question: "Where in the world?", answers :[{ value: 'Sweden – Norrland', label: 'Sweden – Norrland', id: "1" },
            { value: 'Sweden – Svealand', label: 'Sweden – Svealand', id: "2" },
            { value: 'Sweden – Götaland', label: 'Sweden – Götaland', id: "3" }, { value: 'World – Europe', label: 'World – Europe', id: "4" },
            { value: 'World – Asia', label: 'World – Asia', id: "5" },
            { value: 'World – North America', label: 'World – North America', id: "6" }, { value: 'World – South America', label: 'World – South America', id: "7" }, { value: 'World – Oceania', label: 'World – Oceania', id: "8" }, { value: 'World – Africa', label: 'World – Africa', id: "9" }]},
            {question: "What benefits are important to you?", answers :[{ value: 'Professional development (education)', label: 'Professional development (education)', id: "1" },
            { value: 'Extra long vacation', label: 'Extra long vacation', id: "2" },
            { value: 'Gym', label: 'Gym', id: "3" }, { value: 'Free Food', label: 'Free Food', id: "4" },
            { value: 'Car', label: 'Car', id: "5" },
            { value: 'Phone', label: 'Phone', id: "6" }, { value: 'Computer', label: 'Computer', id: "7" }, { value: 'Pay for overtime work', label: 'Pay for overtime work', id: "8" }, { value: 'Bonus system', label: 'Bonus system', id: "9" }, { value: 'Possibility to work in other countries', label: 'Possibility to work in other countries', id: "10" }, { value: 'Ability to work from home', label: 'Ability to work from home', id: "11" }, { value: 'Flexible work hours', label: 'Flexible work hours', id: "12" }]}],
            exhibitors: [{
                "id": 679,
                "name": "Sigma AB",
                "type": "Company",
                "company_website": "http://www.sigma.se",
                "about": "Sigma is a group of leading consulting companies with the objective to make our customers more competitive. Our means are technological know-how and a passion for constantly finding better solutions. Sigma has, since leaving the stock exchange 2013, founded 17 new companies and have 3300 employees. In 2005, the owner Dan Olofsson initiated the Star School project (later renamed Star for Life) in KwaZulu Natal, South Africa to fight HIV and aids. Star for Life involves more than 100 000 young people and their families in South Africa and Namibia.",
                "purpose": "It\u2019s through \u201cpassion and execution\u201d that Sigma makes a difference. As a privately owned company with a long-term strategy, we make all the decisions regarding our own development. We are growing and we are glad that more and more passionate people are joining us, shaping the future for our company as well as making a contribution for a better tomorrow.",
                "logo_squared": "/media/exhibitors/catalogue_logo_squared/e34e60e724a74a078f2ccdabeef0851d.jpg",
                "logo_freesize": "/media/exhibitors/catalogue_logo_freesize/3e23c04afdee4a12b67a3ac620c75fea.png",
                "contact_name": "Razu Yousuff",
                "contact_email_address": "razu.yousuff@sigmatechnology.se",
                "contact_phone_number": "+46760882557",
                "industries": [{
                    "id": 9,
                    "name": "Solid Mechanics"
                }, {
                    "id": 10,
                    "name": "Simulation Technology"
                }, {
                    "id": 26,
                    "name": "Electronics"
                }, {
                    "id": 28,
                    "name": "Industry"
                }, {
                    "id": 31,
                    "name": "Systems Development"
                }, {
                    "id": 33,
                    "name": "Computer Science & IT"
                }, {
                    "id": 34,
                    "name": "Technical Consulting"
                }, {
                    "id": 35,
                    "name": "Product Development"
                }],
                "values": [{
                    "id": 12,
                    "name": "Personal development"
                }, {
                    "id": 13,
                    "name": "Corporate social responsibility (CSR)"
                }],
                "employments": [{
                    "id": 1,
                    "name": "Trainee"
                }, {
                    "id": 5,
                    "name": "Master thesis"
                }, {
                    "id": 6,
                    "name": "Bachelor thesis"
                }, {
                    "id": 7,
                    "name": "Full time job"
                }],
                "locations": [{
                    "id": 1,
                    "name": "Sweden \u2013 Norrland"
                }, {
                    "id": 2,
                    "name": "Sweden \u2013 Svealand"
                }, {
                    "id": 3,
                    "name": "Sweden \u2013 G\u00f6taland"
                }, {
                    "id": 4,
                    "name": "World \u2013 Europe"
                }, {
                    "id": 5,
                    "name": "World \u2013 Asia"
                }, {
                    "id": 6,
                    "name": "World \u2013 North America"
                }],
                "benefits": [{
                    "id": 1,
                    "name": "Professional development (education)"
                }, {
                    "id": 3,
                    "name": "Gym"
                }, {
                    "id": 5,
                    "name": "Car"
                }, {
                    "id": 6,
                    "name": "Phone"
                }, {
                    "id": 7,
                    "name": "Computer"
                }, {
                    "id": 8,
                    "name": "Pay for overtime work"
                }, {
                    "id": 12,
                    "name": "Flexible work hours"
                }],
                "average_age": null,
                "founded": 1986,
                "groups": [],
                "fair_locations": []
            }, {
                "id": 742,
                "name": "F\u00f6rsvarets materielverk",
                "type": "Government agency",
                "company_website": "http://www.fmv.se/",
                "about": "FMV is the Swedish Defence Materiel Administration, a civilian governmental agency acting under the Ministry of Defence.",
                "purpose": "We provide defence logistics to the Swedish Armed Forces. This means that we make sure the Swedish Armed Forces have the equipment and logistic services they need to execute their mission.",
                "logo_squared": "/media/exhibitors/catalogue_logo_squared/cfb1cb1ac3074b908ebd643a11ad7076.png",
                "logo_freesize": "/media/exhibitors/catalogue_logo_freesize/dbf6512568d5457aa9d582183f770b87.png",
                "contact_name": "Katarina Lundstedt",
                "contact_email_address": "katarina.lundstedt@fmv.se",
                "contact_phone_number": "+46729730867",
                "industries": [{
                    "id": 17,
                    "name": "Marine Systems"
                }],
                "values": [{
                    "id": 5,
                    "name": "Performance and results"
                }, {
                    "id": 10,
                    "name": "Creative and dynamic"
                }],
                "employments": [{
                    "id": 3,
                    "name": "Summer job"
                }, {
                    "id": 5,
                    "name": "Master thesis"
                }, {
                    "id": 6,
                    "name": "Bachelor thesis"
                }],
                "locations": [{
                    "id": 1,
                    "name": "Sweden \u2013 Norrland"
                }, {
                    "id": 2,
                    "name": "Sweden \u2013 Svealand"
                }, {
                    "id": 3,
                    "name": "Sweden \u2013 G\u00f6taland"
                }],
                "benefits": [{
                    "id": 3,
                    "name": "Gym"
                }, {
                    "id": 6,
                    "name": "Phone"
                }, {
                    "id": 7,
                    "name": "Computer"
                }, {
                    "id": 12,
                    "name": "Flexible work hours"
                }],
                "average_age": 48,
                "founded": 1968,
                "groups": [],
                "fair_locations": []
            }, {
                "id": 741,
                "name": "Stockholm School of Entrepreneurship",
                "type": "Nonprofit organisation",
                "company_website": "https://www.sses.se/",
                "about": "Founded in 1999, Stockholm School of Entrepreneurship (SSES) is a global platform for interdisciplinary entrepreneurship education. From the cutting-edge of knowledge, we provide free, ECTS accredited courses, workshops and incubation for students and alumni from Stockholm\u2019s leading universities: KTH, KI, SSE, SU and Konstfack.",
                "purpose": "Our purpose is to provide students from our member universities with the right tools and skills to follow their ideas.",
                "logo_squared": "/media/exhibitors/catalogue_logo_squared/6a15ed2be0ed43d786de1c9d5f9dce19.png",
                "logo_freesize": "/media/exhibitors/catalogue_logo_freesize/a7725bc0499c42a0a6db08167b9cffcc.png",
                "contact_name": "Anna Espelage",
                "contact_email_address": "anna.espelage@sses.se",
                "contact_phone_number": "+46765641244",
                "industries": [{
                    "id": 7,
                    "name": "Pedagogy"
                }],
                "values": [{
                    "id": 1,
                    "name": "Entrepreneurship"
                }, {
                    "id": 3,
                    "name": "Diversity and inclusion"
                }, {
                    "id": 4,
                    "name": "International environment and possibilities"
                }, {
                    "id": 9,
                    "name": "Innovation"
                }, {
                    "id": 10,
                    "name": "Creative and dynamic"
                }, {
                    "id": 11,
                    "name": "Teamwork"
                }, {
                    "id": 12,
                    "name": "Personal development"
                }],
                "employments": [{
                    "id": 4,
                    "name": "Part time job"
                }],
                "locations": [{
                    "id": 2,
                    "name": "Sweden \u2013 Svealand"
                }],
                "benefits": [{
                    "id": 1,
                    "name": "Professional development (education)"
                }],
                "average_age": null,
                "founded": 1999,
                "groups": [],
                "fair_locations": []
            }],
            selectOptions : null,
            hide: false,
            isLoading: false
        };
    }

    componentDidMount() {
    }

    submit() {
        var array = []
        for (let i = 0; i < this.state.options.length; i++) {
            if(this.state[i]) {
                array = array.concat(this.state[i])
            }
        }
        console.log(array)
        this.setState({selectOptions: array})
        this.setState({hide: true})
    }

    buildOptions(array) {
        var listitems = []
        for (let i = 0; i < array.length; i++) {
          listitems.push(<div><p>{array[i].question}</p><Select
            closeMenuOnSelect={false}
            isMulti
            isSearchable
            name="Hej"
            options = {array[i].answers}
            onChange={this.handleChange(i)}
            className="basic-multi-select"
            classNamePrefix="select"
        />
        </div>);
        }
        return listitems;
      }


      presentMatches() {
        var listitems = []
        let array = this.state.exhibitors;
        for (let i = 0; i < array.length; i++) {
          listitems.push(
          <div className="matchcard">
            <img src={"https://ais.armada.nu" + array[i].logo_squared} alt="Logo"/>
            <div className="info_container">
                <h3>{array[i].name}</h3>
                <p>{array[i].about}</p>
                <a href={array[i].company_website}>{array[i].company_website}</a>
            </div>
          </div>);
        }
        return listitems;
      }


    handleChange = (index) => {
        var bindedthis = this;
        return function(value) {
            var result = value.map(value => value.id);
            bindedthis.setState(Object.assign(bindedthis.state, {
                [index] : result
              }));
        }
      }
    render() {
        return (
            <div className="questions">
            {!this.state.hide ? <div className="optioncontainer">{this.buildOptions(this.state.options)}
                <button className="match" onClick={() => this.submit()}>Get my match!</button></div> : null}
            {this.state.hide ? <div>{this.presentMatches()}</div> : null}
            {this.state.isLoading ? <Loading/> : null}
            </div>
        );
    }

}

export default MatchingSection;
