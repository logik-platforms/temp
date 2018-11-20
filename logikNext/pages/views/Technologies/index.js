import React from "react";
import BounceScroll from "../../components/BounceScroll";

// Slides
import WebDevelopment from "../../components/WebDevelopment";
import DataStorage from "../../components/DataStorage";
import CustomDev from "../../components/CustomDev";
import MobileAppDev from "../../components/MobileAppDev"

const Technologies = () => {
    return (
        <div className="technologiesContainer">
            <div className="slide unselectable">
                <WebDevelopment />
            </div>
            <div className="slide unselectable">
                <DataStorage />
            </div>
            <div className="slide unselectable">
                <CustomDev />
            </div>
            <div className="slide unselectable">
                <MobileAppDev />
            </div>
            <BounceScroll />
        </div>
    )
}
export default Technologies;