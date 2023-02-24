import React, { useState } from 'react';
import '../Header/Hd.css';
const Hd = () => {
  const [menu, showmenu] = useState(false)

  window.addEventListener("scroll",function(){
    const header = this.document.querySelector(".header")
    if(this.scrollY >=80) header.classList.add("scroll-header")
    else header.classList.remove("scroll-header")
  })
  return (
    <header className="header">
      <nav className="nav container">
        <li href="index.html" className="nav_logo">
          Smith
        </li>
        <div className={menu ? "nav_menu show_menu" : "nav_menu"}>
          <ul className="nav_list gird">
            <li className="nav_item">
              <a href="#home" className="nav_link active_link">
                <i className="uil uil-estate nav_icon "></i>
                Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" className="nav_link">
                <i className="uil uil-user nav_icon "></i>
                About
              </a>
            </li>

            <li className="nav_item">
              <a href="#skill" className="nav_link">
                <i className="uil uil-file-alt nav_icon "></i>
                Skills
              </a>
            </li>
            <li className="nav_item">
              <a href="#cantact" className="nav_link">
                <i className="uil uil-file-alt nav_icon "></i>
                Contact
              </a>
            </li>
            <i className="uil uil-times nav_close" onClick={()=> showmenu(!menu)}></i>
          </ul>
          
        </div>
        <div className="nav_toggle" onClick={()=> showmenu(!menu)}>
            <i className="uil uil-apps "></i>
          </div>
      </nav>
    </header>
  );
};

export default Hd;
