import React from "react";
import "./styles.css";
import cloud from "./../images/cloud.png";
import mountain from "./../images/mountain.png";
export const Header = () => {
  return (
    <>
      <div class="top-container">
        <img class="top-cloud" src={cloud} alt="cloud-img" />
        <h1>I'm Talha.</h1>
        <h2 class="subtitle">
          a <span>pro</span>grammer.
        </h2>
        <img class="bottom-cloud" src={cloud} alt="cloud-img" />
        <img src={mountain} alt="mountain-img" />
      </div>
    </>
  );
};
