import React, { useState } from "react";
import styles from "./Face.module.scss";
import Eyes from "../Eyes";
import { number } from "prop-types";

const Face = props => {
  const { image } = props;
  const [eyesLevel, rotateEyes] = useState(true);
  const spinEyes = eyesLevel ? "" : styles.rotate;

  return (
    <div
      className={`${styles.faceCard}`}
      onClick={() => rotateEyes(!eyesLevel)}
    >
      <img clas src={image} alt={image} />
      <div className={spinEyes}>
        <Eyes />
      </div>
    </div>
  );
};

export default Face;
