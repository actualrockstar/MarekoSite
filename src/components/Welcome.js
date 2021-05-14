
import React, {useState} from 'react';
import '../App.css';
import logo from '../mareko_logo_flat.png';
import { Redirect } from 'react-router-dom';


function Welcome() {
    const [enter, setEnter] = useState(false);
 
    function enterSite() {
      console.log("Enter site pressed");
      setEnter(true);
    }
  
    if (enter){
      return <Redirect to='/Home'/>
    }  
  
     return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="mareko logo" />
            
            <button onClick={enterSite}>Enter Site</button>
          </header>
        </div>
        
      );
  
}

export default Welcome;