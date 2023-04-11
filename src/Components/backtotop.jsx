import React from "react";
import { useState, useEffect } from "react";

function BackToTop() {
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToTop && (
        <button
          className="btn btn-light rounded border-info"
          style={{
            position: "fixed",
            bottom: "25px",
            right: "25px",
            height: "50px",
            width: "50px",
            fontSize: "1.5em",
          }}
          onClick={scrollUp}
        >
          <i className="fa-solid fa-arrow-up text-info" />
        </button>
      )}
    </>
  );
}

export default BackToTop;
