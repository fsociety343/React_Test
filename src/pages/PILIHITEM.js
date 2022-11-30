import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./PILIHITEM.module.css";

const PILIHITEM = () => {
  const navigate = useNavigate();

  const onGroupLinkClick = useCallback(() => {
    navigate("/keranjang");
  }, [navigate]);

  return (
    <div className={styles.pILIHITEMDiv}>
      <div className={styles.groupDiv}>
        <div className={styles.kondisiBekasBeratSatuan5}>
          <p className={styles.kondisiBekasP}> Kondisi: Bekas</p>
          <p className={styles.kondisiBekasP}> Berat Satuan: 5 kg</p>
          <p className={styles.kondisiBekasP}> Kategori: Monitor LCD</p>
          <p className={styles.etalaseSECONDP}> Etalase: SECOND</p>
        </div>
        <b className={styles.detailB}>Detail</b>
        <div className={styles.macBookPro2017ReadyYaGan}>
          <p className={styles.kondisiBekasP}>MacBook pro 2017 ready ya gan</p>
          <p className={styles.kondisiBekasP}>&nbsp;</p>
          <p className={styles.kondisiBekasP}>Untuk spek nya :</p>
          <p className={styles.kondisiBekasP}>&nbsp;</p>
          <p className={styles.kondisiBekasP}>MacBook pro 2017</p>
          <p className={styles.kondisiBekasP}>&nbsp;</p>
          <p className={styles.kondisiBekasP}>* RAM 8GB</p>
          <p className={styles.kondisiBekasP}>* Storage 128GB SSD</p>
          <p className={styles.kondisiBekasP}>
            * Proc 1,6 GHz dual-core Intel core i5
          </p>
          <p className={styles.kondisiBekasP}>
            * VGA Intel hd graphics 6000 1536MB
          </p>
          <p className={styles.kondisiBekasP}>* Layar 13 inch</p>
          <p className={styles.kondisiBekasP}>* MacOS Catalina</p>
          <p className={styles.kondisiBekasP}>&nbsp;</p>
          <p className={styles.kondisiBekasP}>
            Bisa Cod (free ongkir Jabodetabek)
          </p>
          <p className={styles.etalaseSECONDP}>Garansi juga gan (30 hari)</p>
        </div>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.frameDiv}>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv1} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-4036@2x.png"
          />
        </div>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv1} />
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="../rectangle-4037@2x.png"
          />
        </div>
      </div>
      <img className={styles.groupIcon} alt="" src="../group-7.svg" />
      <div className={styles.frameDiv1}>
        <div className={styles.groupDiv3}>
          <div className={styles.frameDiv2}>
            <img
              className={styles.iconOption}
              alt=""
              src="../-icon-option.svg"
            />
            <div className={styles.filterDiv}>Filter</div>
          </div>
        </div>
        <div className={styles.frameDiv3}>
          <div className={styles.filterDiv}>Kota Surakarta</div>
        </div>
        <div className={styles.groupDiv4}>
          <div className={styles.rectangleDiv3} />
          <div className={styles.bebasOngkirDiv}>Bebas Ongkir</div>
        </div>
      </div>
      <div className={styles.groupDiv5}>
        <div className={styles.rectangleDiv4} />
        <i className={styles.mauCariBarangBekasApa}>
          Mau cari barang bekas apa?
        </i>
        <img
          className={styles.iconSearchOutline}
          alt=""
          src="../-icon-search-outline.svg"
        />
      </div>
      <Link
        className={styles.groupA}
        to="/keranjang"
        onClick={onGroupLinkClick}
      >
        <div className={styles.rectangleDiv5} />
        <b className={styles.tambahkanKeranjang}>Tambahkan Keranjang</b>
      </Link>
      <div className={styles.groupDiv6}>
        <div className={styles.macbookPro2017}>Macbook Pro 2017</div>
        <b className={styles.rp10000000B}>Rp. 10.000.000</b>
        <div className={styles.groupDiv7}>
          <div className={styles.terjual5Div}>4,8 | Terjual 5</div>
          <img className={styles.iconStar} alt="" src="../-icon-star.svg" />
        </div>
        <div className={styles.lineDiv} />
      </div>
    </div>
  );
};

export default PILIHITEM;
