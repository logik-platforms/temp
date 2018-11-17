import React, { Component } from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about">
              <h1 className="aboutTitle">Logik Platforms</h1>
    <p className="aboutBody">{`
    Logik Platforms provides industry-leading natural 
language processing, machine learning, text analytics,
and AI-powered search capabilities at scale that aims 
to help clients with cloud-based big data processing.
While we pride ourselves in dynamic logic and processing,
we top our work off with a beautiful and interactive 
application and web design. 
`}</p><p className="slogan">
{`Logik delivers on automating your companies wildest goals!`}</p>
        </div>
        )
}


export default About;