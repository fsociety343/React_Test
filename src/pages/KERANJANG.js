import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./KERANJANG.module.css";

const KERANJANG = () => {
  const navigate = useNavigate();

  const onArrowAltLeftLinkClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onGroupLinkClick = useCallback(() => {
    navigate("/display-metode-pembayaran");
  }, [navigate]);

  return (
    <div className={styles.kERANJANGDiv}>
      <img className={styles.groupIcon} alt="" src="../group-1.svg" />
      <img className={styles.lineIcon} alt="" src="../line-3.svg" />
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv} />
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-4016@2x.png"
        />
        <div className={styles.groupDiv1}>
          <div className={styles.helmKYTFullFaceWhite}>Macbook Pro 2017</div>
          <div className={styles.hargaRp1000000000}>
            Harga, Rp. 10.000.000,00
          </div>
          <div className={styles.ram8GB256GB}>Ram 8 GB, 256 GB</div>
        </div>
        <div className={styles.rectangleDiv1} />
        <img className={styles.iconTrash} alt="" src="../-icon-trash.svg" />
        <img className={styles.groupIcon1} alt="" src="../group-8663.svg" />
      </div>
      <div className={styles.groupDiv2}>
        <div className={styles.rectangleDiv} />
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-4015@2x.png"
        />
        <div className={styles.groupDiv3}>
          <div className={styles.helmKYTFullFaceWhite}>
            Helm KYT Full Face - White
          </div>
          <div className={styles.hargaRp1000000000}>Harga, Rp. 450.000,00</div>
          <div className={styles.ram8GB256GB}>Ukuran L</div>
        </div>
        <div className={styles.rectangleDiv3} />
        <img className={styles.iconTrash1} alt="" src="../-icon-trash.svg" />
        <img className={styles.groupIcon2} alt="" src="../group-8663.svg" />
      </div>
      <div className={styles.groupDiv4}>
        <div className={styles.rectangleDiv} />
        <img
          className={styles.rectangleIcon2}
          alt=""
          src="../rectangle-4014@2x.png"
        />
        <div className={styles.groupDiv5}>
          <div
            className={styles.helmKYTFullFaceWhite}
          >{`Pants H&M - Navy Basic`}</div>
          <div className={styles.hargaRp1000000000}>Harga, Rp. 130.000,00</div>
          <div className={styles.ram8GB256GB}>Ukuran S,L,M,XL</div>
        </div>
        <div className={styles.rectangleDiv5} />
        <img className={styles.iconTrash2} alt="" src="../-icon-trash.svg" />
        <img className={styles.groupIcon2} alt="" src="../group-8663.svg" />
      </div>
      <div className={styles.groupDiv6}>
        <div className={styles.rectangleDiv} />
        <img
          className={styles.rectangleIcon3}
          alt=""
          src="../rectangle-4013@2x.png"
        />
        <div className={styles.groupDiv7}>
          <div
            className={styles.helmKYTFullFaceWhite}
          >{`Hoddie H&M - Hitam Basic`}</div>
          <div className={styles.hargaRp1000000000}>Harga, Rp. 120.000,00</div>
          <div className={styles.ram8GB256GB}>Ukuran S,L,M,XL</div>
        </div>
        <div className={styles.rectangleDiv3} />
        <img className={styles.iconTrash3} alt="" src="../-icon-trash.svg" />
        <img className={styles.groupIcon4} alt="" src="../group-8663.svg" />
      </div>
      <div className={styles.groupDiv8}>
        <div className={styles.rectangleDiv8} />
        <b className={styles.keranjangB}>Keranjang</b>
        <Link
          className={styles.arrowAltLeft}
          to="/dashboard"
          onClick={onArrowAltLeftLinkClick}
        >
          <img className={styles.vectorIcon} alt="" src="../vector-92.svg" />
        </Link>
      </div>
      <div className={styles.groupDiv9}>
        <div className={styles.rectangleDiv9} />
        <div className={styles.groupDiv10}>
          <div className={styles.totalBayarDiv}>Total bayar</div>
          <b className={styles.rp120000B}>Rp. 120.000,-</b>
        </div>
        <div className={styles.groupDiv11}>
          <div className={styles.rectangleDiv10} />
          <div className={styles.pilihSemuaDiv}>Pilih Semua</div>
        </div>
        <Link
          className={styles.groupA}
          to="/display-metode-pembayaran"
          onClick={onGroupLinkClick}
        >
          <div className={styles.rectangleDiv11} />
          <div className={styles.checkoutDiv}>Checkout</div>
        </Link>
      </div>
    </div>
  );
};

export default KERANJANG;
