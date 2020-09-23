import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { withRouter, Link } from "react-router-dom";
import Hamburger from '../Hamburger/Hamburger';

const Header = ({history}) => {
  const auth = useSelector(state => state.user.auth)
  const points = useSelector(state => state.user.points)
  

const [state, setState] = useState({
  initial: false,
  clicked: null,
  menuName: "MENU"
});
const [disabled, setDisabled] = useState(false);
useEffect(() => {
  history.listen(() => {
      setState({clicked: false, menuName: "MENU"});
  });
},[history]);
const handleMenu = () => {
  disableMenu();
  if (state.initial === false){
    setState({
      initial:null,
      clicked: true,
      menuName: "CLOSE"
    });
  } else if (state.clicked === true){
    setState({
      clicked: !state.clicked,
      menuName: "MENU"
    });
  } else if (state.clicked === false){
    setState({
      clicked: !state.clicked,
      menuName: "CLOSE"
    })
  }
}
const disableMenu = () => {
  setDisabled(!disabled);
  setTimeout(()=>{
    setDisabled(false);
  }, 1200)
};
return (
  <header>
    <div className="container">
      <div className="wrapper">
        <div className="inner-header">
          <div className="logo">
            <Link to="/">MAIN</Link>
            {auth && <p style={{
            color: 'white',
          }}>Your chips: {points}</p>}
          </div>
          <div>
            <img height="75px" width="600px"></img>
          </div>
          <div className="menu">
            <button style={{
            color: 'white',
          }} disabled={disabled} onClick={handleMenu}>
              {state.menuName}
            </button>
          </div>
        </div>
      </div>
    </div>
    <Hamburger state={state} />
  </header>
);
}

export default withRouter(Header);


