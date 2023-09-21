import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <div className="row">
          <div className="img">
            <img src="logo.svg" alt="" />
          </div>
          <div className="col">
            <div className="name">
              <h3>Thời gian làm việc</h3>
            </div>
            <div className="content">
              <p>Thứ 2 - Thứ 6: 8 am - 8 pm</p>
              <p>Thứ 7: 9am - 4pm</p>
              <p>Chủ nhật: Đóng cửa</p>
            </div>
          </div>
          <div className="col">
            <div className="name">
              <h3>Địa chỉ</h3>
            </div>
            <div className="content">
              <p>Kart&apos;s House</p>
              <p>Số 94 Yên Nghĩa, Hà Đông, Hà Nội</p>
              <p>thanhnguyen.gt09@gmail.com</p>
            </div>
          </div>
          <div className="col">
            <div className="name">
              <h3>Mạng xã hội</h3>
            </div>
            <div className="content">
              <div>
                <Link target="_blank" to={"https://www.facebook.com/"}>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2x"
                    style={{ color: "#453cedc6" }}
                  />
                  Facebook
                </Link>
                <Link target="_blank" to={"https://www.instagram.com/"}>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                    style={{ color: "#ff6d2e" }}
                  />
                  Instagram
                </Link>
              </div>
              <div className="social">
                <Link target="_blank" to={"https://www.youtube.com/"}>
                  <FontAwesomeIcon
                    icon={faYoutube}
                    size="2x"
                    style={{ color: "#d70f0f" }}
                  />
                  Youtube
                </Link>
                <Link
                  target="_blank"
                  to={"https://twitter.com/"}
                  style={{ marginLeft: 18 }}
                  className="twitter"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="2x"
                    style={{ color: "#57e3ff" }}
                  />
                  Twitter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <span>Copyright © 2023-Powered by Thanh Nguyen</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
