import React from "react";

const CustomDev = () => {
    return (
        <div>
            <h1>Custom Software Development</h1>
            <ul>
                <li><img alt="Python" src={require("../../img/python.png")} /></li>
                <li>Java</li>
                <li><img alt="Node" src={require("../../img/nodejs.png")} /></li>
                <li>Go</li>
                <li>Swift</li>
            </ul>
        </div>
    )
}

export default CustomDev;