import React from "react";
import "./App.scss";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Welcome from './components/Welcome/welcome'
import Demo from './components/Demo/Demo';
import Info from './components/Info/Info';
import Registration from "./components/Registration/Registration";
import Roulette2 from "./components/Roulette2/Roulette2";
import {Profile} from './components/Profile/Profile'
import Craps from "./components/Craps/craps"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Roulette from "./components/Roulette/Roulette";
import Games from './components/Games/Games'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/demo" component={Demo} />


                <PrivateRoute exact path="/lk">
                <Profile/>
                </PrivateRoute>
                <Route path="/welcome">
                  <Welcome/>
                </Route>
                <PrivateRoute exact path="/casino/soccerbet">
                  <Info/>
                </PrivateRoute>
                <PrivateRoute exact path="/casino/craps">
                  <Craps/>
                </PrivateRoute>
                <PrivateRoute exact path="/roulette">
                  <Roulette2/>
                </PrivateRoute>
                <Route exact path = "/games">
                  <Games/>
                </Route>
                <Route exact path="/login" component={Login} />
                <Route exact path="/registration" component={Registration} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>


  );
}

export default App;
