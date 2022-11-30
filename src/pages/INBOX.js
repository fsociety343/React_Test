import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./INBOX.module.css";

const INBOX = () => {
  const navigate = useNavigate();

  const onArrowAltLeftLinkClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className={styles.iNBOXDiv}>
      <img className={styles.groupIcon} alt="" src="../group-1.svg" />
      <div className={styles.groupDiv}>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv} />
          <img
            className={styles.ellipseIcon}
            alt=""
            src="../ellipse-69@2x.png"
          />
          <b className={styles.marioGomezB}>Mario Gomez</b>
          <img className={styles.ellipseIcon1} alt="" src="../ellipse-70.svg" />
          <img className={styles.groupIcon1} alt="" src="../group-8715.svg" />
        </div>
        <div className={styles.groupDiv2}>
          <div className={styles.groupDiv3}>
            <div className={styles.groupDiv3}>
              <div className={styles.rectangleDiv} />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-691@2x.png"
              />
            </div>
            <b className={styles.doditSaputroB}>Dodit Saputro</b>
          </div>
          <img className={styles.ellipseIcon3} alt="" src="../ellipse-71.svg" />
          <img className={styles.groupIcon2} alt="" src="../group-8716.svg" />
        </div>
        <div className={styles.groupDiv5}>
          <div className={styles.rectangleDiv} />
          <img
            className={styles.ellipseIcon}
            alt=""
            src="../ellipse-69@2x.png"
          />
          <b className={styles.marioGomezB1}>Mario Gomez</b>
          <img
            className={styles.ellipseIcon1}
            alt=""
            src="../ellipse-701.svg"
          />
          <img className={styles.groupIcon1} alt="" src="../group-87151.svg" />
        </div>
        <div className={styles.groupDiv6}>
          <div className={styles.groupDiv3}>
            <div className={styles.groupDiv3}>
              <div className={styles.rectangleDiv} />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-691@2x.png"
              />
            </div>
            <b className={styles.doditSaputroB1}>Dodit Saputro</b>
          </div>
          <img
            className={styles.ellipseIcon3}
            alt=""
            src="../ellipse-711.svg"
          />
          <img className={styles.groupIcon2} alt="" src="../group-8715.svg" />
          <div className={styles.apakahMasihAda}>Apakah masih ada?</div>
        </div>
        <div className={styles.groupDiv9}>
          <div className={styles.rectangleDiv} />
          <img
            className={styles.ellipseIcon}
            alt=""
            src="../ellipse-69@2x.png"
          />
          <b className={styles.marioGomezB2}>Mario Gomez</b>
          <img
            className={styles.ellipseIcon1}
            alt=""
            src="../ellipse-702.svg"
          />
          <img className={styles.groupIcon1} alt="" src="../group-87152.svg" />
          <div className={styles.apakahMasihAda1}>Apakah masih ada?</div>
        </div>
        <div className={styles.groupDiv10}>
          <div className={styles.groupDiv3}>
            <div className={styles.groupDiv3}>
              <div className={styles.rectangleDiv} />
              <img
                className={styles.ellipseIcon10}
                alt=""
                src="../ellipse-695@2x.png"
              />
            </div>
            <b className={styles.doditSaputroB2}>Dodit Saputro</b>
          </div>
          <img className={styles.ellipseIcon11} alt="" />
          <img className={styles.groupIcon2} alt="" src="../group-87162.svg" />
          <div className={styles.apakahMasihAda2}>Apakah masih ada?</div>
        </div>
        <div className={styles.cekInboxMasseh}>Cek inbox masseh!</div>
        <div className={styles.apakahMasihAda3}>Apakah masih ada?</div>
        <div className={styles.apakahMasihAda4}>Apakah masih ada?</div>
      </div>
      <div className={styles.groupDiv13}>
        <img className={styles.groupIcon7} alt="" src="../group-8711.svg" />
        <i className={styles.cariPesanYangBelumTerbalas}>
          Cari pesan yang belum terbalas
        </i>
      </div>
      <div className={styles.groupDiv14}>
        <div className={styles.rectangleDiv6} />
        <b className={styles.kotakMasukB}>Kotak Masuk</b>
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

export default INBOX;
