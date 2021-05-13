
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

function Home() {

    
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
                <a href="/Home"><img className="logo" src={logo} alt="mareko_logo"/></a>
                </div>
            
            <div className='magazine'>
               <Viewpage /> 
            </div>
            <div className='nav'>
                <Socials/>
                <div className='nav-link1'>
                    <a href='/Music'>MUSIC</a>
                </div>
                <div className='nav-link2'>
                    <a href='https://www.youtube.com/channel/UCyrNJeIc0NX14v_SnyvqyNA'>VIDEO</a>
                </div>
                <div className='nav-link3'>
                    <a href='/Store'>STORE</a>
                </div>
                <div className='nav-link4'>
                    <a href='mailto:marekomgmt@gmail.com'>CONTACT</a>
                </div>
            </div>
        </div>
        
      );
  
}

export default Home;