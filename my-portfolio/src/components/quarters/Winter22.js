import React from "react";
import "./../HonorsPortfolio.css";
import "./quarter.css";

function Winter22() {
  return (
    <div className="quarter-winter">
      <div className="quarter-page">
        <h1>WINTER 22</h1>

        {/* Section 1: Campus Maps */}
        <section className="quarter-section">
          <div className="photo-stack">
            <img
              src={`${process.env.PUBLIC_URL}/artifacts/campus-maps-1.png`}
              alt="Campus Maps Image Example 1"
              className="photo"
            />
            <img
              src={`${process.env.PUBLIC_URL}/artifacts/campus-maps-2.png`}
              alt="Campus Maps Image Example 2"
              className="photo"
            />
          </div>
          <div className="text-container">
            <h2>CAMPUS PATH FINDER</h2>
            <p>
              This project was for CSE 331: Software Design and Implementation.
              It’s a locally hosted web app where users can select two buildings
              on the UW campus and the system will draw the shortest path
              between them on the maneuverable map. Java is used for the
              server-side tasks, and the webpage is rendered using TypeScript
              and the React framework.
            </p>
            <p>
              Throughout the course, we worked towards this complex project by
              designing, testing, and implementing several smaller components
              such as a graph class, multiple pathfinding algorithms, and a
              parser for the geographical data. All of these components are
              used in some way in this final project and most were altered
              post-assignment for better implementation.
            </p>
            <p>
              Admittedly I struggled a bit at first with this class as I had
              never worked on software projects at this scale before. After
              several weeks, each with 1-2 all-nighters, I was forced to learn
              more effective time management skills which greatly paid off
              towards the end of the quarter and moving forward. Since taking
              this course, I’ve found my workload more manageable and my study
              habits to be much healthier and more efficient.
            </p>
          </div>
        </section>

        {/* Section 2: Apeel Poster */}
        <section className="quarter-section">
          <div className="photo-stack">
            <img
              src={`${process.env.PUBLIC_URL}/artifacts/apeel-poster.png`}
              alt="Apeel Sciences Poster Draft"
              className="photo"
            />
            <img
              src={`${process.env.PUBLIC_URL}/artifacts/apeel-poster-final.png`}
              alt="Apeel Sciences Poster Final"
              className="photo"
            />
          </div>
          <div className="text-container">
            <h2>TECHNICAL POSTER</h2>
            <p>
              Created for Engineering 231: Technical Communication, these are
              the initial (top) and final (bottom) drafts of my poster
              detailing the food science and related technologies created by
              Apeel Sciences.
            </p>
            <p>
              My key takeaways from this course were that concision and
              meaningful repetition are both necessary in writing and
              communication as a whole. My initial draft is much wordier and
              only offers readers one way to comprehend its message through
              the use of text. My second draft is far more concise in text and
              uses visual aids to both help reaffirm important ideas and offer
              viewers an "at a glance" understanding.
            </p>
            <p>
              I've continued these practices in all my future projects and am
              continually surprised by how useful these skills have become.
              I've noticed the biggest difference in the quality of my lab
              reports, essays, and even comments in code. I'd like to also say
              how grateful I am to my instructor Kevin for the ample feedback
              and continued support.
            </p>
          </div>
        </section>

        {/* Section 3: DNA & Evolution Essay 1 */}
        <section className="quarter-section">
          <div className="media-container">
            {/* Scrollable PDF */}
            <iframe
              src={`${process.env.PUBLIC_URL}/artifacts/essay-01.pdf`}
              title="Essay 01 PDF"
              className="scrollable-frame"
            ></iframe>
          </div>
          <div className="text-container">
            <h2>SLEEP STUDY</h2>
            <p>
              This essay is just a snapshot of Honors 221 A: DNA & Evolution. 
              Going into this class I was excited as I've always found genetics interesting, 
              but after taking the course I'm considering a career centered in the field.
            </p>
            <p>
              Learning about the intricacy of modern genetics and how data is collected
              for a variety of experiments piqued my interest and led me to discover the field
              of computational biology. This field can require highly specialized
              hardware, the type computer engineering is all about making! So this 
              could be a perfect field for me. I'm incredibly excited to further pursue this.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Winter22;
