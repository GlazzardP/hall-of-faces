import React, { useState } from "react";
import styles from "./RightEye.module.scss";

const RightEye = props => {
  const { image } = props;

  return (
    <>
      <img className={styles.rightEye} src={image} alt={image} />
    </>
  );
};

export default RightEye;
