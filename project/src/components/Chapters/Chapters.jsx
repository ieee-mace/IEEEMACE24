import React, { useRef } from "react";
import "./Chapters.css";

export default function Chapters() {
  const chaptersRef = useRef(null);

  const scroll = (scrollOffset) => {
    chaptersRef.current.scrollLeft += scrollOffset;
  };

  const chapters = [
    {
      imagePath: "assets/images/chapters/cs.jpg",
      chapterName: "CS",
      chapterFullName: "The IEEE Computer Society",
      chapterLogo: "assets/images/logos/cs.png",
      chapterLink: "https://www.computer.org/",
    },
    {
      imagePath: "assets/images/chapters/ras.jpg",
      chapterName: "RAS",
      chapterFullName: "IEEE Robotics and Automation Society",
      chapterLogo: "assets/images/logos/ras.png",
      chapterLink: "#",
    },
    {
      imagePath: "assets/images/chapters/sps.jpg",
      chapterName: "SPS",
      chapterFullName: "IEEE Signal Processing Society",
      chapterLogo: "assets/images/logos/sps.png",
      chapterLink: "https://signalprocessingsociety.org/",
    },
    {
      imagePath: "assets/images/chapters/comsoc.jpg",
      chapterName: "ComSoc",
      chapterFullName: "IEEE Communications Society",
      chapterLogo: "assets/images/logos/comsoc.png",
      chapterLink: "https://www.comsoc.org/",
    },
    {
      imagePath: "assets/images/chapters/ias.jpg",
      chapterName: "IAS",
      chapterFullName: "IEEE Industry Applications Society",
      chapterLogo: "assets/images/logos/ias.png",
      chapterLink: "https://ias.ieee.org/",
    },
    {
      imagePath: "assets/images/chapters/pes.jpg",
      chapterName: "PES",
      chapterFullName: "IEEE Power and Energy Society",
      chapterLogo: "assets/images/logos/pes.png",
      chapterLink: "https://ieee-pes.org/",
    },
    // {
    //   imagePath: "assets/images/chapters/iepels.jpg",
    //   chapterName: "IE/PELS",
    //   chapterFullName: "IEEE IE/PELS Jt. Chapter",
    //   chapterLogo: "assets/images/logos/iepels.png",
    //   chapterLink: "https://www.ieee-ies.org/",
    // },
    {
      imagePath: "assets/images/chapters/wie.jpg",
      chapterName: "WIE",
      chapterFullName: "IEEE Women in Engineering Affinity Group",
      chapterLogo: "assets/images/logos/wie.png",
      chapterLink: "https://wie.ieee.org/",
    },
    {
      imagePath: "assets/images/chapters/sight.jpg",
      chapterName: "SIGHT",
      chapterFullName: "IEEE Special Interest Group on Humanitarian Technology",
      chapterLogo: "assets/images/logos/sight.png",
      chapterLink: "https://sight.ieee.org/",
    },
  ];

  return (
    <section className="Chapters">
      <div className="section-heading">
        <h2>Chapters</h2>
      </div>
      <div className="chapters" ref={chaptersRef}>
        {chapters.map((chapter, index) => (
          <div className="chapters-cards" key={index}>
            <div className="chapters-cards-img">
              <img src={chapter.imagePath} alt={chapter.chapterName} />
            </div>
            <div className="chapters-cards-name">
              <h4>{chapter.chapterName}</h4>
              <p>{chapter.chapterFullName}</p>
            </div>
            <div className="chapters-cards-logo-link">
              <div className="chapters-cards-logo">
                <img src={chapter.chapterLogo} alt={chapter.chapterName} />
              </div>
              <div className="chapters-cards-link">
                <a href={chapter.chapterLink}>Know More &#8811;</a>
              </div>
            </div>
          </div>
        ))}
        <div className="chapters-cards">
          <div className="chapters-cards-img">
            <img src="assets/images/chapters/iepels.jpg" alt="IE/PELS" />
          </div>
          <div className="chapters-cards-name">
            <div className="chapters-cards-heading">
              <h4>IE/PELS</h4>
            </div>
            <div className="chapters-cards-full-heading">
              <p>IEEE IE/PELS Jt. Chapter</p>
            </div>
          </div>
          <div className="chapters-cards-logo-link">
            <div className="chapters-cards-logo">
              <img src="assets/images/logos/iepels.png" alt="IE/PELS" />
            </div>
            <div className="chapters-cards-link">
              <a
                href="https://www.ieee-ies.org/"
                style={{ height: "50%", alignItems: "end" }}
              >
                IEEE IES&#8811;
              </a>
              <a
                href="https://www.ieee-pels.org/"
                style={{ height: "50%", alignItems: "start" }}
              >
                IEEE PELS&#8811;
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation-buttons">
        <button onClick={() => scroll(-600)}>Prev</button>
        <button onClick={() => scroll(+600)}>Next</button>
      </div>
    </section>
  );
}
