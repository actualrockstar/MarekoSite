//import logo from './mareko_logo_flat.png';
import React from 'react';
import './App.css';
//import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Welcome from './components/Welcome';
import Music from './components/Music';
import Store from './components/Store';
import Video from './components/Video';

function App() {
  

   return (
      <Router>
        <Switch>
          <Route exact path='/' component={Welcome}/>
          <Route exact path='/Home' component={Home}/>
          <Route exact path='/Music' component={Music}/>
          <Route exact path='/Store' component={Store}/>
          <Route exact path='/Video' component={Video}/>
        </Switch>
      </Router>
      
    );
  
}

export default App;
