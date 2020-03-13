import React from "react";
// import styles from "./LeftEye.module.scss";

const LeftEye = props => {
  const { image } = props;
  return (
    <>
      <img src={image} alt={image} />
    </>
  );
};

export default LeftEye;
