import { Link } from "react-router-dom";
import { LoginOverlay } from "../loginoverlay/LoginOverlay";
import Style from "./navbar.module.scss";
import { useState } from "react";
import { useAuth } from "../../context/authcontext/Auth";

export const Navbar = () => {
  const [displayOverlay, setDisplayOverlay] = useState(false);
  const { loginData } = useAuth();

  const handleOverlay = () => {
    if (displayOverlay === false) {
      setDisplayOverlay(true);
    }
  };

  return (
    <>
      {loginData.username ? (
        <nav className={Style.navbar}>
          <Link to="/">FORSIDE</Link>
          <Link to="/events">FORESTILLINGER & EVENTS</Link>
          <Link to="/actors">SKUESPILLERE</Link>
          <Link to="/login">MIN SIDE</Link>
        </nav>
      ) : (
        <nav className={Style.navbar}>
          <Link to="/">FORSIDE</Link>
          <Link to="/events">FORESTILLINGER & EVENTS</Link>
          <Link to="/actors">SKUESPILLERE</Link>
          <p onClick={() => handleOverlay()}>LOGIN</p>
        </nav>
      )}
      {displayOverlay ? <LoginOverlay /> : null}
    </>
  );
};
