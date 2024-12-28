import React, { useState, useEffect } from "react";
import "./../HonorsPortfolio.css";
import "./quarter.css";

function Autumn21() {
  return (
    <div className="quarter-page">
      <h1>Autumn 21</h1>

      {/* Section 1: Genre Analysis */}
      <section className="quarter-section">
        <div className="media-container">
          {/* Embed scrollable PDF */}
          <iframe
            src="/artifacts/genre-analysis.pdf"
            title="Genre Analysis Paper"
            className="scrollable-frame"
          />
        </div>
        <div className="text-container">
          <h2>Genre Analysis</h2>
          <p>
            This is my first of two major projects for English 182K, an honors section of 182 that focuses on multimodal composition.
          </p>
          <p>
            My project details the inner workings and rhetorical situation of Fortune 500 retail companies’ annual letter to shareholders. I examined the letters of Home Depot, Costco, and Amazon then compared their similarities and differences in overarching genre analysis.
          </p>
          <p>
            Overall, this project has taught me to plan out the scope of my future assignments more carefully before starting but also even when things do go wrong, there’s usually a way to salvage something from it.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="quarter-section">
        <div className="media-container">
          {/* Embed Evil Hangman Game */}
          <iframe
            src="/hangman.html"
            title="Evil Hangman"
            className="scrollable-frame"
          />
        </div>
        <div className="text-container">
          <h2>Evil Hangman</h2>
          <p>
            This is a javascript recreation of an assignment from CSE 143, the final introductory CS course that focuses on data structures such as Maps, Binary Trees, and Linked Lists.
          </p>
          <p>
            This is the Evil Hangman assignment which simulates a game of hangman but delays choosing a word from its dictionary of words until as late as possible. It will waste the user's guesses by choosing whether or not to include a letter by identifying which option leaves it with the most words left to choose from.
          </p>
          <p>
            The implementation of the program focuses on using Sets and Maps to store and evaluate the best possible future pattern based on the user's guess. I struggled with this assignment but learned that drawing out the program logic on my whiteboard greatly imroves my ability to work with complex data structures.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Autumn21;
