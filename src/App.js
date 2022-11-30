import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SPLASHSCREEN from "./pages/SPLASHSCREEN";
import PEMBAYARAN from "./pages/PEMBAYARAN";
import DisplayMetodePembayaran from "./pages/DisplayMetodePembayaran";
import TRANSAKSI from "./pages/TRANSAKSI";
import INBOX from "./pages/INBOX";
import KERANJANG from "./pages/KERANJANG";
import PILIHITEM from "./pages/PILIHITEM";
import MENUBARANGBEKAS from "./pages/MENUBARANGBEKAS";
import DASHBOARD from "./pages/DASHBOARD";
import SIGNUP from "./pages/SIGNUP";
import LOGIN from "./pages/LOGIN";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/pembayaran":
        title = "";
        metaDescription = "";
        break;
      case "/display-metode-pembayaran":
        title = "";
        metaDescription = "";
        break;
      case "/transaksi":
        title = "";
        metaDescription = "";
        break;
      case "/inbox":
        title = "";
        metaDescription = "";
        break;
      case "/keranjang":
        title = "";
        metaDescription = "";
        break;
      case "/pilih-item":
        title = "";
        metaDescription = "";
        break;
      case "/menu-barang-bekas":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SPLASHSCREEN />} />

      <Route path="/pembayaran" element={<PEMBAYARAN />} />

      <Route
        path="/display-metode-pembayaran"
        element={<DisplayMetodePembayaran />}
      />

      <Route path="/transaksi" element={<TRANSAKSI />} />

      <Route path="/inbox" element={<INBOX />} />

      <Route path="/keranjang" element={<KERANJANG />} />

      <Route path="/pilih-item" element={<PILIHITEM />} />

      <Route path="/menu-barang-bekas" element={<MENUBARANGBEKAS />} />

      <Route path="/dashboard" element={<DASHBOARD />} />

      <Route path="/sign-up" element={<SIGNUP />} />

      <Route path="/login" element={<LOGIN />} />
    </Routes>
  );
}
export default App;
