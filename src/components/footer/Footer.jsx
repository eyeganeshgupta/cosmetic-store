import React from "react";
import Logo from "../../assets/logo.png";
import {
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
  InboxIcon,
} from "@heroicons/react/outline";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer-wrapper">
        <div className="logo-container">
          <img src={Logo} alt="logo" />
          <span>Cosmetic Store</span>
        </div>

        <div className="block">
          <div className="detail">
            <span>Contact US</span>

            <span className="png-line">
              <LocationMarkerIcon className="icon" />
              <span>MG Road, Mumbai 401209</span>
            </span>

            <span className="png-line">
              <PhoneIcon className="icon" />
              <a href="tel:8983971752">8983971752</a>
            </span>

            <span className="png-line">
              <InboxIcon className="icon mail-icon" />
              <a href="mailto:ganeshgupta9762@gmail.com">
                ganeshgupta9762@gmail.com
              </a>
            </span>
          </div>
        </div>

        <div className="block">
          <div className="detail">
            <span>Account</span>

            <span className="png-line">
              <LoginIcon className="icon" />
              <span>Signin</span>
            </span>
          </div>
        </div>

        <div className="block">
          <div className="detail">
            <span>Company</span>

            <span className="png-line">
              <UsersIcon className="icon" />
              <span>About Us</span>
            </span>
          </div>
        </div>

        <div className="block">
          <div className="detail">
            <span>Resources</span>

            <span className="png-line">
              <LinkIcon className="icon" />
              <span>Safety Privacy & Terms</span>
            </span>
          </div>
        </div>
      </div>

      <div className="copyright">
        <span>Copyright @ 2024 by Cosmetic Store, Inc</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
