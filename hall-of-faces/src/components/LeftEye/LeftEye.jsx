import React from "react";
import styles from "./LeftEye.module.scss";

const LeftEye = props => {
  const { image, eyesLevel } = props;
  const spinEyes = eyesLevel ? "" : styles.rotate;

  return (
    <>
      <img src={image} alt={image} className={styles.leftEye} className={spinEyes}/>
    </>
  );
};

export default LeftEye;
