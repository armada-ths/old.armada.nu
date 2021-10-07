import React from 'react'
import './index.scss';
import CompanyTestamonialCard from '../CompanyTestamonialCard'
import Carousel from '../Carousel'

const CompanyTestamonials = () => {

    const Companies = [
        {personName: "Name Nameson", companyName: "Company 1", imageUrl: "/assets/armadalogogreen.jpg", testamonial: '"Wow, what a great time!"'},
        {personName: "Name Nameson", companyName: "Company 2", imageUrl: "/assets/armada_round_logo_green.png", testamonial: '"This is my awesome testamonial! Because I really had an awesome time! And that is totally awesome!"'},
        {personName: "Name Nameson", companyName: "Company 3", imageUrl: "/assets/armadalogogreen.jpg", testamonial: '"I really enjoyed it."'},
        {personName: "Name Nameson", companyName: "Company 4", imageUrl: "/assets/armada_round_logo_green.png", testamonial: '"I felt very inspired."'},
        {personName: "Name Nameson", companyName: "Company 5", imageUrl: "/assets/armadalogogreen.jpg", testamonial: '"I would do it again."'}
    ]

    return (<div className="company-testamonials">
        <h1>Company Testamonials</h1>
        <Carousel items={Companies.map(company => <CompanyTestamonialCard personName={company.personName} companyName={company.companyName} imageUrl={company.imageUrl} testamonial={company.testamonial}/>)}/>
    </div>
    );
}

export default CompanyTestamonials;
