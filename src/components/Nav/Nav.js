import React from "react";
import "./Nav.css";
import useNavBackground from "../../hooks/useNavBackground";

function Nav() {
  const show = useNavBackground();

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://i.pinimg.com/originals/75/bd/f0/75bdf06df3fd6ddd9d3311d8cb2be029.jpg"
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default Nav;
