import React, { useState, useEffect } from "react";
import "./hero.css";
import Features from "../Features/Features";

export default function Hero() {
  const sentences = [
    "WE ARE IEEE!",
    "INVOLVE.",
    "EXPLORE.",
    "ENGAGE.",
    "EXECUTE.",
  ];
  const [index, setIndex] = useState(0);
  const [currentSentence, setCurrentSentence] = useState(sentences[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentSentence(sentences[index]);
  }, [index]);

  return (
    <section className="hero">
      <video autoplay muted loop playsinline className="hero-bg-video">
        <source src="assets/images/hero.mp4" type="video/mp4" />
      </video>
      <div className="caption">
        <h6>
          <strong>IEEE</strong> the trusted “voice” for engineering, computing,
          and technology information around the globe.
        </h6>
        <h2>
          <a href="">{currentSentence}</a>
        </h2>
        <div className="join-btn">
          <a href="https://www.ieee.org/membership/join/index.html">JOIN US</a>
        </div>
      </div>
      <Features />
    </section>
  );
}
