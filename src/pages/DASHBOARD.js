import { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./DASHBOARD.module.css";

const DASHBOARD = () => {
  const navigate = useNavigate();

  const onGroupLinkClick = useCallback(() => {
    navigate("/menu-barang-bekas");
  }, [navigate]);

  const onGroupLink1Click = useCallback(() => {
    navigate("/keranjang");
  }, [navigate]);

  const onGroupLink2Click = useCallback(() => {
    navigate("/inbox");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.dASHBOARDDiv}>
      <img className={styles.groupIcon} alt="" src="../group-7.svg" />
      <img className={styles.groupIcon1} alt="" src="../group-1.svg" />
      <img className={styles.groupIcon2} alt="" src="../group-8.svg" />
      <div className={styles.groupDiv}>
        <div className={styles.uDBSHOPDiv}>UDB SHOP</div>
        <img className={styles.shopIcon} alt="" src="../shop.svg" />
      </div>
      <div className={styles.welcomeArif}>Welcome, Arif !</div>
      <img className={styles.lineIcon} alt="" src="../line-31.svg" />
      <div className={styles.rectangleDiv} />
      <img className={styles.ellipseIcon} alt="" src="../ellipse-67@2x.png" />
      <div className={styles.scanMeDiv}>Scan Me!</div>
      <div className={styles.groupDiv1}>
        <div className={styles.saldoDiv}>Saldo</div>
        <div className={styles.rp50000Div}>Rp. 50.000,-</div>
      </div>
      <div className={styles.groupDiv2}>
        <div className={styles.saldoDiv}>Status Member</div>
        <div className={styles.goldDiv}>Gold</div>
      </div>
      <div className={styles.groupDiv3}>
        <div className={styles.rectangleDiv1} />
        <img className={styles.vectorIcon} alt="" src="../vector1.svg" />
      </div>
      <div className={styles.lineDiv} />
      <div className={styles.lineDiv1} />
      <div className={styles.groupDiv4}>
        <div className={styles.rectangleDiv2} />
        <div className={styles.orderFoodDiv}>Order Food</div>
        <img className={styles.order1Icon} alt="" src="../order-1@2x.png" />
      </div>
      <Link
        className={styles.groupA}
        to="/menu-barang-bekas"
        onClick={onGroupLinkClick}
        data-animate-on-scroll
      >
        <div className={styles.rectangleDiv2} />
        <div className={styles.orderBarangBekas}>
          <span className={styles.orderBarangBekasContainer}>
            <p className={styles.orderBarangP}>Order Barang</p>
            <p className={styles.bekasP}>Bekas</p>
          </span>
        </div>
        <img
          className={styles.mobileApplication1Icon}
          alt=""
          src="../mobileapplication-1@2x.png"
        />
      </Link>
      <div className={styles.groupDiv5}>
        <div className={styles.rectangleDiv2} />
        <div className={styles.parkingOnlineDiv}>Parking Online</div>
        <img className={styles.parking1Icon} alt="" src="../parking-1@2x.png" />
      </div>
      <div className={styles.rectangleDiv5} />
      <div className={styles.groupDiv6}>
        <img className={styles.homeIcon} alt="" src="../home.svg" />
        <div className={styles.berandaDiv}>Beranda</div>
      </div>
      <div className={styles.groupDiv7}>
        <img
          className={styles.fileDockSearchIcon}
          alt=""
          src="../file-dock-search.svg"
        />
        <div className={styles.riwayatDiv}>Riwayat</div>
      </div>
      <Link
        className={styles.groupA1}
        to="/keranjang"
        onClick={onGroupLink1Click}
      >
        <img className={styles.bagIcon} alt="" src="../bag.svg" />
        <div className={styles.berandaDiv}>Keranjang</div>
      </Link>
      <div className={styles.groupDiv8}>
        <img className={styles.userBoxIcon} alt="" src="../user-box.svg" />
        <div className={styles.berandaDiv}>Akun</div>
      </div>
      <div className={styles.groupDiv9}>
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-68.svg" />
        <div className={styles.widgetLightDiv}>
          <div className={styles.rectangleDiv6} />
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
          <div className={styles.rectangleDiv9} />
        </div>
        <div className={styles.bayarDiv}>Bayar</div>
      </div>
      <div className={styles.groupDiv10}>
        <div className={styles.rectangleDiv2} />
        <div className={styles.orderClothDiv}>Order Cloth</div>
        <img
          className={styles.onlineShopping1Icon}
          alt=""
          src="../onlineshopping-1@2x.png"
        />
      </div>
      <Link className={styles.groupA2} to="/inbox" onClick={onGroupLink2Click}>
        <img className={styles.ellipseIcon2} alt="" src="../ellipse-72.svg" />
        <img
          className={styles.iconCommentCircleChatMess}
          alt=""
          src="../-icon-comment-circle-chat-message.svg"
        />
        <div className={styles.groupDiv11}>
          <img className={styles.ellipseIcon3} alt="" src="../ellipse-73.svg" />
          <b className={styles.b}>5</b>
        </div>
      </Link>
      <img className={styles.groupIcon3} alt="" src="../group-8722.svg" />
    </div>
  );
};

export default DASHBOARD;
