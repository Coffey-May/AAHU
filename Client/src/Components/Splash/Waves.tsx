import React, { memo } from "react";
import "./styles.css";

const Waves = () => {
  return (
    <div
      style={{ zIndex: 99, overflow: "visible" }}
      data-v-c0cb0066=""
      data-v-95467d66=""
      className="wave-line line"
    >
      <div data-v-c0cb0066="" className="inner">
        <div data-v-c0cb0066="" className="line"></div>
        <div data-v-c0cb0066="" className="line"></div>
        <div data-v-c0cb0066="" className="line"></div>
        <div data-v-c0cb0066="" className="line"></div>
        <div data-v-c0cb0066="" className="line"></div>
        <div data-v-c0cb0066="" className="line"></div>
      </div>
    </div>
  );
};

export default memo(Waves);
