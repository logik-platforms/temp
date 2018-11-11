import React from "react";
import "./DownArrow.css";

const DownArrow = () => {
    return (
        <div>
            <span className="tcon-indicator" aria-label="scroll" aria-hidden="true">
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="tcon-svgchevron" viewBox="0 0 30 36">
    <path className="a3" d="M0,0l15,16L30,0"></path>
    <path className="a2" d="M0,10l15,16l15-16"></path>
    <path className="a1" d="M0,20l15,16l15-16"></path>
  </svg>
</span>
        </div>
    )
}

export default DownArrow;