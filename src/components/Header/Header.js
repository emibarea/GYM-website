import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header" id="home">
      <img src={logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem", objectFit: "cover" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <a href="#home" onClick={() => setMenuOpened(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#programs" onClick={() => setMenuOpened(false)}>
              Programs
            </a>
          </li>
          <li>
            <a href="#whyus" onClick={() => setMenuOpened(false)}>
              Why us
            </a>
          </li>
          <li>
            <a href="#plans" onClick={() => setMenuOpened(false)}>
              Plans
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setMenuOpened(false)}>
              Testimonials
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
