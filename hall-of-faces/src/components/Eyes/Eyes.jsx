import React, { useState } from "react";
import styles from "./Eyes.module.scss";
import LeftEye from "../LeftEye/LeftEye";
import RightEye from "../RightEye/RightEye";
import right from "../../images/right.png";
import left from "../../images/left.png";

const Eyes = (props) => {

  const {eyesLevel} = props;
  return (
    <div className={`${styles.sheaEyes}`}>
      <LeftEye image={left} eyesLevel={eyesLevel}/>
      <RightEye image={right} eyesLevel={eyesLevel} />
    </div>
  );
};

export default Eyes;
