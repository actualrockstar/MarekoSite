
import React from 'react';
import './home.css';
import logo from './img/mareko_logo_flat.png';
import Socials from "./Socials";
import backgroundVid from "./video/momsTiktok.MOV";
import {Link} from 'react-router-dom';

function Music() {
    
    const embedW = window.innerWidth / 2.5;

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
                <div>
                <div className="embed">
                <iframe title="Spotify Embeded" src="https://open.spotify.com/embed/album/6zIhbZLYICRvusRhbuhfxV" width={embedW} height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
                <div className="musicLinks">
                    <a className="mlink1" href="https://open.spotify.com/artist/3U6lEEZGZPRC6i0Xu4Bzwz?si=c14UgYJ0Re6VHn41dge_Hg">Spotify</a>
                    <a className="mlink2" href="https://music.apple.com/us/artist/mareko/1511506573">Apple Music</a>
                    <a className="mlink3" href="https://soundcloud.com/bbymalachite">Soundcloud</a>
                </div>
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

export default Music;