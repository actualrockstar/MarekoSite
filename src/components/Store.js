
import React from 'react';
import './home.css';
import logo from './img/mareko_logo_flat.png';
import Socials from "./Socials";
import backgroundVid from "./video/momsTiktok.MOV";
import {Link} from 'react-router-dom';

function Store() {
    

     return (
        <div className="App">

            <div dangerouslySetInnerHTML={{ __html: `
                <video
                muted
                loop
                autoplay
                playsinline
                src="${backgroundVid}"
                class="video"
                />
            ` }}
            />

            <div className="header-main">
            <Link to="/Home"><img className="logo" src={logo} alt="mareko_logo"/></Link>
            </div>

            <div style={{
                position: "absolute",
                left: "10%",
                top: "10%"}}>
                <h1>SHOP COMING SOON!</h1>
            </div>
         
            <div className='nav'>
                <Socials/>
                <div className='nav-link1'>
                    <Link to="/Music" >MUSIC</Link>
                </div>
                <div className='nav-link2'>
                    
                <Link to="/Video">VIDEO</Link>
                     </div>
                <div className='nav-link3'>
                    <Link to="/Store" >STORE</Link>
                </div>
                <div className='nav-link4'>
                    <a href='mailto:marekomgmt@gmail.com'>CONTACT</a>
                </div>
            </div>
        </div>
        
      );
  
}

export default Store;