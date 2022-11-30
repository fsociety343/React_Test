import { useCallback } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./LOGIN.module.css";

const LOGIN = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  return (
    <div className={styles.lOGINDiv}>
      <img className={styles.groupIcon} alt="" src="../group-74.svg" />
      <img className={styles.groupIcon1} alt="" src="../group-1.svg" />
      <img className={styles.groupIcon2} alt="" src="../group-82.svg" />
      <Button
        className={styles.groupButton}
        sx={{ width: 193 }}
        variant="contained"
        color="primary"
        href="/dashboard"
        onClick={onGroupButtonClick}
      >
        Login
      </Button>
      <Button
        className={styles.groupButton1}
        sx={{ width: 193 }}
        variant="contained"
        color="primary"
        href="/sign-up"
        onClick={onGroupButton1Click}
      >
        Sign Up
      </Button>
      <div className={styles.groupDiv}>
        <div className={styles.emailDiv}>Email</div>
        <div className={styles.passwordDiv}>Password</div>
        <div className={styles.lineDiv} />
        <div className={styles.lineDiv1} />
        <i className={styles.yourEmailId}>Your email id</i>
        <i className={styles.yourPasswordI}>Your password</i>
        <i className={styles.forgotPasswordI}>Forgot password</i>
      </div>
      <div className={styles.groupDiv1}>
        <div className={styles.uDBSHOPDiv}>UDB SHOP</div>
        <img className={styles.shopIcon} alt="" src="../shop2.svg" />
      </div>
      <div className={styles.loginToAccount}>Login to Account</div>
      <TextField
        className={styles.lineTextField}
        sx={{ width: 164.00306701660156 }}
        color="primary"
        variant="standard"
        type="text"
        label="Your email"
        size="small"
        margin="none"
      />
      <img
        className={styles.viewAltFillIcon}
        alt=""
        src="../view-alt-fill.svg"
      />
    </div>
  );
};

export default LOGIN;
