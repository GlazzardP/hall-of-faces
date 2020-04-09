import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import Navbar from "./containers/Navbar";
import Face from "./components/Face";
import FaceImg from "./images/Shea-removebg-preview.png";



function App() {
  const [randomNumber, updateRandomNumber] = useState(null);

  // const numberOfSheas = randomNumber;
  const numberOfSheas = 10;

  const faceArray = [];

  for (let i = 0; i < numberOfSheas; i++) {
    faceArray.push(<div className={styles.facCard}> <Face image={FaceImg} /> </div>);
  }

  let randomNum;

  const fetchRandomNum = () => { 
    fetch("https://csrng.net/csrng/csrng.php?min=0&max=100"
  )
    .then(result => result.json())
    .then(result => {
      randomNum = result;
      console.log(result);
      // console.log(fetchedFilms.Search);

      updateRandomNumber(randomNumber[0].random);
      console.log(randomNumber);
    })
    .catch(error => console.log(error))
};

useEffect(() => { 
  fetchRandomNum();
}, [])


  return (
    <>
      <Navbar />
      <section className={styles.faceList} >{faceArray}</section>
    </>
  );
}

export default App;
