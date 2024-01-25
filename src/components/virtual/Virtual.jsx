import React from "react";
import ReactCompareImage from "react-compare-image";
import Shade from "../../assets/shade.png";
import Before from "../../assets/before.png";
import After from "../../assets/after.png";
import "./virtual.css";

const Virtual = () => {
  return (
    <div className="virtual-container">
      <div className="virtual-left">
        <span>Virtual Try-on</span>
        <span>Never Buy the wrong Shade Again!</span>
        <span>Try Now!</span>
        <img src={Shade} alt="blue-shade" />
      </div>
      <div className="virtual-right">
        <div className="compare-image-wrapper">
          <ReactCompareImage leftImage={Before} rightImage={After} />
        </div>
      </div>
    </div>
  );
};

export default Virtual;
