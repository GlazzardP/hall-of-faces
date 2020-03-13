import React from "react";
import styles from "./Face.module.scss";
// import LeftEye from "../../images/LeftEye";
// import RightEye from "../../images/RightEye";

const Face = props => {
  const { image } = props;
  return (
    <>
      <img src={image} alt={image} />
      {/* <LeftEye />
      <RightEye /> */}
    </>
  );
};

export default Face;
