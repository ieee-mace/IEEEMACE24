import React, { useState } from "react";
import "./WhyIEEE.css";

const WhyIEEE = () => {
  const [activeTab, setActiveTab] = useState("tabs-1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="why-us" data-section="section2">
      <div className="container">
        <div className="section-title">
          <div className="section-box">
            <h2>Why IEEE?</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div id="tabs">
              <ul>
                <li>
                  <a
                    href="#tabs-1"
                    className={activeTab === "tabs-1" ? "active" : ""}
                    onClick={() => handleTabClick("tabs-1")}
                  >
                    Travel Grant, Scholarships & Fellowship
                  </a>
                </li>
                <li>
                  <a
                    href="#tabs-2"
                    className={activeTab === "tabs-2" ? "active" : ""}
                    onClick={() => handleTabClick("tabs-2")}
                  >
                    IEEE eLearning Library
                  </a>
                </li>
                <li>
                  <a
                    href="#tabs-3"
                    className={activeTab === "tabs-3" ? "active" : ""}
                    onClick={() => handleTabClick("tabs-3")}
                  >
                    IEEE Standards
                  </a>
                </li>
              </ul>
              <section className="tabs-content">
                <article
                  id="tabs-1"
                  style={{ display: activeTab === "tabs-1" ? "block" : "none" }}
                >
                  <div className="row">
                    <div className="col-md-4">
                      <img src="assets/images/about/travel.jpg" alt="" />
                    </div>
                    <div className="col-md-8">
                      <h4>Travel Grant, Scholarships & Fellowship</h4>
                      <p>
                        IEEE offers a number of student travel grants to assist
                        Student members in attending conferences and presenting
                        papers. IEEE offers a variety of scholarships, grants,
                        and fellowships for IEEE Student members
                      </p>
                    </div>
                  </div>
                </article>
                <article
                  id="tabs-2"
                  style={{ display: activeTab === "tabs-2" ? "block" : "none" }}
                >
                  <div className="row">
                    <div className="col-md-4">
                      <img src="assets/images/about/learn.jpg" alt="" />
                    </div>
                    <div className="col-md-8">
                      <h4>IEEE eLearning Library</h4>
                      <p>
                        Online courses enable you to get up to speed quickly on
                        emerging technologies and trends.
                      </p>
                    </div>
                  </div>
                </article>
                <article
                  id="tabs-3"
                  style={{ display: activeTab === "tabs-3" ? "block" : "none" }}
                >
                  <div className="row">
                    <div className="col-md-4">
                      <img src="assets/images/about/stand.jpg" alt="" />
                    </div>
                    <div className="col-md-8">
                      <h4>IEEE Standards</h4>
                      <p>
                        With an active portfolio of nearly 1,300 standards and
                        projects under development, IEEE is a leading developer
                        of industry standards in a broad range of technologies.
                      </p>
                    </div>
                  </div>
                </article>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyIEEE;
