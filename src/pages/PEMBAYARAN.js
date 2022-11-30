import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./PEMBAYARAN.module.css";

const PEMBAYARAN = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/transaksi");
  }, [navigate]);

  return (
    <div className={styles.pEMBAYARANDiv}>
      <div className={styles.rectangleDiv} />
      <Link className={styles.groupA} to="/display-metode-pembayaran">
        <img
          className={styles.buttonBackIcon}
          alt=""
          src="../button-back.svg"
        />
      </Link>
      <b className={styles.alfamartB}>Alfamart</b>
      <div className={styles.groupDiv}>
        <div className={styles.silahkanLakukanPembayaran}>
          Silahkan lakukan pembayaran
        </div>
      </div>
      <div className={styles.groupDiv1} onClick={onGroupContainer1Click}>
        <img className={styles.iconBarcode} alt="" src="../-icon-barcode.svg" />
        <div className={styles.div}>17129132412931723982</div>
      </div>
      <b className={styles.rp10000000B}>Rp. 10.000.000</b>
      <b className={styles.totalB}>Total</b>
      <img className={styles.lineIcon} alt="" src="../line-7.svg" />
      <img className={styles.lineIcon1} alt="" src="../line-7.svg" />
      <div className={styles.berlakuHingga23Oktober2022}>
        <p className={styles.berlakuHingga23Oktober20221}>
          <span>Berlaku hingga 23 Oktober 2022</span>
        </p>
        <p className={styles.sampaiDenganPukul2259}>
          <span>{`sampai dengan pukul `}</span>
          <span className={styles.span}>22:59</span>
        </p>
      </div>
      <Link className={styles.groupA1} to="/transaksi">
        <div className={styles.rectangleDiv1} />
        <b className={styles.cetakBarcode}>Cetak barcode</b>
      </Link>
    </div>
  );
};

export default PEMBAYARAN;
