import React, { useState } from "react";
import styles from "./Eyes.module.scss";
import LeftEye from "../LeftEye/LeftEye";
import RightEye from "../RightEye/RightEye";
import right from "../../images/right.png";
import left from "../../images/left.png";

const Eyes = () => {
  const [eyesLevel, rotateEyes] = useState(true);

  const spinEyes = eyesLevel ? "" : styles.rotate;
  return (
    <div
      className={`${styles.sheaEyes} ${spinEyes}`}
      onClick={() => rotateEyes(!eyesLevel)}
    >
      <LeftEye image={left} />
      <RightEye image={right} />
    </div>
  );
};

export default Eyes;
