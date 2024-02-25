import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import "./Features.css";

export default function Features() {
  return (
    <section className="features">
      <div className="feature-card">
        <div className="feature-card-heading">
          <h4>
            <FaRegQuestionCircle />
            &#160; What is IEEE ?
          </h4>
        </div>
        <p className="feature-card-content">
          <b>IEEE</b> is a global association and organization of professionals
          working toward the development, implementation and maintenance of
          technology-centered products and services.
        </p>
      </div>
      <div className="feature-card">
        <div className="feature-card-heading">
          <h4>
            <FaRocket />
            &#160; Mission
          </h4>
        </div>
        <p className="feature-card-content">
          IEEE will be essential to the global technical community and to
          technical professionals everywhere, and be universally recognized for
          the contributions of technology and of technical professionals in
          improving global conditions.
        </p>
      </div>
      <div className="feature-card">
        <div className="feature-card-heading">
          <h4>
            <FaEye />
            &#160; Vision
          </h4>
        </div>
        <p className="feature-card-content">
          IEEE’s core purpose is to foster technological innovation and
          excellence for the benefit of humanity.
        </p>
      </div>
    </section>
  );
}
