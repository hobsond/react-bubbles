import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute'
import BubblePage from './components/BubblePage'

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        {/* {localStorage.token ? 
        <PrivateRoute path='/bubbles' component={BubblePage}/>
        :
        <Redirect to='/'/>
        
      } */}
        <PrivateRoute path='/bubbles' component={BubblePage}/>
      
      </div>
    </Router>
  );
}

export default App;
