/* eslint-disable react/prop-types */
import "./NewNav.css";
import HomeEdLogo from "../assets/HomeEdWhite.png";
import Cart from "../assets/cart.png";
import { useState, useContext } from "react";
import CartModel from "../pages/CartModel";
import LoginModel from "../pages/LoginModel";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function NewNav({ openSignup }) {
  const { user, logout } = useContext(AuthContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const goToAccount = () => navigate("./Me");

  return (
    <div className="nav-cont">
      <div className="nav-header">
        <div className="logo-container">
          <img className="logo" src={HomeEdLogo} alt="" />
        </div>
        <div className="burger" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <a className="nav-a" href="/">
          Home
        </a>
        <a className="nav-a" href="/About">
          About Me
        </a>
        <a className="nav-a" href="/Shop">
          Shop
        </a>
        <a className="nav-a" href="/Chat">
          Chat
        </a>
        <a className="nav-a" href="/Gnome">
          Gnome Edventurers
        </a>
        <a className="nav-a" href="/Community">
          Community
        </a>
      </div>

      <div className="buttons-cont">
        <button className="cart-button" onClick={openCart}>
          <img className="cart" src={Cart} alt="Shopping Cart Icon" />
        </button>

        {!user ? (
          <>
            <button className="log-in-btn" onClick={openLogin}>
              LOG IN
            </button>
            <button className="get-started-btn" onClick={openSignup}>
              GET STARTED
            </button>
          </>
        ) : (
          <>
            <button className="log-in-btn" onClick={logout}>
              LOG OUT
            </button>

            <button className="get-started-btn" onClick={goToAccount}>
              MY ACCOUNT
            </button>
          </>
        )}
      </div>

      <CartModel isOpen={isCartOpen} onClose={closeCart} />
      <LoginModel isOpen={isLoginOpen} onClose={closeLogin} />
    </div>
  );
}

export default NewNav;
