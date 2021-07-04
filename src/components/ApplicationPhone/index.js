import React from 'react';
import Slider from 'react-slick';
import { useStyles } from "./style";

// ApplicationPhone

import Grid from "@material-ui/core/Grid";
import { Box, Button, Typography } from "@material-ui/core";

const ApplicationPhone = () => {
  const classes = useStyles();
  const settings = {
    className: "slickList",
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className={classes.bgColor} name="appBlock">
      <div className={classes.container}>
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid item md={6} sm={12} xs={12}>
              <Box className={classes.left}>
                <Box>
                  <Typography variant="h4" style={{ fontWeight: "500" }}>
                    Ứng dụng tiện lợi dành cho
                  </Typography>
                  <Typography variant="h4" style={{ fontWeight: "500" }}>
                    người yêu điện ảnh
                  </Typography>
                  <Typography style={{ fontSize: "18px", margin: "1.7rem 0" }}>
                    Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm
                    rạp và đổi quà hấp dẫn.
                  </Typography>
                  <Box style={{ width: "100%" }}>
                    <Button variant="contained" className={classes.button}>
                      App miễn phí - Tải về ngay!
                    </Button>
                    <Typography
                      style={{ fontSize: "14px", marginBottom: "1rem" }}
                    >
                      TIX có hai phiên bản iOS & Android
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <Box className={classes.right}>
                <img
                  className={`${classes.imgResponsive} ${classes.phoneImg}`}
                  src='./images/ApplicationPhone/Phone.png'
                  alt="Loading..."
                />
                <div className={classes.sliderScreen}>
                  <Slider {...settings}>
                    <img src='./images/ApplicationPhone/slideMobileApp1.jpeg' width="100%" />
                    <img src='./images/ApplicationPhone/slideMobileApp2.jpeg' width="100%" />
                    <img src='./images/ApplicationPhone/slide4.jpg' width="100%" />
                    <img src='./images/ApplicationPhone/slide5.jpg' width="100%" />
                  </Slider>
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPhone;