import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main'
import Lk from './components/Cabinet/Lk'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/lk">
            <Lk />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
