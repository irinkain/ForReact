import React from "react";
import "./App.css";
import cov from "./covid.gif";
import MenuComponent from './Components/Menu';
import {
  Switch,
  Route,
} from "react-router-dom";
import All from "./Components/All";
import Countries from "./Components/Countries";
import Country from "./Components/Country";
import States from "./Components/States";
import Jhucsse from "./Components/Jhucsse";

function App() {
  return (
    <div className="App">
      <MenuComponent />
      <hr></hr>
      <Switch>
        <Route path="/All">
          <All/>
        </Route>
        <Route path="/Countries">
          <Countries/>
        </Route>
         <Route path="/Country/:name"> {/*დეფაულტად არ მივანიჭე ველიუ პარამეტრს, რომ რამე ლინკზე გადავიდეს, გადავა მხოლოდ countries- ლინკიდან. */}
          <Country/>
        </Route>
        <Route path="/States">
          <States/>
        </Route>
        <Route path="/John">
          <Jhucsse/>
        </Route>
        <Route path="/">
          <h1 className="red">All information about COVID19</h1>
          <h4>Designed by I.Inashvili</h4>
          <img src={cov} alt="covid19"></img>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
