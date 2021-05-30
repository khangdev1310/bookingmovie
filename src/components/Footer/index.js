import React from "react";
// import CGV from "./images/footer/cgv.png";
// import BHD from "./images/footer/bhd.png";
// import GALAXY from "./images/footer/galaxycine.png";
// import CINESTA from "./images/footer/cinestar.png";
// import MEGA from "./images/footer/megags.png";
// import BT from "./images/footer/bt.jpg";
// // import LOTE from "./images/footer/404b8c4b80d77732e7426cdb7e24be20.png";
// import DCINE from "./images/footer/dcine.png";
// import DONGDAC from "./images/footer/dongdacinema.png";
// import TOUCH from "./images/footer/TOUCH.png";
// import CNX from "./images/footer/cnx.jpg";
// import STARLIGHT from "./images/footer/STARLIGHT.png";
// import ZALOPAY from "./images/footer/zalopay_icon.png";
// import PAYOO from "./images/footer/payoo.jpg";
// import VIETCOMBANK from "./images/footer/VCB.png";
// import LOGO  from "./images/footer/logo-comcast.jpg"

export default function Footer() {
  return (
    <div id="footer" className="col-xs-12">
      <div className="myFooter">
        <div className="row footer_top">
          <div className="col-md-4 col-xs-12 col-sm-6">
            <p className="title title-about">CyberPhim</p>
            <div className="col-md-12 intro-film">
              <p>
                TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION Địa chỉ: Z06 Đường số
                13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.
                Giấy chứng nhận đăng ký kinh doanh số: 0101659783, đăng ký thay
                đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu
                tư Thành phố Hồ Chí Minh cấp. Số Điện Thoại (Hotline): 1900 545
                436
              </p>
            </div>
          </div>
          <div className="col-md-4 col-xs-12 col-sm-6 cooperation">
            <p className="title">Đối tác</p>
            <div className="row col-sm-12 col-xs-12 linePartner">
              <a target="_blank" href="https://www.cgv.vn/" title="CGV">
                <img
                  className="iconConnect"
                  src='./images/footer/cgv.png'
                  style={{ backgroundColor: "#fff" }}
                />
              </a>
              <a target="_blank" href="http://bhdstar.vn" title="BHD">
                <img className="iconConnect" src='./images/footer/bhd.png' />
              </a>
              <a target="_blank" href="http://galaxycine.vn" title="Galaxy">
                <img className="iconConnect" src='./images/footer/galaxycine.png' />
              </a>
              <a target="_blank" href="http://cinestar.com.vn" title="Cinestar">
                <img className="iconConnect" src='./images/footer/cinestar.png' />
              </a>
              <a
                target="_blank"
                href="http://lottecinemavn.com"
                title="Lotte Cinema"
              >
                <img className="iconConnect" src='./images/footer/404b8c4b80d77732e7426cdb7e24be20.png' />
              </a>
            </div>
            <div className="row col-sm-12 col-xs-12 linePartner">
              <a
                target="_blank"
                href="https://www.megagscinemas.vn"
                title="MegaGS"
              >
                <img className="iconConnect" src='./images/footer/megags.png' />
              </a>
              <a
                target="_blank"
                href="https://www.betacineplex.vn/"
                title="Beta"
              >
                <img className="iconConnect" src='./images/footer/bt.jpg' />
              </a>
              <a target="_blank" href="http://ddcinema.vn" title="DDC">
                <img className="iconConnect" src='./images/footer/dongdacinema.png' />
              </a>
              <a
                target="_blank"
                href="https://touchcinema.com/"
                title="Touch Cinema"
              >
                <img className="iconConnect" src='./images/footer/TOUCH.png' />
              </a>
              <a target="_blank" href="https://cinemaxvn.com/" title="Cinemax">
                <img className="iconConnect" src='./images/footer/cnx.jpg' />
              </a>
            </div>
            <div className="row col-sm-12 col-xs-12 linePartner">
              <a target="_blank" href="http://starlight.vn/" title="Starlight">
                <img className="iconConnect" src='./images/footer/STARLIGHT.png' />
              </a>
              <a target="_blank" href="https://www.dcine.vn/" title="Dcine">
                <img className="iconConnect" src='./images/footer/dcine.png' />
              </a>
              <a target="_blank" href="https://zalopay.vn/" title="ZaloPay">
                <img className="iconConnect" src='./images/footer/zalopay_icon.png' />
              </a>
              <a target="_blank" href="https://www.payoo.vn/" title="Payoo">
                <img className="iconConnect" src='./images/footer/payoo.jpg' />
              </a>
              <a
                target="_blank"
                href="https://www.vietcombank.com.vn/"
                title="Vietcombank"
              >
                <img className="iconConnect" src='./images/footer/VCB.png' />
              </a>
            </div>
          </div>
          <div className="row col-md-4 col-xs-12 FAQ">
            <div className="col-xs-6 support">
              <p className="title">Hỗ trợ khách hàng</p>
              <div style={{ padding: "0 15px" }} className="FAQ-mobile">
                <a ui-sref="faqMobile.faq" href="#">
                  FAQ
                </a>
                <a ui-sref="faqMobile.regular" href="#">
                  Thỏa thuận sử dụng
                </a>
                {/* <a ui-sref="">Quy chế hoạt động</a> */}
                <a ui-sref="faqMobile.policy" href="#">
                  Chính sách bảo mật
                </a>
                <a ui-sref="guildline.guidev2" href="#">
                  Brand Guidelines
                </a>
              </div>
            </div>
            {/* <div className="col-x6-6 text-center social">
              <p className="title">Ứng dụng</p>
              <a
                target="_blank"
                href="https://www.facebook.com/tix.vn/"
                title="Facebook social"
              >
                <img className="iconApp" src={FACEBOOK} />
              </a>
              <a
                target="_blank"
                href="https://zalo.me/tixdatve"
                title="Zalo social"
              >
                <img className="iconApp" src={ZALO} />
              </a>
            </div> */}
          </div>
        </div>
        <hr className="hrFooter" />
        <div className="footer_bottom">
          <img className="hangphim" src='./images/footer/logo-comcast.jpg' alt="Ảnh logo footer" />
          <p className="text-footer">Công ty CyberPhim <span style={{color: "red"}}>*Đây là sản phẩm do Định Ngô và Đình Khang</span> sử dụng cho việc học tập</p>
        </div>
      </div>
    </div>
  );
}
