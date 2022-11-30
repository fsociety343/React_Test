import { useCallback } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./SIGNUP.module.css";

const SIGNUP = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.sIGNUPDiv}>
      <img className={styles.groupIcon} alt="" src="../group-7.svg" />
      <img className={styles.groupIcon1} alt="" src="../group-1.svg" />
      <img className={styles.groupIcon2} alt="" src="../group-8.svg" />
      <div className={styles.groupDiv} onClick={onGroupContainerClick}>
        <Button
          className={styles.rectangleButton}
          sx={{ width: 193 }}
          variant="contained"
          color="primary"
          href="/login"
        />
        <div className={styles.signUpDiv}>Sign Up</div>
      </div>
      <div className={styles.groupDiv1}>
        <div className={styles.groupDiv2}>
          <div className={styles.nameDiv}>Name</div>
          <div className={styles.lastNameDiv}>Last Name</div>
          <div className={styles.lineDiv} />
          <div className={styles.lineDiv1} />
          <i className={styles.yourNameI}>Your name</i>
          <i className={styles.yourLastName}>Your last name</i>
        </div>
        <TextField
          className={styles.groupTextField}
          sx={{ width: 318 }}
          color="primary"
          variant="standard"
          defaultValue="Password"
          multiline
          label="Email"
          placeholder="Your password"
          helperText="Your email id"
          margin="none"
          name
        />
      </div>
      <div className={styles.groupDiv3}>
        <div className={styles.uDBSHOPDiv}>UDB SHOP</div>
        <img className={styles.shopIcon} alt="" src="../shop1.svg" />
      </div>
      <div className={styles.signUpAccount}>Sign Up Account</div>
      <div className={styles.lineDiv2} />
    </div>
  );
};

export default SIGNUP;
