import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '/src/pages/Login/Login';
import Home from '/src/pages/Home/Home';
import Config from '/src/pages/Config/Config';
import User from '/src/pages/User/User';
import Reset from '/src/pages/Reset/Reset';
import Orders from '/src/pages/Orders/Orders';
import Products from '/src/pages/Products/Products';
import Materials from '/src/pages/Materials/Materials';
import Production from '/src/pages/Production/Production';
import './App.css';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Login" component={Login}/>
        <Route path="/Home" component={Home}/>
        <Route path="/Config" component={Config}/>
        <Route path="/User" component={User}/>
        <Route path="/Reset" component={Reset}/>
        <Route path="/Orders" component={Orders}/>
        <Route path="/Products" component={Products}/>
        <Route path="/Materials" component={Materials}/>
        <Route path="/Production" component={Production}/>
        <Route path="/" exact component={Login}/>
      </Switch>
    </Router>
  );
};

export default App;