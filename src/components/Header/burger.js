import React, { useState } from "react";
import styled from "styled-components";
import NavRight from "./navRight";

const StyledBurger = styled.div`
  width: 35px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  top: 15px;
  right: 20px;
  z-index:20;

  div {
    width: 100%;
    height: 2px;
    background-color: #000;
    border-radius: 10px;
    transition: all 0.2s;
    &:nth-child(1) {
      transform: ${({ open }) =>
        open ? " rotate(-45deg) translate(-8px, 6px)" : "rotate(0)"};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) =>
        open ? "rotate(45deg) translate(-8px, -6px) " : "rotate(0)"};
    }
  }
`;
export default function Burger() {
  const [open, setOnpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOnpen(!open)}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </StyledBurger>
      <NavRight open={open} />
    </>
  );
}
