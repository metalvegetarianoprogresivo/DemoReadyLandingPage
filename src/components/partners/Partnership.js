import React from 'react'

import aws from "./../../assets/images/logo_aws.jpg";
import elastic from "./../../assets/images/logo_elastic.jpg";
import microsoft from "./../../assets/images/logo_microsoft.png";
import cloudera from "./../../assets/images/logo_cloudera.jpg";
import hortonworks from "./../../assets/images/logo_hortonworks.jpg";
import mapr from "./../../assets/images/logo_mapr.jpg";

import './Partnership.css'

export default() => {
    const partners = [
        {
            name: "Amazon Web Services",
            img: aws
        }, {
            name: "Elastic",
            img: elastic
        }, {
            name: "Gold Microsoft Partner ",
            img: microsoft
        }, {
            name: "Cloudera",
            img: cloudera
        }, {
            name: "Horton Works",
            img: hortonworks
        }, {
            name: "Mapr",
            img: mapr
        }
    ];
    return (
        <div className="partners">
            {partners.map(partner => (
                <div>
                    <img className="partners__logo"
                    src={partner.img} alt={partner.name}/>
                </div>
            ))
}
        </div>
    )
}