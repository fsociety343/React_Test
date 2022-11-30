import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./DisplayMetodePembayaran.module.css";

const DisplayMetodePembayaran = () => {
  const navigate = useNavigate();

  const onRectangleLinkClick = useCallback(() => {
    navigate("/pembayaran");
  }, [navigate]);

  return (
    <div className={styles.displayMetodePembayaran}>
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleDiv1} />
      <img className={styles.vectorIcon} alt="" src="../vector-193.svg" />
      <Link className={styles.groupA} to="/keranjang">
        <img
          className={styles.buttonBackIcon}
          alt=""
          src="../button-back1.svg"
        />
      </Link>
      <div className={styles.groupDiv}>
        <b className={styles.metodePembayaran}>Metode Pembayaran</b>
        <div className={styles.groupDiv1}>
          <div className={styles.metodePembayaran}>Pilih Metode Pembayaran</div>
        </div>
      </div>
      <Link
        className={styles.rectangleA}
        to="/pembayaran"
        onClick={onRectangleLinkClick}
      />
      <div className={styles.rectangleDiv2} />
      <div className={styles.rectangleDiv3} />
      <b className={styles.vABNIMobile}>VA BNI Mobile</b>
      <b className={styles.cashOnDelivery}>Cash On Delivery</b>
      <div className={styles.groupDiv2}>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-62.svg" />
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-68@2x.png"
        />
      </div>
      <div className={styles.rectangleDiv4} />
      <div className={styles.groupDiv3}>
        <div className={styles.rectangleDiv5} />
        <img className={styles.pngwing1Icon} alt="" src="../pngwing-1@2x.png" />
      </div>
      <div className={styles.groupDiv4}>
        <div className={styles.rectangleDiv5} />
        <img
          className={styles.bankBNILogoPNG1080pFi}
          alt=""
          src="../bank-bni-logo-png1080p--filevector69-1@2x.png"
        />
      </div>
      <div className={styles.groupDiv5}>
        <i className={styles.cODI}>COD</i>
        <i className={styles.cashOnDelivery1}>cash on delivery</i>
      </div>
      <b className={styles.alfamartB}>Alfamart</b>
      <b className={styles.indomaretB}>Indomaret</b>
      <img className={styles.vectorIcon1} alt="" src="../vector-190.svg" />
      <img className={styles.vectorIcon2} alt="" src="../vector-191.svg" />
      <img className={styles.vectorIcon3} alt="" src="../vector-192.svg" />
    </div>
  );
};

export default DisplayMetodePembayaran;
