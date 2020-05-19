import React from 'react';
import './App.css';
import Categories from './Components/Categories/Categories';
import { Switch, Route } from 'react-router-dom';
import Login from './Login/Login';
import { PrivateRoute } from './Components/PrivateRoute';
import DetailJoke from './Components/DetailJoke';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute exact path="/detail/:categoryId" component={DetailJoke} />
        <Route exact path="/" component={Categories} />
      </Switch>
    </div>
  );
}

export default App;
