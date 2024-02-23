import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about" data-section="section3">
      <div className="container">
        <div className="row">
          <div className="col-md-12 align-self-center">
            <div className="left-content">
              <h4>
                About <em>Us</em>
              </h4>
              <p
                style={{
                  alignContent: "space-around",
                  textAlign: "justify",
                  textJustify: "inter-word",
                  fontSize: "1.1rem",
                }}
              >
                IEEE is the world’s largest technical professional organization
                dedicated to advancing technology for the benefit of humanity.
                IEEE Student Branch MACE <i>(Student Branch Code: 32041)</i> was
                established on November 17th, 1988 and is one of the largest
                student branches across the globe with over 500 student members.
                Every year numerous events are conducted by IEEE MACE SB to
                enhance the skills of our students and to equip them with the
                rapidly changing industry. IEEE MACE SB offers a Hardware
                Laboratory to the members to develop technical projects. IEEE
                conducts Training programmes, talks, professional awareness
                sessions, hackathons, industrial visits, debates, quizzes and
                workshops regularly.
                <br />
                <br />
                The Student Branch takes the utmost pride in its volunteers who
                are very active and ever-ready to take up and solve challenges.
                Many of the volunteers are part of teams at various levels. We
                take pride in ensuring we meet the needs of our students be it
                any areas of interest and guide and help them to be better and
                responsible professionals for a better tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
