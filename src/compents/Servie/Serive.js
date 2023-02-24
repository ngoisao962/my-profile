import React, { useState } from 'react';
import "../Servie/service.css"
const Serive = () => {
  const [toggle,settoggle] = useState(0)
  const toggletab = (index) =>{
    settoggle(index)
  }
  return (
    
    <div className="service section">
      <div className="container align">
        <h2 className="section_title">Service</h2>
        <span className="section_subtitle">My technical</span>
      </div>
      <div className="services_container container grid">
        <div className="services_content">
          <div>
            <i className="uil uil services_icon"></i>
            <h3 className="services_title"> Hello My name</h3>
          </div>
          <span className="services_vutton" onClick={()=> toggletab(1) }>
            View more 
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div className={toggle === 1 ? "services_modal active_modal " : " services_modal"}>
            <div className="services_modal-content">
              <i className="uil uil-times services_modal-close" onClick={()=> toggletab(0) }></i>
              <h3 className="services_modal-title"></h3>
              <p className="services_modal-des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident nihil, eveniet inventore omnis fugiat deserunt, in
                sapiente ipsa hic atque nobis. Atque quam laboriosam praesentium
                eveniet iusto omnis labore repudiandae!
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">I develop the user inter</p>
                </li>
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">I develop the user inter</p>
                </li>
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">I develop the user inter</p>
                </li>
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">I develop the user inter</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services_content">
          <div>
            <i className="uil uil services_icon"></i>
            <h3 className="services_title">Helllo my name</h3>
          </div>
          <span className="services_vutton" onClick={()=> toggletab(2)} >
            View more
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div className={toggle === 2 ? "services_modal active_modal " : " services_modal"} >
            <div className="services_modal-content">
            <i className="uil uil-times services_modal-close" onClick={()=> toggletab(0) }></i>
              <h3 className="services_modal-title">hiii</h3>
              <p className="services_modal-des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident nihil, eveniet inventore omnis fugiat deserunt, in
                sapiente ipsa hic atque nobis. Atque quam laboriosam praesentium
                eveniet iusto omnis labore repudiandae!
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">I develop the user inter</p>
                </li>
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">I develop the user inter</p>
                </li>
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">I develop the user inter</p>
                </li>
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">I develop the user inter</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services_content">
          <div>
            <i className="uil uil services_icon"></i>
            <h3 className="services_title">Hello my sayy</h3>
          </div>
          <span className="services_vutton" onClick={()=> toggletab(3)}>
            View more{' '}
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div className={toggle === 3 ? "services_modal active_modal " : " services_modal"}>
            <div className="services_modal-content">
              <i className="uil uil-times services_modal-close" onClick={()=> toggletab(0) }></i>
              <h3 className="services_modal-title">helooo</h3>
              <p className="services_modal-des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident nihil, eveniet inventore omnis fugiat deserunt, in
                sapiente ipsa hic atque nobis. Atque quam laboriosam praesentium
                eveniet iusto omnis labore repudiandae!
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">I develop the user inter</p>
                </li>
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">I develop the user inter</p>
                </li>
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">I develop the user inter</p>
                </li>
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">I develop the user inter</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serive;
