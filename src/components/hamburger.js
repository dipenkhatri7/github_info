import React from 'react'
import './ham.css'
import { useState } from "react";
import { SocialIcon } from 'react-social-icons';
const Hamburger = () => {
    const [isActive, setActive] = useState("false");
    const Tooglehandle = () => {
    setActive(!isActive);
  };
    return (
        <div className={isActive ? "container" : "change"}>
        <div className="hamburger-menu" onClick={Tooglehandle}>
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
            <span>Close</span>
        </div>
        <section className="sidebar">
            <ul className="menu">
                <li className="menu-items">
                    <a href="https://industrious-tuberose-3eb.notion.site/Prerequisites-5082b94ed8f54dc3988a66c895b86f57" className="menu-link" data-content="Prerequisites" target="_blank">Prerequisites</a>
                </li>
                <div className="longLine"></div>
                <li className="menu-items">
                    <a href="https://industrious-tuberose-3eb.notion.site/Resources-c06a0d4b1f624277b9364f35521a146f" className="menu-link" data-content="Resources" target="_blank">Resources</a>
                </li>
                <div className="longLine"></div>
                <li className="menu-items">
                    <a href="https://industrious-tuberose-3eb.notion.site/Challenge-1-d8527872fdf64e5c9415951f87d5b11b" className="menu-link" data-content="Challenge-1" target="_blank">Challenge-1</a>
                </li>
                <div className="longLine"></div>
                <li className="menu-items">
                    <a href="https://industrious-tuberose-3eb.notion.site/Challenge-2-253823cfdf24450fb8a1667e14722b0d" className="menu-link" data-content="Challenge-2" target="_blank">Challenge-2</a>
                </li>
                <div className="longLine"></div>    
                <li className="menu-items">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-ODoayVgHAJl6t2b6wwBn3Dd1NKzAaeYLOG2JHPAp4F3LHA/viewform" className="menu-link" data-content="Register" target="_blank">Register</a>
                </li>
            </ul>
            <div className="social-media">
                <SocialIcon url="https://www.facebook.com/profile.php?id=100013394527810" target="_blank" id="abc"/>
                <SocialIcon url="https://twitter.com/Dipenkhatri7" target="_blank" id="abc"/>
                <SocialIcon url="https://www.instagram.com/dipenkhatri7/" target="_blank" id="abc" />
                <SocialIcon url="https://www.linkedin.com/in/dipen-khatri-b9ab4115a/" target="_blank" id="abc"/>
            </div>
        </section>
        </div>

    )
};

export default Hamburger;
