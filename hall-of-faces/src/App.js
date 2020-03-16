import React from "react";
import "./App.css";
import Navbar from "./containers/Navbar";
import Face from "./components/Face";
import FaceImg from "./images/FaceImg.png";

function App() {
  const numberOfSheas = 6;
  const faceArray = [];

  for (let i = 0; i < numberOfSheas; i++) {
    faceArray.push(<Face image={FaceImg} />);
  }
  return (
    <>
      <Navbar />
      <div>{faceArray}</div>
      {/* <script>
      <script src="https://www.gstatic.com/firebasejs/7.11.0/firebase-app.js"></script>

      <script src="https://www.gstatic.com/firebasejs/7.11.0/firebase-analytics.js"></script>

      <script>
        var firebaseConfig = {
          apiKey: "AIzaSyCIktxqLfK_1Y3WMJi_4eHLn2_pv6fzakg",
          authDomain: "pg-hall-of-shaem.firebaseapp.com",
          databaseURL: "https://pg-hall-of-shaem.firebaseio.com",
          projectId: "pg-hall-of-shaem",
          storageBucket: "pg-hall-of-shaem.appspot.com",
          messagingSenderId: "33390212382",
          appId: "1:33390212382:web:127f76192a297a9cc9850f",
          measurementId: "G-ML2VEJ7ZTM"
        };
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
      </script> */}
    </>
  );
}

export default App;
