---
title: "Projects"
layout: ../layouts/AboutLayout.astro
---

<style>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.header-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: bold;
}
.header-date {
  text-align: right;
  font-weight: bold;
  margin: 0;
  white-space: nowrap;
}
.ul-projects {
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  text-align: justify;
  padding-left: 20px;
}
.li-projects {
  text-align: justify;
  margin-bottom: 0.5rem;
}
.category-header {
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: var(--accent);
  border-bottom: 2px solid var(--accent);
  padding-bottom: 0.5rem;
}
</style>

<h3 class="category-header">AI & Machine Learning</h3>

<div>
  <div class="header-container">
    <h4 class="header-title"><a href="https://www.youtube.com/watch?v=5yCXNR0HYYo">Improving RAG Retrieval Methods</a></h4>
    <p class="header-date">Oct - Dec 2024 (~70 hours)</p>
  </div>
  <ul class="ul-projects">
    <li class="li-projects">Comprehensive literature review, explored limitations, proposed hybrid retrieval approach combining CDE and graph RAG.</li>
    <li class="li-projects">Preliminary results show graph RAG (2024) outperforms CDE (2024) and RAG (2020) by 30% on Rouge-L F1 score.</li>
  </ul>
</div>

<div>
  <div class="header-container">
    <h4 class="header-title">Audit of Twitter</h4>
    <p class="header-date">Oct - Dec 2024 (~70 hours)</p>
  </div>
  <ul class="ul-projects">
    <li class="li-projects">Ran audit of X's "For You" feed, analyzing 201k tweets across nine countries, working with two PhD students.</li>
    <li class="li-projects">Observed 73.1% political right-leaning bias, 29.9% US-centric bias & amplification of users @alexjones, @elonmusk.</li>
  </ul>
</div>

<div>
  <div class="header-container">
    <h4 class="header-title"><a href="https://devpost.com/software/consider-this">Considerthis.ai</a></h4>
    <p class="header-date">Jul 2024 (~30 hours)</p>
  </div>
  <ul class="ul-projects">
    <li class="li-projects">An emotionally intelligent multi-agent conversation tool used by educators to empower students to stay relentlessly curious.</li>
    <li class="li-projects">Worked with students from UCBerkeley, UWashington, CUBoulder; leveraged Hume.ai, ReactJS, Supabase.</li>
  </ul>
</div>

<div>
  <div class="header-container">
    <h4 class="header-title"><a href="https://docs.google.com/document/d/1_zcy1VZTOfGveNvM_K-lntp2uQrTXXms2F4YjkuhW54/edit?usp=sharing">House Price Regression</a></h4>
    <p class="header-date">Apr 2023</p>
  </div>
  <ul class="ul-projects">
    <li class="li-projects">Predicted house sale prices given a dataset of house sale data.</li>
    <li class="li-projects">Selected relevant features, cleaned dataset, tested KNN, Lasso and Ridge linear regression to compare RMSE scores.</li>
  </ul>
</div>

<div>
  <div class="header-container">
    <h4 class="header-title"><a href="https://devpost.com/software/crop-yield-prediction-ce9x6n">Crop Yield Prediction</a></h4>
    <p class="header-date">Feb 2023</p>
  </div>
  <ul class="ul-projects">
    <li class="li-projects">Predicted the crop yield from land based on soil and yield data from John Deere.</li>
    <li class="li-projects">Trained a Decision Tree Classifier ML Model and built a frontend visualization in ReactJS and CSS.</li>
  </ul>
</div>

<h3 class="category-header">Web Development</h3>

<div>
  <div class="header-container">
    <h4 class="header-title"><a href="https://github.com/suyash-stock-dashboard">Stock Market Analysis Dashboard</a></h4>
    <p class="header-date">Jan 2024</p>
  </div>
  <ul class="ul-projects">
    <li class="li-projects">Developed a Streamlit web app fetching stock data from Yahoo Finance API and visualizing using Plotly.</li>
    <li class="li-projects">Implemented sentiment analysis of news headlines using NLTK, introducing financial data analysis and trading concepts.</li>
  </ul>
