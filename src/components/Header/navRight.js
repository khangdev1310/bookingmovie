import React from "react";
import styled from "styled-components";
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 0px;
  li {
    text-align: center;
    
    
    
    
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    background-color: #fff;
    transform: ${({ open }) => (open ? "translateX(0) " : "translateX(100%)")};
    width: 300px;
    transition: transform 0.3s ease-in-out;
    padding-top: 4rem;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    box-shadow: 0 0 1px #0000004d;
    overflow: hidden;
    li{
        padding: 18px 10px;
        border-bottom: 1px solid;
        text-align: left;
    }
  }
`;

export default function NavRight({ open }) {
  return (
    <>
      <Ul open={open}>
        <li className="nav-mobile-menu">
          <a className="nav-mobile-text">Trang Chủ</a>
        </li>
        <li className="nav-mobile-menu">
          
          <a className="nav-mobile-text">Lịch Chiếu</a>
        </li>
        <li className="nav-mobile-menu">
          <a className="nav-mobile-text">Cụm Rạp</a>
        </li>
        <li className="nav-mobile-menu">
          <a className="nav-mobile-text">Tin Tức</a>
        </li>
        <li className="nav-mobile-menu">
          <a className="nav-mobile-text">Liên Hệ</a>
        </li>
      </Ul>
    </>
  );
}
