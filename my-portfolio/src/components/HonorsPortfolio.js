import React from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./HonorsPortfolio.css";

const freshmanYear = [
  {
    title: "Autumn 21",
    description: "A great start to my time at UW",
    imageUrl: process.env.PUBLIC_URL + "/photos/au21.png",
  },
  {
    title: "Winter 22",
    description: "Why I started drinking coffee",
    imageUrl: process.env.PUBLIC_URL + "/photos/wi22.png",
  },
  {
    title: "Spring 22",
    description: "Physics is pretty cool...",
    imageUrl: process.env.PUBLIC_URL + "/photos/sp22.png",
  },
];

const sophomoreYear = [
  {
    title: "Autumn 22",
    description: "Equal parts Educatee & Educator",
    imageUrl: process.env.PUBLIC_URL + "/photos/au22.png",
  },
  {
    title: "Winter 23",
    description: "Finding my limit",
    imageUrl: process.env.PUBLIC_URL + "/photos/wi23.png",
  },
  {
    title: "Spring 23",
    description: "Diving into CS Education",
    imageUrl: process.env.PUBLIC_URL + "/photos/sp23.png",
  },
  {
    title: "Summer 23",
    description: "Enjoying the Summer",
    imageUrl: process.env.PUBLIC_URL + "/photos/su23.png",
  },
];

const juniorYear = [
  {
    title: "Autumn 23",
    description: "An Unexpected Journey",
    imageUrl: process.env.PUBLIC_URL + "/photos/au23.png",
  },
  {
    title: "Winter 24",
    description: "Finding what I don't like",
    imageUrl: process.env.PUBLIC_URL + "/photos/wi24.png",
  },
  {
    title: "Spring 24",
    description: "Capstone Courses",
    imageUrl: process.env.PUBLIC_URL + "/photos/sp24.png",
  },
];

const seniorYear = [
  {
    title: "Autumn 24",
    description: "One more time",
    imageUrl: process.env.PUBLIC_URL + "/photos/au24.png",
  },
  {
    title: "Winter 25",
    description: "COMING SOON",
    imageUrl: "https://via.placeholder.com/250",
  },
  {
    title: "Spring 25",
    description: "COMING SOON",
    imageUrl: "https://via.placeholder.com/250",
  },
];

// Honors Portfolio Component
function HonorsPortfolio() {
  return (
    <div className="honors-portfolio">
      <h1>Honors Portfolio</h1>

      {[freshmanYear, sophomoreYear, juniorYear, seniorYear].map((year, yearIndex) => (
        <div key={yearIndex}>
          <h2>{["Freshman", "Sophomore", "Junior", "Senior"][yearIndex]} Year</h2>
          <div className="grid-container">
            {year.map((item, index) => (
              <Link to={`/honors-portfolio/${item.title}`} key={index} className="grid-item">
                <img src={item.imageUrl} alt={item.title} className="grid-image" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HonorsPortfolio;