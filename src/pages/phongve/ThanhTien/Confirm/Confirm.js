import React, { useState } from "react";
import { useStyles } from "./styles";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import propCorn from "src/img/popcornCheckout.png";
import ErrorIcon from "@material-ui/icons/Error";

import { useSelector, useDispatch } from "react-redux";

import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import Radio from "@material-ui/core/Radio";
import zalo from "src/img/zaloPay.png";
import mastercard from "src/img/mastercard.svg";
import visa from "src/img/credit-card.svg";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
const GreenRadio = withStyles({
  root: {
    color: "rgb(236,70,248)",
    "&$checked": {
      color: "rgb(236,70,248)",
    },
  },
})((props) => <Radio color="default" {...props} />);

const Confirm = ({ infoPhongVe }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  // const [comboStatus, setComboStatus] = useState(false);
  const [selectedValue, setSelectedValue] = useState("zaloPay");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  

  const handleDispatch = () => {
    // let danhSachVe = [];
    // bookingSeat.forEach((danhSach) => {
    //   let { maGhe, giaVe } = danhSach;
    //   danhSachVe.push({ maGhe, giaVe });
    // });
    // datVe.danhSachVe = danhSachVe;
    // if (datVe.danhSachVe.length > 0) {
    //   dispatch({
    //     type: POST_THONG_TIN_DAT_VE_REQUESTS_SAGA,
    //     payload: { datVe, accessToken },
    //   });
    // } else {
    //   Swal.fire({
    //     icon: "warning",
    //     title: "Bạn chưa chọn ghế",
    //   });
    // }
  };

  const renderSeat = () => {
    // if (bookingSeat.length > 0) {
    //   return bookingSeat.map((seat, index) => {
    //     if (index === 0) {
    //       return (
    //         <Typography className={classes.name} key={uuidv4()}>
    //           {seat.tenGhe}
    //         </Typography>
    //       );
    //     }
    //     return (
    //       <Typography className={classes.name} key={uuidv4()}>
    //         , {seat.tenGhe}
    //       </Typography>
    //     );
    //   });
    // }
  };
  return (
    <div id="form-modal">
      <div className={classes.container}>
        
        <div className={classes.contents}>
          <Box className={classes.items}>
            <Typography className={classes.total}> đ</Typography>
          </Box>
          <Box className={classes.items}>
            <Typography className={classes.movieTitle}>
              {/* {thongTinPhim.tenPhim} */}
            </Typography>
            <Typography className={classes.movieText}>
              {/* {thongTinPhim.tenCumRap} */}
            </Typography>
            <Typography className={classes.movieText}>
              Ngày mai 
              {/* {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} -{" "}
              {thongTinPhim.tenRap} */}
            </Typography>
          </Box>
          <Box className={classes.items}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography className={classes.soGhe}>
                  Ghế 
                  {/* {renderSeat()} */}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  className={classes.soGhe}
                  style={{ textAlign: "right" }}
                >
                   đ
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.items}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Box >
                  <img
                    src={propCorn}
                    style={{
                      marginRight: "9px",
                      width: "17px",
                      height: "22px",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  className={classes.soGhe}
                  style={{ textAlign: "right" }}
                >
                  đ
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.itemsTextField}>
            <TextField
              id="standard-basic"
              label="Email"
              InputProps={{ disableUnderline: true }}
              disabled
              // defaultValue={email}
            />
          </Box>
          <Box className={classes.itemsTextField}>
            <TextField
              id="standard-basic"
              label="Số điện thoại"
              InputProps={{ disableUnderline: true }}
              disabled
              // defaultValue={soDT}
            />
          </Box>
          <Box className={classes.itemsTextField}>
            <TextField
              id="standard-basic"
              label="Mã giảm giá"
              InputProps={{ disableUnderline: true }}
            />
          </Box>
          <Box style={{ marginTop: "0.5rem" }}>
            <Typography className={classes.titleSpan}>
              Hình thức thanh toán
            </Typography>
            <Box>
              <Box display="flex" alignItems="center">
                <GreenRadio
                  checked={selectedValue === "zaloPay"}
                  onChange={handleChange}
                  value="zaloPay"
                  name="zaloPay"
                />
                <img src={zalo} width="45px" height="45px" />
                <Typography style={{ marginLeft: "0.5rem" }}>
                  Thanh toán qua Zalopay
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <GreenRadio
                checked={selectedValue === "visa"}
                onChange={handleChange}
                value="visa"
                name="visa"
              />
              <img src={visa} width="45px" height="45px" />
              <Typography style={{ marginLeft: "0.5rem" }}>
                Thẻ ATM nội địa
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <GreenRadio
                checked={selectedValue === "mastercard"}
                onChange={handleChange}
                value="mastercard"
                name="mastercard"
              />
              <img src={mastercard} width="45px" height="45px" />
              <Typography style={{ marginLeft: "0.5rem" }}>
                Visa, Master, JCB
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box className={classes.notice}>
              <Typography align="center" className={classes.noticeText}>
                <ErrorIcon
                  style={{ color: "rgb(236,70,248)", marginRight: "8px" }}
                />
                Vé đã mua không thể đổi hoặc hoàn tiền Mã vé sẽ được gửi qua tin
                nhắn ZMS (tin nhắn Zalo) và Email đã nhập.
              </Typography>
            </Box>
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
              
            >
              Đặt vé
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Confirm;