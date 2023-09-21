import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div className="row">
        <NavLink to={"/"}>
          <img src="logo.svg" alt="" title="KarT's House" />
        </NavLink>
        <div className="navbar-toggle">
          <div className="login">
            <a href="/cart">
              <button title="Giỏ hàng">
                <i className="fa-solid fa-cart-shopping" />
                <span className="cart_value"> </span>
              </button>
            </a>
          </div>
          <button className="navbar-dropdown">
            <i className="fa-solid fa-bars" />
          </button>
        </div>
        <nav>
          <div className="nav-logo">
            <img src="logo.svg" alt="" />
          </div>
          <div className="nav-bar">
            <NavLink to={"/"}>Trang chủ</NavLink>
            <NavLink to={"products"}>Sản phẩm</NavLink>
            <NavLink to={"about"}>Về chúng tôi</NavLink>
            <NavLink to={"contact"}>Liên hệ</NavLink>
          </div>
          <NavLink to={"cart"} className="login">
            <button title="Giỏ hàng" className="cart">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="cart_value"> </span>
            </button>
          </NavLink>
          <div
            className="nav-img"
            style={{ backgroundImage: "url(nav-bar.webp)" }}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
