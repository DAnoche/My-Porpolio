import React from "react";

function AboutSection(props) {
  return (
    <section id="About-me" className={`about ${props.theme}`}>
      <div className="container">
        <h1>Hi, I'm Diether Noche</h1>
        <p>
          I'm a recent graduate from a Full Stack Web Development bootcamp. I
          have a passion for building beautiful, responsive websites and is
          eager to put my skills to work in the industry. My goal is to create
          seamless user experiences through clean, efficient code and innovative
          design.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
