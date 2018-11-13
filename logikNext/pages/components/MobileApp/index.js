import React from "react";
import "./MobileApp.css";

const MobileApp = () => {
    return (
        <div className="mobileApp">
        <h1 className="mobileTitle">Mobile App Development</h1>
        <p className="mobileBody">{`
        The best mobile experiences require a robust back-end foundation. 
        Our teams have years of experience integrating with back-end 
        and middleware systems and can evaluate alternatives based on cost,
        time to market, implementation risk, performance, scaling, and 
        security considerations.
        `}</p>
        <p className="mobileBody">{`
        iOS Development
        We leverage the strengths of each and every iOS platform to build incredible 
        solutions across iPhone, iPad, Apple Watch, and Apple TV.

        Android Development
        `}

        </p>

        </div>
    )
}

export default MobileApp;