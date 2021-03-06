
import React from 'react';
import '../App.css';
import './home.css';
//import { useSpring, animated} from '@react-spring/web';
import logo from '../mareko_logo_flat.png';
//import {slide as Menu} from 'react-burger-menu';

//import pic from "./IMG_4051.JPG";
import Socials from "./Socials";
import Viewpage from './Viewpage';
import backgroundVid from './video/areola.mov';
import { Link } from 'react-router-dom';

function Home() {

   
    
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
            
            <div className='magazine'>
               <Viewpage /> 
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

export default Home;