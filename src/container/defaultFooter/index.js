import React from "react";
import express from "../../assets/SVG/express.svg";
import guarantee from "../../assets/SVG/guarantee.svg";
import support from "../../assets/SVG/support.svg";
import cashBack from "../../assets/SVG/cash-back.svg";
import cashOnDelivery from "../../assets/SVG/cash-on-delivery.svg";
import "./index.scss";
import { Container, Row } from "reactstrap";

export default function DefaultFooter() {
  return (
    <footer>
      <div className="footer-box-container">
        <Container>
          <Row className="box-row">
            <div className="footer-box">
              <div className="box-container">
                <img src={express} alt="express" className="footer-icon" />
                <div>تحویل اکسپرس</div>
              </div>
              <div className="box-container">
                <img src={support} alt="support" className="footer-icon" />
                <div>پشتیبانی 24 ساعته</div>
              </div>
              <div className="box-container">
                <img
                  src={cashOnDelivery}
                  alt="cashOnDelivery"
                  className="footer-icon"
                />
                <div>پرداخت در محل</div>
              </div>
              <div className="box-container">
                <img src={cashBack} alt="cashBack" className="footer-icon" />
                <div>ضمانت بازگشت وجه</div>
              </div>
              <div className="box-container">
                <img src={guarantee} alt="guarantee" className="footer-icon" />
                <div>ضمانت اصل بودن کالا</div>
              </div>
            </div>
          </Row>
          <Row></Row>
        </Container>
        <div className="footer-link-container">
          <Container>
            <Row>
              <div className="footer-link">
                <div className="link-container">
                  <div className="link-container-right">
                    <div className="link-title">
                      <a href="#">راهنمای خرید</a>
                    </div>
                    <div>
                      <ul>
                        <li>
                          <a href="#">نحوه ثبت سفارش</a>
                        </li>
                        <li>
                          <a href="#">رویه ارسال سفارش</a>
                        </li>
                        <li>
                          <a href="#">شیوه های پرداخت</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="link-container-left">
                    <div className="link-title">
                      <a href="#">خدمات مشتریان</a>
                    </div>
                    <div>
                      <ul>
                        <li>
                          <a href="#">پاسخ به پرسش های متداول</a>
                        </li>
                        <li>
                          <a href="#">رویه های بازگرداندن کالا</a>
                        </li>
                        <li>
                          <a href="#">شرایط استفاده</a>
                        </li>
                        <li>
                          <a href="#">حریم خصوصی</a>
                        </li>
                        <li>
                          <a href="#">گزارش باگ</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="newsletter">
                <div className="newsletter-title">
                  از تخفیف‌ها و جدیدترین‌ها باخبر شوید:
                </div>
                <div className="newsletter-input-container">
                <input type="email" placeholder="آدرس ایمیل را وارد کنید" />
                <button>ارسال</button>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </footer>
  );
}
