import React from 'react';
import ReactDOM from 'react-dom';
import { Route,Link,BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import  AboutUs  from './AboutUs';

const routing = (

  <Router>
    <div>
    <h1>This is React Router Demo!!</h1>
<App />  
    </div>
  </Router>
)
ReactDOM.render(routing,document.getElementById('root'));