</div>

<div>
  <div class="header-container">
    <h4 class="header-title"><a href="https://remage.pages.dev/">Remage</a></h4>
    <p class="header-date">Nov 2023</p>
  </div>
  <ul class="ul-projects">
    <li class="li-projects">An open-source, modular toolkit that transforms images into interactive, map-like components.</li>
    <li class="li-projects">Developed using TypeScript and React, with Tailwind CSS.</li>
  </ul>
</div>

<div>
  <div class="header-container">
    <h4 class="header-title"><a href="https://devpost.com/software/ctassist-2qu54h">CTAssist</a></h4>
    <p class="header-date">Apr 2021</p>
  </div>
  <ul class="ul-projects">
    <li class="li-projects">Smart Wheelchair-accessible Navigation system for public transport commuters in Chicago.</li>
    <li class="li-projects">Uses the CTA Transit, Customer Alerts, and Google Maps APIs to calculate most efficient route.</li>
  </ul>
</div>

<h3 class="category-header">Mobile App Development</h3>

<div>
  <div class="header-container">
    <h4 class="header-title"><a href="https://devpost.com/software/spndmate">Spndmate</a></h4>
    <p class="header-date">Feb - May 2024 (~60 hours)</p>
  </div>
  <ul class="ul-projects">
    <li class="li-projects">A fresh perspective to group-bill splitting and personal budgeting for young adults, powered by Splitwise.</li>
    <li class="li-projects">An Android/iOS app built using Flutter, Android emulator and Material UI, with Google Sheets backend API.</li>
  </ul>
</div>

<div>
  <div class="header-container">
    <h4 class="header-title"><a href="https://docs.google.com/presentation/d/1NWBQLSzvgOGBHayKl5xRV5tL7vMCtOa2rdNeE1EkIaY/edit?usp=sharing">Dumstr</a></h4>
    <p class="header-date">Dec 2023</p>
  </div>
  <ul class="ul-projects">
    <li class="li-projects">A marketplace for students to give away and collect reusable items for free, built using Flutter.</li>
  </ul>
</div>

<h3 class="category-header">Hardware & IoT</h3>

<div>
  <div class="header-container">
    <h4 class="header-title"><a href="https://docs.google.com/document/d/1FZZr3KRzC2Mpgl84gQ1T3HsgTT4uAc6V/edit?usp=sharing&ouid=112766693837551945990&rtpof=true&sd=true">Spotify LED Controller</a></h4>
    <p class="header-date">May 2023 (~30 hours)</p>
  </div>
  <ul class="ul-projects">
    <li class="li-projects">Program to sync LED lights to song playing on Spotify, enhancing user immersion; successfully tested with 30+ songs.</li>
    <li class="li-projects">Written in Go on Raspberry Pi; uses Spotify API, Bluetooth, and a custom album-art based coloring algorithm.</li>
  </ul>
</div>

<h3 class="category-header">Algorithms & Computer Graphics</h3>

<div>
  <div class="header-container">
    <h4 class="header-title"><a href="https://github.com/faddock/Pokemon-Type-Advantage-Graph-Visualization">Pokémon Type Advantage Visualization</a></h4>
    <p class="header-date">Jan 2022</p>
  </div>
  <ul class="ul-projects">
    <li class="li-projects">C++ Visualization that attempts to compare Pokémon strength based on their Type.</li>
    <li class="li-projects">Uses Force-Based Graph Visualization and Graph Coloring to investigate Pokémon Type advantages.</li>
  </ul>
</div>

<div>
  <div class="header-container">
    <h4 class="header-title"><a href="https://github.com/faddock/graph-coloring-visualizer">Graph Coloring Visualizer</a></h4>
    <p class="header-date">May 2021</p>
  </div>
  <ul class="ul-projects">
    <li class="li-projects">Developed a backtracking algorithm to calculate the Chromatic Number of a graph.</li>
    <li class="li-projects">Helped students visualize and learn Graph Coloring concepts in CS 173 - Discrete Structures as a Course Assistant.</li>
  </ul>
</div>
