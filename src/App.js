import image from "../src/Rorompok.png";
import image1 from "../src/Ellipse 4.png";
import image2 from "../src/Vector.png";
import image3 from "../src/Vector1.png";
import image4 from "../src/Ellipse5.png";
import image5 from "../src/Ellipse2.png";
import image6 from "../src/Ellipse3.png";
import image7 from "../src/res.png";
import image8 from "../src/image1.png";
import image9 from "../src/Ellipse9.png";
import image10 from "../src/Ellipse91.png";
import image11 from "../src/image2.png";
import image12 from "../src/Ellipse9.svg";
import image13 from "../src/Ellipse9i.svg";
import image14 from "../src/image2i.png";
import image15 from "../src/Ellipse9ii.svg";
import image16 from "../src/Ellipse9iii.svg";
import image17 from "../src/Ellipse9iv.svg";
import image18 from "../src/image2ii.png";
import image19 from "../src/image2.svg";
import image20 from "../src/image2i.svg";
import image21 from "../src/image2ii.svg";
import image22 from "../src/Image.jpg";

import "./App.css";

function App() {
  return (
    <div style={{overflowX:"hidden"}}>
      <div>
        <div className="img"></div>
        <div>
          <div>
            <img className="hed" src={image} />
          </div>
          <ul style={{ display: "flex", listStyleType: "none" }}>
            <li>
              <a
                href="#"
                className="tit"
                style={{ width: "73px", left: "555px" }}
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#"
                className="tit"
                style={{ width: "62px", left: "683px" }}
              >
                Produk
              </a>
            </li>
            <li>
              <a
                href="#"
                className="tit"
                style={{ width: "74px", left: "811px" }}
              >
                Inspirasi
              </a>
            </li>
          </ul>
          <div className="ic">
            <img src={image1} />
          </div>
          <div className="ic" style={{ left: "91%", top: "8.33%" }}>
            <img src={image2} />
          </div>
        </div>
        <div className="txt">
          <p>Buat Suasana Rumah Senyaman Imajinasimu</p>
        </div>
        <div className="img3">
          <img src={image3} />
        </div>
        <div className="txt1">
          <p>
            Hidupkan suasana ruanganmu dengan berbagai produk dan koleksi
            pilihan furniture tebaik! Temukan furniture idamanmu sekarang
          </p>
        </div>
        <div className="srch1">
          <input
            class="form-control form-control-lg form-control-borderless"
            type="search"
            placeholder="Search your Device"
            className="srch"
          />
          <img src={image4} style={{ right: "6px", top: "6px" }} />
          <i
            class="fa-solid fa-magnifying-glass"
            style={{ right: "21px", top: "21px", color: "white" }}
          ></i>
        </div>
        <div>
          <img
            src={image5}
            className="imgii"
            style={{ left: "316px", top: "654px" }}
          />
          <img
            src={image6}
            className="imgii"
            style={{ left: "331px", top: "669px" }}
          />
        </div>
        <div>
          <img
            src={image5}
            className="imgii"
            style={{ left: "958px", top: "763px" }}
          />
          <img
            src={image6}
            className="imgii"
            style={{ left: "973px", top: "778px" }}
          />
        </div>
      </div>
      <div class="row" style={{ height: "15rem" }}>
        <div class="col-sm-8">
          <div style={{ display: "flex", paddingTop: "60px" }}>
            <img src={image4} className="ic9" style={{ top: "1240px" }} />
            <i
              style={{ position: "absolute", left: "120px", color: "white" }}
              class="fa fa-light fa-truck"
            ></i>
            <p className="txt6">Pengiriman Cepat dan Aman</p>
            <p className="txt7" style={{ top: "1330px" }}>
              Setiap produk yang kami kirim akan selalu datang tepat waktu.
              Produk anda akan kami jaga sampai anda terima.
            </p>
          </div>
          <div style={{ display: "flex", position: "absolute", left: "400px" }}>
            <img src={image4} className="ic9" style={{ top: "-10px" }} />
            <i
              style={{ position: "absolute", left: "120px", color: "white" }}
              class="fa fa-light fa-truck"
            ></i>
            <p className="txt6">Design Kekinian Kualitas Terbaik</p>
            <p className="txt7" style={{ top: "76px" }}>
              Produk yang tersedia dijamin kualitasnya. Dengan design yang
              mengikuti perkembangan interior masa kini.
            </p>
          </div>
          <div style={{ display: "flex", position: "absolute", left: "800px" }}>
            <img src={image4} className="ic9" style={{ top: "-10px" }} />
            <i
              style={{ position: "absolute", left: "120px", color: "white" }}
              class="fa fa-light fa-truck"
            ></i>
            <p className="txt6">Produk Daur Ulang dan Ramah Lingkungan</p>
            <p className="txt7" style={{ top: "75px" }}>
              Produk yang kami sediakan berasal dari produk daur ulang namun
              tetap dengan kualitas terbaik.
            </p>
          </div>
        </div>
      </div>
      <div style={{ height: "35rem" }}>
        <div>
          <p className="txt10">Koleksi Furniture Untuk Inpirasi Ruanganmu</p>
          <p className="txt11">Stocksund Inspiration Fullset</p>
          <p className="txt12">
            Berikut ini adalah sebuah desain ruang tv keluarga yang digunakan
            untuk berkumpul dan bersantai. Sofa STOCKSUND menawarkan banyak
            ruang sehingga setiap anggota keluarga dan tamu mendapatkan tempat
            duduk. Sofa ini sangat nyaman dan dapat bertahan hingga
            bertahun-tahun
          </p>
        </div>
        <div>
          <img
            src={image7}
            className="imgvii"
            style={{
              width: "810px",
              height: "586px",
              left: "610px",
              top: "1425px",
            }}
          />
          <img src={image5} className="img5" />
          <img
            src={image6}
            className="img6"
            style={{ left: "919px", top: "1830px" }}
          />
          <img
            src={image5}
            className="img6"
            style={{ left: "748px", top: "1875px" }}
          />
          <img
            src={image6}
            className="img6"
            style={{ left: "763px", top: "1890px" }}
          />
          <img
            src={image5}
            className="img6"
            style={{ left: "1129px", top: "1794px" }}
          />
          <img
            src={image6}
            className="img6"
            style={{ left: "1143px", top: "1810px" }}
          />
          <img
            src={image5}
            className="img6"
            style={{ left: "1132px", top: "1556px" }}
          />
          <img
            src={image6}
            className="img6"
            style={{ left: "1147px", top: "1570px" }}
          />
        </div>
        <div>
          <a href="#" className="txt13">
            Rp. 12.780.000
          </a>
        </div>
      </div>
      <div className="bkg">
        <img
          src={image8}
          className="imgvii"
          style={{ width: "78px", height: "78px", left: "15px", top: "1rem" }}
        />
        <a href="#" className="txt14">
          Stocksund Sofa
        </a>
        <a href="#" className="txt15">
          Warna
        </a>
        <img
          src={image9}
          className="imgix"
          style={{ width: "10px", height: "10px", left: "120px" }}
        />
        <img
          src={image4}
          className="imgix"
          style={{ width: "11px", height: "11px", left: "143px" }}
        />
        <img
          src={image10}
          className="imgix"
          style={{ width: "11px", height: "11px", left: "165px" }}
        />
      </div>
      <div>
        <p className="txt16">Produk Katalog</p>
        <a href="#" className="txt17">
          Meja
        </a>
        <a href="#" className="txt18" style={{ left: "563px" }}>
          Kursi
        </a>
        <a href="#" className="txt18" style={{ left: "642px" }}>
          Lemari
        </a>
        <a href="#" className="txt18" style={{ left: "735px" }}>
          Rak
        </a>
        <a href="#" className="txt18" style={{ left: "803px" }}>
          Lampu
        </a>
        <a href="#" className="txt18" style={{ left: "896px" }}>
          Lainnya
        </a>
        <img src={image4} className="imgix3" />
      </div>
      <div className="bkg1">
        <div className="bkg2">
          <a href="#" className="txt23">
            Diskon 10%
          </a>
          <img src={image11} className="imgxi" />
          <img
            src={image12}
            className="imgxii"
            style={{ height: "18px", left: "85px", top: "250px" }}
          />
          <img
            src={image4}
            className="imgxii"
            style={{ height: "15px", left: "110px", top: "252px" }}
          />
          <img
            src={image13}
            className="imgxii"
            style={{ height: "15px", left: "135px", top: "252px" }}
          />
          <a href="#" className="txt24">
            Arkelstrop
          </a>
          <a href="#" className="txt25">
            Rp. 2.699.100
          </a>
          <a href="#" className="txt26">
            Rp. 2.999.000
          </a>
        </div>
      </div>
      <div className="bkg3" style={{ left: "530px" }}>
        <div className="bkg2" style={{ background: "#59B162" }}>
          <a href="#" className="txt23">
            Produk Baru
          </a>
          <img src={image14} className="imgxi" />
          <img
            src={image15}
            className="imgxii"
            style={{ height: "18px", left: "85px", top: "250px" }}
          />
          <img
            src={image4}
            className="imgxii"
            style={{ height: "15px", left: "110px", top: "252px" }}
          />
          <a href="#" className="txt24">
            Lillasen
          </a>
          <a href="#" className="txt25">
            Rp. 2.499.000
          </a>
        </div>
      </div>
      <div className="bkg3" style={{ left: "950px" }}>
        <div className="bkg2" style={{ background: "#59B162" }}>
          <a href="#" className="txt23">
            Produk Baru
          </a>
          <img src={image18} className="imgxi" />
          <img
            src={image16}
            className="imgxii"
            style={{ height: "18px", left: "85px", top: "250px" }}
          />
          <img
            src={image17}
            className="imgxii"
            style={{ height: "15px", left: "110px", top: "252px" }}
          />
          <a href="#" className="txt24">
            Micke
          </a>
          <a href="#" className="txt25">
            Rp. 999.000{" "}
          </a>
        </div>
      </div>
      <div className="bkg3" style={{ left: "110px", top: "2750px" }}>
        <img src={image19} className="imgxi" />
        <img
          src={image12}
          className="imgxii"
          style={{ height: "18px", left: "85px", top: "250px" }}
        />
        <img
          src={image17}
          className="imgxii"
          style={{ height: "15px", left: "110px", top: "252px" }}
        />
        <img
          src={image13}
          className="imgxii"
          style={{ height: "15px", left: "135px", top: "252px" }}
        />

        <a href="#" className="txt24" style={{ left: "10px", top: "330px" }}>
          Tilslag
        </a>
        <a href="#" className="txt25" style={{ left: "10px", top: "360px" }}>
          Rp. 1.499.000{" "}
        </a>
      </div>
      <div className="bkg3" style={{ left: "530px", top: "2750px" }}>
        <img src={image20} className="imgxi" />
        <img
          src={image12}
          className="imgxii"
          style={{ left: "110px", height: "18px", top: "250px" }}
        />
        <img
          src={image17}
          className="imgxii"
          style={{ left: "135px", height: "15px", top: "252px" }}
        />
        <img
          src={image13}
          className="imgxii"
          style={{ left: "86px", height: "15px", top: "252px" }}
        />

        <a href="#" className="txt24" style={{ left: "10px", top: "330px" }}>
          Lagkapten/Adils
        </a>
        <a href="#" className="txt25" style={{ left: "10px", top: "360px" }}>
          Rp. 849.000{" "}
        </a>
      </div>
      <div className="bkg3" style={{ left: "950px", top: "2750px" }}>
        <img src={image21} className="imgxi" />
        <img
          src={image12}
          className="imgxii"
          style={{ left: "110px", height: "18px", top: "250px" }}
        />
        <img
          src={image17}
          className="imgxii"
          style={{ left: "86px", height: "15px", top: "252px" }}
        />
        <img
          src={image13}
          className="imgxii"
          style={{ left: "86px", height: "15px", top: "252px" }}
        />

        <a href="#" className="txt24" style={{ left: "10px", top: "330px" }}>
          Adils/Linmon{" "}
        </a>
        <a href="#" className="txt25" style={{ left: "10px", top: "360px" }}>
          Rp. 499.000{" "}
        </a>
      </div>
      <div>
        <button className="btn">
          <a href="#" className="txt27">
            Lihat Simua
          </a>
        </button>
      </div>
      <div>
        <img src={image22} className="imgxiv" />
        <p className="txt28">
          Dapatkan Potongan Harga 30% Untuk Pembelian Pertama
        </p>
        <p className="txt29">
          Segera daftar untuk mendapatkan promo terbaik sekarang!
        </p>
        <div className="div1">
          <a href="#" className="txt30">
            Daftar Sekarang
          </a>
        </div>
      </div>
      <div>
        <p className="txt31">2020 © All Right Reserved</p>
        <a href="#" className="txt32">
          About Us
        </a>
        <a href="#" className="txt32" style={{ left: "1272px" }}>
          Contact
        </a>
      </div>
    </div>
  );
}
export default App;
