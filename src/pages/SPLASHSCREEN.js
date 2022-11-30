import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SPLASHSCREEN.module.css";

const SPLASHSCREEN = () => {
  const navigate = useNavigate();

  const onSPLASHSCREENContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div
      className={styles.sPLASHSCREENDiv}
      onClick={onSPLASHSCREENContainerClick}
    >
      <div className={styles.rectangleDiv} />
      <div className={styles.mUDAHMURAHMANTAPLAH}>MUDAH, MURAH, MANTAPLAH</div>
      <div className={styles.version101Div}>version 1.01</div>
      <div className={styles.groupDiv}>
        <div className={styles.uDBSHOPDiv}>UDB SHOP</div>
        <img className={styles.shopIcon} alt="" src="../shop3.svg" />
      </div>
    </div>
  );
};

export default SPLASHSCREEN;
