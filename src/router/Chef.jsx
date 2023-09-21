import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const chef = [
  {
    name: "Pierre Hermé",
    avatar: "./chef/chef_1.jpg",
    job: '"Nghệ sĩ điêu khắc" bánh ngọt',
  },
  {
    name: "Elizabeth Falkner",
    avatar: "./chef/chef_2.jpg",
    job: "Nữ đầu bếp được yêu mến",
  },
  {
    name: "Gaston Lenôtre",
    avatar: "./chef/chef_3.jpg",
    job: "Chuyên gia về bánh ngọt",
  },
];

const Chef = () => {
  return (
    <>
      {chef.map((item, index) => (
        <div key={index} className="chef">
          <img src={item.avatar} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.job}</p>
          <div className="profile-footer">
            <ul className="social-list">
              <li>
                <Link target="_blank" to={"#"}>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ color: "#453cedc6", fontSize: 24 }}
                  />
                </Link>
              </li>
              <li>
                <Link target="_blank" to={"#"}>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: "#ff6d2e", fontSize: 24 }}
                  />
                </Link>
              </li>
              <li>
                <Link target="_blank" to={"#"}>
                  <FontAwesomeIcon
                    icon={faPinterest}
                    style={{ color: "#d70f0f", fontSize: 24 }}
                  />
                </Link>
              </li>
              <li>
                <Link target="_blank" to={"#"}>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{ color: "#57e3ff", fontSize: 24 }}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Chef;
