import React from "react";

const MobileAppDev = () => {
    return (
        <div>
            <h1>Mobile Applicaiton Development</h1>
            <h4>IOS</h4>
            <h6>We Develop native apps for iPhone, iPad</h6>
            <ul>
                <il>Swift</il>
                <il>React Native</il>
            </ul>
            <h4><img alt="Android" src={require("../../img/andriod.png")} /></h4>
            <h6>We develop native apps for Android phone & tablets</h6>
            <ul>
                <il>Java</il>
                <il>React Native</il>
            </ul>
        </div>
    )
}

export default MobileAppDev;