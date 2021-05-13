
import React from 'react';
import './home.css';
import logo from './img/mareko_logo_flat.png';
import {Redirect} from 'react-router-dom';
import Socials from "./Socials";
import backgroundVid from "./video/momsTiktok.MOV";

function Music() {
    

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
            <div className="embed">
            <iframe src="https://open.spotify.com/embed/album/6zIhbZLYICRvusRhbuhfxV" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
            <div>
                <a href="https://open.spotify.com/artist/3U6lEEZGZPRC6i0Xu4Bzwz?si=c14UgYJ0Re6VHn41dge_Hg">Spotify</a>
                <a href="https://music.apple.com/us/artist/mareko/1511506573">Apple Music</a>
                <a href="https://soundcloud.com/bbymalachite">Soundcloud</a>
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

export default Music;