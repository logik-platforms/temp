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

!function(r,n){"function"==typeof define&&define.amd?define(n):"object"==typeof exports?module.exports=n():r.transformicons=n()}(this||window,function(){"use strict";var r={},n={transform:["click"],revert:["click"]},
t=function(r){return"string"==typeof r?Array.prototype.slice.call(document.querySelectorAll(r)):void 0===r||r instanceof Array?r:[r]},
o=function(r){return"string"==typeof r?r.toLowerCase().split(" "):r},
e=function(r,e,f){var i=(f?"remove":"add")+"EventListener",
s=t(r),a=s.length,
u={};for(var l in n)u[l]=e&&e[l]?o(e[l]):n[l];for(;a--;)for(var d in u)for(var m=u[d].length;m--;)s[a][i](u[d][m],c)},
c=function(n){r.toggle(n.currentTarget)};return r.add=function(n,t){return e(n,t),r},r.remove=function(n,t){return e(n,t,!0),r},
r.transform=function(n){return t(n).forEach(function(r){r.classList.add("tcon-transform")}),r},
r.revert=function(n){return t(n).forEach(function(r){r.classList.remove("tcon-transform")}),r},
r.toggle=function(n){return t(n).forEach(function(n){r[n.classList.contains("tcon-transform")?"revert":"transform"](n)}),r},r});