import React from "react";
import styles from "./Eyes.module.scss";
import LeftEye from "../LeftEye/LeftEye";
import RightEye from "../RightEye/RightEye";
import right from "../../images/right.png";
import left from "../../images/left.png";

const Eyes = () => {
  return (
    <div className={styles.sheaEyes}>
      <LeftEye image={left} />
      <RightEye image={right} />
    </div>
  );
};

export default Eyes;
