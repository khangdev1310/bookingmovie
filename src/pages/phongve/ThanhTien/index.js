import {
    Box,
    Button,
    Grid,
    TextField,
    Typography,
    withStyles,
  } from "@material-ui/core";
  import React, { useEffect, useState } from "react";
  import { useStyles } from "./styles";
  import Modal from "@material-ui/core/Modal";
  import Backdrop from "@material-ui/core/Backdrop";
  import Fade from "@material-ui/core/Fade";
  import { useSelector, useDispatch } from "react-redux";

  import Swal from "sweetalert2";
  import { v4 as uuidv4 } from "uuid";
  import Confirm from "./Confirm/Confirm";
  
  const ThanhTien = ({ infoPhongVe, maLichChieu, validate }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    
    
    const [open, setOpen] = React.useState(false);
    // const [disableConfirm, setDisableConfirm] = useState(validate);
    
  
    
    return (
      <div className={classes.bgThanhToan}>
         <div className={classes.containerThanhToan}>
          <div className={classes.formatTop}></div>
          <Grid container>
            <Grid item xs={12} sm={4} style={{ padding: "0.5rem" }}>
              <Box display="flex">
                <img
                  src=""
                  width="90px"
                  style={{ borderRadius: "4px" }}
                />
                <Box style={{ margin: "0.25rem" }}>
                  <Typography className={classes.name}>
                    abc
                  </Typography>
                  <Typography
                    className={classes.name}
                    style={{ display: "block" }}
                  >
                    2D
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} style={{ padding: "0.5rem" }}>
              <Box>
                <Typography className={classes.main}>
                  Rạp:{" "}
                  <Typography className={classes.name}>
                    abc
                  </Typography>
                </Typography>
                <Typography className={classes.main}>
                  Suất chiếu:{" "}
                  <Typography className={classes.name}>
                   abc
                  </Typography>
                </Typography>
                <Typography className={classes.main}>
                  Phòng chiếu:{" "}
                  <Typography className={classes.name}>
                   abc
                  </Typography>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} style={{ padding: "0.5rem" }}>
              <Box>
                <Typography className={classes.main}>
                  Ghế:{" "}
                  <Typography className={classes.name}>
                       {/* {renderSeat()}  */}
                   </Typography>
                </Typography>
              </Box>
              <Box>
                <Typography className={classes.main}>
                  Giá:{" "}
                  <Typography className={classes.name}></Typography>
                </Typography>
              </Box>
              <Button
                fullWidth
                // onClick={handleCheck}
                variant="contained"
                style={{ backgroundColor: "plum", marginTop: "1rem" }}
                // disabled={!disableConfirm}
              >
                Xác nhận
              </Button>
            </Grid>
          </Grid>
          <div className={classes.formatBottom}></div>
        </div> 
          <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          // onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
            <Confirm infoPhongVe={infoPhongVe} />
            </div>
          </Fade>
        </Modal> 
      </div>
    );
  };
  
  export default ThanhTien;