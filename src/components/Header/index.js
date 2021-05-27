import React from "react";
import Burger from "./burger";
import NavRight from "./navRight";
import LoginUser from "./loginUser";

export default function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <a href="/">
            <img className="weblogo" src="./images/header/web-logo.png"></img>
          </a>
        </div>

        <div className="header__menu">
          <NavRight />
          {/* <a href="" className="">Trang Chủ</a>
                    <a href="" className="">Lịch Chiếu</a>
                    <a href="" className="">Cụm Rạp</a>
                    <a href="" className="">Tin Tức</a>
                    <a href="" className="">Liên Hệ</a> */}
        </div>
        <div className="header__login">
          <LoginUser/>
        </div>
        <div className="nav__buger__menu">
          <Burger />
        </div>
      </div>
    </div>
  );
}
