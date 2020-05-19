import React from 'react';
import './App.css';
import Categories from './Components/Categories/Categories';
import {
  Switch,
  Route,
} from "react-router-dom";
import Login from './Login/Login';

function App() {
  return (
    <div className="App">
    <Switch>
        <Route path="/">
        <Categories/>
        </Route>
        <Route path="/Login">
          <Login/>
        </Route>
        </Switch>
    </div>
  );
}

export default App;
