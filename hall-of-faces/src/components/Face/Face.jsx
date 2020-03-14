import React, { useState } from "react";
import styles from "./Face.module.scss";
import Eyes from "../Eyes";

const Face = props => {
  const { image } = props;
  const [eyesLevel, rotateEyes] = useState(true);
  const spinEyes = eyesLevel ? "" : styles.rotate;

  return (
    <div
      className={`${styles.faceCard} ${spinEyes}`}
      onClick={() => rotateEyes(!eyesLevel)}
    >
      <img clas src={image} alt={image} />

      <Eyes />
    </div>
  );
};

export default Face;
