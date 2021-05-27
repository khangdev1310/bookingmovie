import React from 'react';
import Burger from './burger';

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
                    <a href="" className="">Trang Chủ</a>
                    <a href="" className="">Lịch Chiếu</a>
                    <a href="" className="">Cụm Rạp</a>
                    <a href="" className="">Tin Tức</a>
                    <a href="" className="">Liên Hệ</a>
                </div>
                <div className="header__login">
                    <div className="account">
                        <a href="" className="account_user">
                            <img className="btn-login" src="./images/header/avatar.png"></img>
                            <p className="login-text">Đăng nhập</p>
                        </a>
                    </div>
                </div>
                <div className="nav__buger__menu">
                    <Burger/>
                    
                </div>
            </div>
            
        </div>
    )
}
