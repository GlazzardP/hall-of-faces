import React from "react";
import "./App.css";
import Navbar from "./containers/Navbar";
import Face from "./components/Face";
import FaceImg from "./images/FaceImg.png";

function App() {
  return (
    <>
      <Navbar />
      <Face image={FaceImg} />
    </>
  );
}

export default App;
