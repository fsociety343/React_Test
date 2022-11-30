import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./TRANSAKSI.module.css";

const TRANSAKSI = () => {
  const navigate = useNavigate();

  const onArrowAltLeftLinkClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className={styles.tRANSAKSIDiv}>
      <img className={styles.groupIcon} alt="" src="../group-1.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv1} />
        <b className={styles.cetakBuktiTransaksi}>Cetak bukti transaksi</b>
      </div>
      <b className={styles.pembayaranTelahBerhasil}>
        Pembayaran Telah Berhasil
      </b>
      <div className={styles.groupDiv1}>
        <div className={styles.alfamartPayDiv}>Alfamart Pay</div>
        <b className={styles.metodePembayaran}>Metode Pembayaran</b>
        <b className={styles.totalBiaya}>Total Biaya</b>
        <div className={styles.macbookPro2017}>Macbook Pro 2017</div>
        <div className={styles.rp10000000Div}>Rp. 10.000.000</div>
        <div className={styles.div}>#137121-91212</div>
        <b className={styles.kodeTransaksiB}>Kode Transaksi</b>
        <b className={styles.detailOrderB}>Detail Order</b>
      </div>
      <div className={styles.lineDiv} />
      <div className={styles.lineDiv1} />
      <img className={styles.groupIcon1} alt="" src="../group-8734.svg" />
      <div className={styles.groupDiv2}>
        <div className={styles.rectangleDiv2} />
        <b className={styles.transaksiB}>Transaksi</b>
        <Link
          className={styles.arrowAltLeft}
          to="/dashboard"
          onClick={onArrowAltLeftLinkClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector-9.svg" />
        </Link>
      </div>
    </div>
  );
};

export default TRANSAKSI;
