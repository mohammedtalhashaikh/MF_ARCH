import React from "react";
import siroe from "./../images/siroe.png";
import coding from "./../images/coding.png";
import gaming from "./../images/gaming.png";

export const Body = () => {
  return (
    <>
      {" "}
      <div class="middle-container">
        <div class="profile">
          <img src={siroe} alt="profile-picture" height="200px" width="200px" />
          <h2>Hello.</h2>
          <p class="intro">
            Developer @ NeoInteraction
          </p>
        </div>
        <hr />
        <div class="skills">
          <h2>My Skills.</h2>
          <div class="skill-row">
            <img class="coding-img" src={coding} alt="coding-img" />
            <h3>Programming</h3>
            <p class="programming-skill-description">
              I started web programming a few months ago and i got addicted to
              learning new languages, algorithms...so on. It helps me improve my
              logical and reasoning ability.
            </p>
          </div>
          <div class="skill-row">
            <img class="computer-img" src={gaming} alt="computer-img" />
            <h3>PC-Gaming</h3>
            <p class="gaming-skill-description">
              I played my first video game when i was 9 and never stopped since
              and i started learning to code because i want to make my own video
              games..
            </p>
          </div>
        </div>
        <hr />
        <div class="contact-me">
          <h2>Get In Touch</h2>
          <h3>If it's necessary or if you are up for a coffee.</h3>
          <p class="contact-message">
            Love hanging out as much as I do? Let's get some coffee while we
            talk about coding!.
          </p>
          <a class="btn" href="mailto:talhashaikh8867@gmail.com">
            CONTACT ME
          </a>
        </div>
      </div>
      ;
    </>
  );
};
