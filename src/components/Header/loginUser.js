import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Box } from "@material-ui/core";
import Dropdown from 'react-bootstrap/Dropdown'
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
const useStyles = makeStyles((theme) => ({
  // paper: {
  //   border: "1px solid",
  //   padding: theme.spacing(1),
  //   backgroundColor: "rgba(37,36,39,0.95)",
  //   border: "2.5px solid purple",
  //   borderRadius: "4px",
  //   color: "rgba(231,71,243, 1)",
  //   textAlign: "center",
  //   zIndex: "9999",
  // },
  settingsTextPopper: {
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "500",
    padding: "0.5rem 0",
    borderBottom: "1px solid purple",
    color: "rgba(231,71,243, 1)",
  },
}));
export default function LoginUser() {
  const classes = useStyles();

  const [openNav, setOpenNav] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "transitions-popper" : undefined;
  const dispatch = useDispatch();
  const handleUserLogout = () => {
    localStorage.removeItem("userInfo");
    window.location.reload();
  };

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const renderUserWelcome = () => {
    if (localStorage.getItem("userInfo")) {
      const localUser = JSON.parse(localStorage.getItem("userInfo"));
      return (
        <Box
          display="flex"
          justifyContent="center"
          className={classes.hideSignMobile}
          onClick={handleClick}
        >
          <Box textAlign="center" display="flex">
            <p>Xin chào,</p>{" "}
            <Dropdown>
              <DropdownToggle variant="success" id="dropdown-basic">
              {localUser.hoTen.length > 15
                ? localUser.hoTen.substring(0, 15) + "..."
                : localUser.hoTen}
              </DropdownToggle>
              <Dropdown.Menu  transition>
              <Dropdown.Item>
                    <Link to="/profile" style={{ textDecoration: "none" }}>
                      <Typography className={classes.settingsTextPopper}>
                        Thông tin cá nhân
                      </Typography>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleUserLogout()}>
                    <Typography className={classes.settingsTextPopper}>
                      Đăng xuất
                    </Typography>
                  </Dropdown.Item>
            {/* {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <div className={classes.paper}>
                 
                </div>
              </Fade>
            )} */}
          </Dropdown.Menu>
              
            </Dropdown>
            
            {/* <Typography
              style={{
                color: "#9b9b9b",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              {localUser.hoTen.length > 15
                ? localUser.hoTen.substring(0, 15) + "..."
                : localUser.hoTen}
              <ArrowDropDownIcon style={{ display: "inline-block" }} />
            </Typography> */}
          </Box>
          {/* <Popper id={id} open={open} anchorEl={anchorEl} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <div className={classes.paper}>
                  <Box>
                    <Link to="/profile" style={{ textDecoration: "none" }}>
                      <Typography className={classes.settingsTextPopper}>
                        Thông tin cá nhân
                      </Typography>
                    </Link>
                  </Box>
                  <Box onClick={() => handleUserLogout()}>
                    <Typography className={classes.settingsTextPopper}>
                      Đăng xuất
                    </Typography>
                  </Box>
                </div>
              </Fade>
            )}
          </Popper> */}
        </Box>
      );
    } else {
      return (
        <Box
          display="flex"
          justifyContent="center"
          className={classes.hideSignMobile}
        >
          <Link
            to="/signin"
            style={{ textDecoration: "none", color: "#FAFAFA" }}
          >
            <Box display="flex" justifyContent="center">
              <img className="btn-login" src="./images/header/avatar.png" />
              <Typography style={{ color: "#9b9b9b" }}>Đăng nhập</Typography>
            </Box>
          </Link>
        </Box>
      );
    }
  };

  return (
    <>
      <div className="account">
        {/* <img className="btn-login" src="./images/header/avatar.png"></img>
            <Link to="/dangnhap" style={{textDecoration: "none", color: "#9b9b9b"}}  >
             
              Đăng nhập
            </Link> */}
        <Box>{renderUserWelcome()}</Box>
      </div>
    </>
  );
}
