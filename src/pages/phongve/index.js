import { Box, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useStyles } from "./styles";
import screen from "../../img/screen.png";
import ThanhTien from "./ThanhTien";
import { useDispatch, useSelector } from "react-redux";
import {getDSPhongVe} from '../../redux/action/datveActions';

import Seat from "./Seat";
import SeatEmpty from "./SeatEmpty";
import Summarize from "./Summarize";
import Swal from "sweetalert2";
// import Countdown from "../../../components/Countdown";

const PhongVe = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const infoPhongVe = useSelector((state) => state.danhsachphongveReducer.infoPhongVe);
//   const bookingSeat = useSelector((state) => state.PhongVeReducer?.bookingSeat);
  let checkSeat = 1;
  // let validate = true;
  // if (!localStorage.getItem("USER")) {
  //   props.history.push("/");
  // }

  useEffect(() => {
    

    
  }, []);

  const handleNoti = (icon, title) => {
    Swal.fire({
      icon: `${icon}`,
      title: `${title}`,
    });
  };

  
    

  const renderSeat = () => {
    return infoPhongVe?.danhSachGhe.map((ghe, index) => {
      if ((index + 1) % 16 === 0) {
        checkSeat = index + 2;
        return (
          <>
            <Seat gheInfo={ghe} />
            <br />
          </>
        );
      }
      // if (index === checkSeat) {
      //   checkSeat += 12;
      //   return (
      //     <>
      //       <Seat gheInfo={ghe} />
      //       <SeatEmpty />
      //     </>
      //   );
      // } else if (index === checkSeat) {
      //   checkSeat += 3;
      //   return (
      //     <>
      //       <Seat gheInfo={ghe} />
      //       <SeatEmpty />
      //     </>
      //   );
      // }
      return (
        <>
          <Seat gheInfo={ghe} />
        </>
      );
    });
  };   


  return (
    <div className={classes.bgColor}>
      <div className={classes.container}>
        {/* <Countdown /> */}
        <Grid container spacing={0} style={{ flexDirection: "column" }}>
          <Grid
            container
            item
            xs={12}
            spacing={0}
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              style={{
                marginTop: "1.5rem",
              }}
              className={classes.overflow}
            >
              <img src={screen} className={classes.overflow} />
              <Box className={classes.overflow}>
                <Box className={classes.renderSeatWrapper}>
                    {renderSeat()}
                 
                    </Box>
              </Box>
            </Box>
          </Grid>
          <Box>
            <Summarize />
            
          </Box>
          <ThanhTien />
         
        </Grid>
      </div>
    </div>
  );
};

export default PhongVe;