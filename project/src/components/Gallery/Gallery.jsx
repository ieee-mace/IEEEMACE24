import React from "react";
import "./Gallery.css";

export default function Gallery() {
  const gallery = [
    {
      imagePath: "assets/images/gallery/g1.JPG",
      paragraph: '"AGM 2023"',
    },
    {
      imagePath: "assets/images/gallery/g2.JPG",
      paragraph: '"PELS Day"',
    },
    {
      imagePath: "assets/images/gallery/g5.jpg",
      paragraph: '"Subcommittee Training"',
    },
    {
      imagePath: "assets/images/gallery/g3.jpg",
      paragraph: '"PES Day"',
    },
    {
      imagePath: "assets/images/gallery/g4.JPG",
      paragraph: '"Subcommittee Training"',
    },
    {
      imagePath: "assets/images/gallery/g6.jpg",
      paragraph: '"Arduino Day"',
    },
    {
      imagePath: "assets/images/gallery/g8.JPG",
      paragraph: '"Arduino Day"',
    },
    {
      imagePath: "assets/images/gallery/g9.JPG",
      paragraph: '"SPS Day"',
    },
    {
      imagePath: "assets/images/gallery/g7.jpg",
      paragraph: '"Arduino Day"',
    },
    {
      imagePath: "assets/images/gallery/g10.jpg",
      paragraph: '"Bootcamp"',
    },
  ];

  return (
    <section className="gallery">
      <h2>
        Gal<span>lery</span>
      </h2>
      <div className="grid-container">
        {gallery.map((item, index) => (
          <div key={index}>
            <img
              className={`grid-item grid-item-${index + 1}`}
              src={item.imagePath}
              alt=""
            />
            <p>{item.paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
