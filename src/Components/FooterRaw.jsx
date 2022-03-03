import React from "react";
import {
  BsInstagram,
  BsFillChatDotsFill,
  BsFillGeoFill,
  BsFillQuestionCircleFill,
} from "react-icons/bs";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <img
            src="https://i.postimg.cc/zftpFhs3/onwearcrop.png"
            height="40"
            width="auto"
            className="mb-2"
          />

          <p>대표: 박서은</p>
          <p>사업자 등록번호 : 846-14-01659</p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Quick Link</h5>
          <ul className="list-unstyled">
            <li>
              <BsFillQuestionCircleFill className="text-success" />
              <a href="#!">About</a>
            </li>
            <li>
              <BsFillQuestionCircleFill className="text-success" />
              <a href="#!">How to</a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Social</h5>
          <ul className="list-unstyled">
            <li>
              <BsInstagram /> <a href="#!">Instagram</a>
            </li>
            <li>
              <BsFillChatDotsFill className="text-warning" />{" "}
              <a href="#!">Kakao</a>
            </li>
            <li>
              <BsFillGeoFill className="text-success" /> <a href="#!">Naver</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2022 Copyright:
      <a href="https://www.onwear.co.kr" style={{ textDecoration: "none" }}>
        &nbsp; OnWear.co.kr
      </a>
    </div>
  </footer>
);

export default Footer;
