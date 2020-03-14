import React, { useState } from "react";
import styles from "./Face.module.scss";
import Eyes from "../Eyes";

const Face = props => {
  const { image } = props;

  return (
    <div className={styles.faceCard}>
      <img clas src={image} alt={image} />
      <Eyes />
    </div>
  );
};

export default Face;
