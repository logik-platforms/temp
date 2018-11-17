import React from "react";

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
            <div class="slide unselectable">
                <DataStorage />
            </div>
            <div class="slide unselectable">
                <CustomDev />
            </div>
            <div class="slide unselectable">
                <MobileAppDev />
            </div>
        </div>
    )
}
export default Technologies;