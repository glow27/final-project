import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import {Modal} from './components/Modal/Modal'
import Demo from './components/Demo/Demo'
import Registration from "./components/Registration/Registration";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

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
                <Route exact path="/demo" >
                <Demo/>
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
