
import React from 'react';
import './home.css';
import logo from './img/mareko_logo_flat.png';
import {Redirect} from 'react-router-dom';
import Socials from "./Socials";
import backgroundVid from "./video/momsTiktok.MOV";

function Store() {
    

     return (
        <div className="App">

            <video autoPlay loop muted
                style={{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    objectFit: "cover",
                    transform:"translate(-50%, -50%)",
                    zIndex: "-2"
                }}>
                <source src={backgroundVid} type="video/mp4"/>
            </video>

            <div className="header-main">
                <a href="/Home"><img className="logo" src={logo} alt="mareko_logo" /></a>
            </div>

            <div style={{
                position: "absolute",
                left: "20%",
                top: "50%"}}>
                <h1>SHOP COMING SOON!</h1>
            </div>
         
            <div className='nav'>
                <Socials/>
                <div className='nav-link1'>
                    <a href='/music'>MUSIC</a>
                </div>
                <div className='nav-link2'>
                    <a href='https://www.youtube.com/channel/UCyrNJeIc0NX14v_SnyvqyNA'>VIDEO</a>
                </div>
                <div className='nav-link3'>
                    <a href='/store'>STORE</a>
                </div>
                <div className='nav-link4'>
                    <a href='mailto:marekomgmt@gmail.com'>CONTACT</a>
                </div>
            </div>
        </div>
        
      );
  
}

export default Store;