import React from 'react';
import "../Scrollup/SCrollup.css"
const Scrollup = () => {
    window.addEventListener("scroll",function(){
        const scrollup = this.document.querySelector(".scrollup");
        if(this.scrollY >=500) scrollup.classList.add("show-scroll")
        else scrollup.classList.remove("show-scroll")
    })
    return (
        <a href="#home" className="scrollup">
            <i className="uil uil-arrow-up scroll_icon"></i>
        </a>
    );
};

export default Scrollup;