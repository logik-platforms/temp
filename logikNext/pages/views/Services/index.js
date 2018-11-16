import React from "react";
import CustomDevelopment from "../../components/CustomDevelopment";
import MobileApp from "../../components/MobileApp";
import "./Services.css";



const Services = () => {
    return (
        <div className="servicesContainer">
        <div className="services">
            <CustomDevelopment />
            <MobileApp />
        </div>
        </div>
    )
}
export default Services;