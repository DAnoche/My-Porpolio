import React from "react";

function HeroSection(props) {
  return (
    <section className={`hero mt-5 ${props.theme}`}>
      <div className="container">{/* Something Here */}</div>
    </section>
  );
}

export default HeroSection;
