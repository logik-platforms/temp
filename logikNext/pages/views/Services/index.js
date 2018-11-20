import React from "react";
import CustomDevelopment from "../../components/CustomDevelopment";
import MobileApp from "../../components/MobileApp";
import WebDesign from "../../components/WebDesign";
import "./Services.css";
import BounceScroll from "../../components/BounceScroll";

const Services = () => {
    return (
        <div className="servicesContainer">
            <div className="slide unselectable">
                <CustomDevelopment />
            </div>
            <div className="slide unselectable">
                <MobileApp />
            </div>
            <div className="slide unselectable">
                <WebDesign />
            </div>
            <BounceScroll />
        </div>
    )
}
export default Services;