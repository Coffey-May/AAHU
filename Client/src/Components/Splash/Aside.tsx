// import { motion } from 'framer-motion'
import React, { useEffect, memo } from "react";
import { useStyles } from "./styles";
// import Box from '@material-ui/core/Box'

// let pine = '#157A6E'
// let shamRock = '#499F68'
// let ashGray = '#C2C5BB'
// let darkSea = '#77B28C'
// let brownSugar = '#B4654A'
import cloud1 from "../../assets/cloud1.png";
import cloud2 from "../../assets/cloud2.png";
import cloud3 from "../../assets/cloud3.png";
import cloud4 from "../../assets/cloud4.png";
import cloud5 from "../../assets/cloud5.png";

const cloudToggle = () => {
  document.addEventListener("scroll", function (e) {
    let el = document.querySelector<HTMLElement>(".vanish");
    // el!.style.opacity = ".8"
    el!.style.display = "block";
    //        var currScrollPos2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (window.pageYOffset <= 0) {
      document.querySelector<HTMLElement>(".vanish")!.style.display = "block";
    } else if (window.pageYOffset > 0) {
      document.querySelector<HTMLElement>(".vanish")!.style.display = "none";
    }
  });
};

const Aside = () => {
  const classes = useStyles();

  useEffect(() => {
    cloudToggle();
  }, []);
  return (
    <>
      <div className="vanish">
        <div
          className={classes.vanish}
          style={{
            marginTop: "70vh",
            zIndex: 0,
            height: "110vh",
            overflow: "hidden",
            bottom: "70vh",
            position: "relative",
            opacity: ".3",
          }}
        >
          <img
            className={classes.cloud1}
            style={{
              overflow: "hidden",
              marginTop: "-75vh",
              width: "400vw",
              height: "auto",
            }}
            src={`${cloud1}`}
            alt=""
          />

          <img
            className={classes.cloud1}
            style={{
              position: "absolute",
              marginTop: "-110vh",
              overflow: "hidden",
              width: "150vw",
              height: "auto",
            }}
            src={`${cloud2}`}
            alt=""
          />

          <img
            className={classes.cloud2}
            style={{
              position: "absolute",
              marginTop: "-150vh",
              overflow: "hidden",
              width: "100vw",
              height: "auto",
            }}
            src={`${cloud3}`}
            alt=""
          />

          <img
            className={classes.cloud3}
            style={{
              position: "absolute",
              marginTop: "-160vh",
              overflow: "hidden",
              width: "170vw",
              height: "auto",
            }}
            src={`${cloud4}`}
            alt=""
          />

          <img
            className={classes.cloud5}
            style={{
              position: "absolute",
              marginTop: "-140vh",
              overflow: "hidden",
              width: "170vw",
              height: "auto",
            }}
            src={`${cloud5}`}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default memo(Aside);
