import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./MENUBARANGBEKAS.module.css";

const MENUBARANGBEKAS = () => {
  const navigate = useNavigate();

  const onGroupLinkClick = useCallback(() => {
    navigate("/pilih-item");
  }, [navigate]);

  const onGroupLink1Click = useCallback(() => {
    navigate("/keranjang");
  }, [navigate]);

  return (
    <div className={styles.mENUBARANGBEKAS}>
      <div className={styles.rectangleDiv} />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="../rectangle-4028@2x.png"
      />
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv1} />
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-40281@2x.png"
        />
      </div>
      <div className={styles.groupDiv1}>
        <div className={styles.rectangleDiv1} />
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-40282@2x.png"
        />
      </div>
      <div className={styles.groupDiv2}>
        <div
          className={styles.hoddieHMHitamBasic}
        >{`Hoddie H&M - Hitam Basic`}</div>
        <b className={styles.rp120000B}>Rp. 120.000</b>
        <div className={styles.groupDiv3}>
          <div className={styles.terjual5Div}>4,8 | Terjual 5</div>
          <img className={styles.iconStar} alt="" src="../-icon-star1.svg" />
        </div>
      </div>
      <div className={styles.groupDiv4}>
        <div
          className={styles.hoddieHMHitamBasic}
        >{`Hoddie H&M - Hitam Basic`}</div>
        <b className={styles.rp120000B}>Rp. 120.000</b>
        <div className={styles.groupDiv3}>
          <div className={styles.terjual5Div}>4,8 | Terjual 5</div>
          <img className={styles.iconStar} alt="" src="../-icon-star1.svg" />
        </div>
      </div>
      <div className={styles.groupDiv6}>
        <div
          className={styles.hoddieHMHitamBasic}
        >{`Hoddie H&M - Hitam Basic`}</div>
        <b className={styles.rp120000B}>Rp. 120.000</b>
        <div className={styles.groupDiv3}>
          <div className={styles.terjual5Div}>4,8 | Terjual 5</div>
          <img className={styles.iconStar} alt="" src="../-icon-star1.svg" />
        </div>
      </div>
      <div className={styles.groupDiv8}>
        <div className={styles.rectangleDiv1} />
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-4027@2x.png"
        />
        <div className={styles.groupDiv9}>
          <div className={styles.hoddieHMHitamBasic}>Macbook Pro 2017</div>
          <b className={styles.rp10000000B}>Rp. 10.000.000</b>
          <div className={styles.terjual5Div3}>4,8 | Terjual 5</div>
          <img className={styles.vectorIcon} alt="" />
        </div>
      </div>
      <div className={styles.groupDiv10}>
        <div className={styles.rectangleDiv1} />
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-40271@2x.png"
        />
        <div className={styles.groupDiv11}>
          <div className={styles.hoddieHMHitamBasic}>Macbook Pro 2017</div>
          <b className={styles.rp10000000B}>Rp. 10.000.000</b>
          <div className={styles.terjual5Div3}>4,8 | Terjual 5</div>
          <img className={styles.vectorIcon1} alt="" src="../-icon-star1.svg" />
        </div>
      </div>
      <div className={styles.groupDiv12}>
        <div className={styles.rectangleDiv1} />
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-40272@2x.png"
        />
        <div className={styles.groupDiv13}>
          <div className={styles.hoddieHMHitamBasic}>Macbook Pro 2017</div>
          <b className={styles.rp10000000B}>Rp. 10.000.000</b>
          <div className={styles.terjual5Div3}>4,8 | Terjual 5</div>
          <img className={styles.vectorIcon1} alt="" src="../-icon-star1.svg" />
        </div>
      </div>
      <Link
        className={styles.groupA}
        to="/pilih-item"
        onClick={onGroupLinkClick}
      >
        <div className={styles.rectangleDiv6} />
        <div className={styles.macbookPro20173}>Macbook Pro 2017</div>
        <b className={styles.rp10000000B3}>Rp. 10.000.000</b>
        <div className={styles.terjual5Div6}>4,8 | Terjual 5</div>
        <img className={styles.iconStar4} alt="" src="../-icon-star1.svg" />
        <img
          className={styles.rectangleIcon6}
          alt=""
          src="../rectangle-40273@2x.png"
        />
      </Link>
      <div className={styles.groupDiv14}>
        <div className={styles.groupDiv15}>
          <div className={styles.rectangleDiv1} />
          <img
            className={styles.rectangleIcon7}
            alt=""
            src="../rectangle-40283@2x.png"
          />
        </div>
        <div className={styles.groupDiv16}>
          <div
            className={styles.hoddieHMHitamBasic}
          >{`Hoddie H&M - Hitam Basic`}</div>
          <b className={styles.rp120000B}>Rp. 120.000</b>
          <div className={styles.groupDiv3}>
            <div className={styles.terjual5Div}>4,8 | Terjual 5</div>
            <img className={styles.iconStar} alt="" />
          </div>
        </div>
      </div>
      <Link
        className={styles.groupA1}
        to="/keranjang"
        onClick={onGroupLink1Click}
      >
        <img className={styles.ellipseIcon} alt="" src="../ellipse-76.svg" />
        <img className={styles.iconBasket} alt="" src="../-icon-basket.svg" />
      </Link>
      <img className={styles.groupIcon} alt="" src="../group-7.svg" />
      <div className={styles.frameDiv}>
        <div className={styles.groupDiv18}>
          <div className={styles.frameDiv1}>
            <img
              className={styles.iconOption}
              alt=""
              src="../-icon-option1.svg"
            />
            <div className={styles.filterDiv}>Filter</div>
          </div>
        </div>
        <div className={styles.frameDiv2}>
          <div className={styles.filterDiv}>Kota Surakarta</div>
        </div>
        <div className={styles.groupDiv19}>
          <div className={styles.rectangleDiv8} />
          <div className={styles.bebasOngkirDiv}>Bebas Ongkir</div>
        </div>
      </div>
      <div className={styles.groupDiv20}>
        <div className={styles.rectangleDiv9} />
        <i className={styles.mauCariBarangBekasApa}>
          Mau cari barang bekas apa?
        </i>
        <img
          className={styles.iconSearchOutline}
          alt=""
          src="../-icon-search-outline1.svg"
        />
      </div>
    </div>
  );
};

export default MENUBARANGBEKAS;
