import React from "react";
import Carousel from "../Carousel";
import "./../HonorsPortfolio.css";
import "./quarter.css";

function Spring22() {
  const ACM_Images = [
    "ACM/boba-social.png",
    "ACM/spring-bbq.png",
    "ACM/dubs-mystery.png",
    "ACM/dubs.png",
    "ACM/game-night-neon.png",
    "ACM/winter-ball-fundraiser.png",
    "ACM/winter-ball-red-carpet.png",
    "ACM/registration-advice.png",
    "ACM/research-night.png",
    "ACM/fall-fest.png"
  ];

  return (
    <div className="quarter-spring">
      <div className="quarter-page">
        <h1>SPRING 22</h1>

        {/* Section 1: Dubs */}
        <section className="quarter-section">
          <div className="media-container">
          <img
              src={`${process.env.PUBLIC_URL}/artifacts/dubs.png`}
              alt="Apeel Sciences Poster Draft"
              className="photo"
            />
          </div>
          <div className="text-container">
            <h2>MEETING DUBS</h2>
            <p>
                Meeting Dubs has been on my bucket list since the day I was accepted to UW. 
                So getting this chance to meet him at ACM's Spring Barbeque was beyond exciting! 
                He was surprisingly soft and incredibly well trained. 
            </p>
            <p>
                Crossing this essential item off my bucket list caused me to reflect on my 
                experiences throughout the year and what a great time it was. 
                I also wrote several new items to my now ever-growing list and gave myself 
                goals to meet for my following years at UW. 
            </p>
            <p>
                These goals ranged from career aspirations like landing an internship to social 
                desires like branching out and making new connections all throughout the next year.
            </p>
          </div>
        </section>

        {/* Section 2: ACE */}
        <section className="quarter-section">
          <div className="media-container">
            <Carousel images={ACM_Images} />
          </div>
          <div className="text-container">
            <h2>ACM GRAPHICS DIRECTOR</h2>
            <p>
                Since Fall quarter I had served as an Associate Officer in ACM and worked with Chandra, 
                the Graphics Director, to create social media advertisements for the RSO.
            </p>
            <p>
                Chandra was graduating and I had grown to love working with the talented leadership 
                team so I decided to run for Graphics Director in the RSO's yearly officer election. 
                I won the election and assumed the role of Graphics Director for the following summer 
                and the 2022-2023 school year. 
            </p>
            <p>
                Being a part of ACM has given me the confidence to apply to for more opportunities 
                and has greatly improved my communication skills. 
                My role requires working with nearly every member of the team so efficient and 
                precise communication has been essential. 
            </p>
          </div>
        </section>

        {/* Section 3: Automous Weapons */}
        <section className="quarter-section">
          <div className="media-container">
            <iframe 
                src="https://docs.google.com/presentation/d/e/2PACX-1vTOjkICSxbkHSfaor9haSwSuxAxi59jBW84WK_9hh6ijdL8g4JjLgI2ZLr_m-AXjxOpDAfZvUbg3DRN/embed?start=false&loop=true&delayms=3000" 
                frameborder="0" 
                width="480" 
                height="299"
                allowfullscreen="true" 
                mozallowfullscreen="true" 
                webkitallowfullscreen="true">
            </iframe>
          </div>
          <div className="text-container">
            <h2>AUTOMOUS WEAPONS PRESENTATION</h2>
            <p>
                My Honors course on Artificial Intelligence and its impacts on society gave us students 
                the chance to explore any topic involving the use of AI in a group presentation. 
            </p>
            <p>
                My group presented on the use of AI to control autonomous weapons. 
                We explored the ethical implications, legal standings, and future consequences around the subject. 
                I was mainly in charge of slide design and the topic of legal standings. 
                I learned a lot about how international policy works, particularly how it consistently lags behind technology. 
            </p>
            <p>
                My key takeaway from this class and project was that when designing/programming 
                anything a key consideration beyond the function of the product should always 
                be it's use cases and ethical considerations. 
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Spring22;