import React, { useState } from "react";
import styles from "./RightEye.module.scss";

const RightEye = props => {
  const { image, eyesLevel } = props;
  const spinEyes = eyesLevel ? "" : styles.rotate;


  return (
    <>
      <img className={styles.rightEye} src={image} alt={image} className={spinEyes}/>
    </>
  );
};

export default RightEye;
