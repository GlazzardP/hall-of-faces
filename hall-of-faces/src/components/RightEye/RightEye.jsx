import React from "react";
// import { styles } from "ansi-colors";
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
