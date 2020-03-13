import React from "react";
import styles from "./Face.module.scss";
// import RightEye from "../../images/RightEye.png";
// import LeftEye from "../../images/LeftEye.png";
import Eyes from "../Eyes";

const Face = props => {
  const { image } = props;
  return (
    <>
      <img clas src={image} alt={image} />
      <Eyes />
    </>
  );
};

export default Face;
