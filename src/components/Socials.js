
import React from 'react';
import './home.css'
//import {slide as Menu} from 'react-burger-menu';
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";


function Socials() {

     return (
        <div className="App">
        <div className="socials">
            <div className="social-link">
            <a href="https://www.instagram.com/bbymalachite/" ><FaInstagram/></a>
            </div>
            <div className="social-link">
            <a href="https://www.twitter.com/yakayyy/" ><FaTwitter/></a></div>
            <div className="social-link">
            <a href="https://www.facebook.com/bbymalachite/" ><FaFacebook/></a></div>
            <div className="social-link">
            <a href="https://www.youtube.com/channel/UCyrNJeIc0NX14v_SnyvqyNA" ><FaYoutube/></a>
            </div>
            </div>   
        </div>
        
      );
  
}

export default Socials;