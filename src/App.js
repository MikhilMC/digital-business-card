import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Interests from "./components/Interests";
import Intro from "./components/Intro";
import profilePicture from "./images/profile-picture.jpg";

function App() {
  return (
    <div className="app">
      <img className="profile-image" alt="profile" src={profilePicture} />
      <div className="app--content">
        <Intro />
        <div className="app--description">
          <About />
          <Interests />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
