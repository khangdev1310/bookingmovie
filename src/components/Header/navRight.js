import React from "react";
import styled from "styled-components";
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    
    text-align: left;
    border-bottom: 1px solid;
    
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    background-color: #fff;
    transform: ${({ open }) => (open ? "translateX(0) " : "translateX(100%)")};
    width: 300px;
    transition: transform 0.3s ease-in-out;
    padding-top: 5rem;
    position: fixed;
    top: -15px;
    right: 217px;
    height: 100%;
    
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
