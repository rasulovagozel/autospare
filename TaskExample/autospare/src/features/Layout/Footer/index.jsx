import React from "react";
import styled from "./footer.module.scss";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className={styled.line}>
        <hr />
      </section>
      <footer className={styled.footer}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className={styled.logo}>
                <h2>
                  Auto<span>Spare</span>.<span>az</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-9">
              <div className={styled.lists}>
                <div className="row">
                  <div className="col-lg-3">
                    <div className={styled.list}>
                      <h3>AutoSpare</h3>
                      <div className={styled.listElements}>
                        <a href="">Ana Səhifə</a>
                        <a href="">Tez-tez verilən suallar</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className={styled.list}>
                      <h3>Biz Kimik ?</h3>
                      <div className={styled.listElements}>
                      <a href="">Gizlilik Siyasəti</a>
                      <a href="">Haqqımızda</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className={styled.list}>
                      <h3>Ünvan</h3>
                      <div className={styled.listElements}>
                      <a href="">Şeyx Şamil küçəsi , 34</a>
                      <a href="">+994 55 934 91 55</a>
                      <a href="">info@autospare.az</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className={styled.list}>
                      <h3>Sosial Şəbəkə</h3>
                      <div className={styled.icon}>
                        <span>
                          <FaFacebookF />
                        </span>
                        <span>
                          <RiInstagramFill />
                        </span>
                        <span>
                          <FaTwitter />
                        </span>
                        <span>
                          <FaYoutube />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className={styled.line}>
       <div className="container">
        <div className="row">
          <div className="col-lg-12">
          <hr />
          </div>
          <div className="col-lg-12">
            <div className={styled.author}>
              <p>© 2024 RezervAll MMC  | Müəllif hüquqları qorunur</p>
            </div>
          </div>
        </div>
       </div>
      </section>
    </>
  );
};

export default Footer;
