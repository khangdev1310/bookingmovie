// News
import React from "react";
import { useStyle } from "./styles";
import Paper from "@material-ui/core/Paper";
import { Box, Grid, Typography } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useParams } from "react-router-dom";
// import tintuc1 from "./../../../assets/tintuc1.png";
// import tintuc2 from "./../../../assets/tintuc2.png";
// import tintuc3 from "./../../../assets/tintuc3.png";
// import tintuc4 from "./../../../assets/tintuc4.png";
// import tintuc5 from "./../../../assets/tintuc5.jpeg";
// import tintuc6 from "./../../../assets/tintuc6.png";
// import tintuc7 from "./../../../assets/tintuc7.png";
// import tintuc8 from "./../../../assets/tintuc8.jpeg";
// import tintuc9 from "./../../../assets/tintuc9.png";
// import "./style.css";

const News = (props) => {
  const classes = useStyle();
  let params = useParams();

  return (
    <Box className={classes.bgColor}>
      <Box className={classes.containerNews}>
        <Typography className={classes.titleNews}>TIN TỨC & REVIEW</Typography>
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs>
              <Box className={classes.wrapper}>
                <img src='./images/News/Ly-hai.png' width="100%" />
                <Box className={classes.wrapperText}>
                  <Typography className={classes.mainText}>
                    Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip
                    Lật Mặt: 48H đậm chất
                  </Typography>
                  <Typography className={classes.subText}>
                    Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip
                    rượt đuổi gay cấn thót tim fans hâm mộ
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs>
              <Box className={classes.wrapper}>
                <img src='./images/News/tintuc2.png' width="100%" />
                <Box className={classes.wrapperText}>
                  <Typography className={classes.mainText}>
                    Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip
                    Lật Mặt: 48H đậm chất
                  </Typography>
                  <Typography className={classes.subText}>
                    Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip
                    rượt đuổi gay cấn thót tim fans hâm mộ
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs>
              <Box className={classes.wrapper}>
                <img src='./images/News/tintuc3.png' width="100%" />
                <Box className={classes.wrapperText}>
                  <Typography className={classes.mainText}>
                    Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip
                    Lật Mặt: 48H đậm chất
                  </Typography>
                  <Typography className={classes.subText}>
                    Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip
                    rượt đuổi gay cấn thót tim fans hâm mộ
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs>
              <Box className={classes.wrapper}>
                <img src='./images/News/tintuc4.png' width="100%" />
                <Box className={classes.wrapperText}>
                  <Typography className={classes.mainText}>
                    Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip
                    Lật Mặt: 48H đậm chất
                  </Typography>
                  <Typography className={classes.subText}>
                    Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip
                    rượt đuổi gay cấn thót tim fans hâm mộ
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs>
              <Box className={classes.wrapper}>
                <img src='./images/News/tintuc5.jpg' width="100%" />
                <Box className={classes.wrapperText}>
                  <Typography className={classes.mainText}>
                    Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip
                    Lật Mặt: 48H đậm chất
                  </Typography>
                  <Typography className={classes.subText}>
                    Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip
                    rượt đuổi gay cấn thót tim fans hâm mộ
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Box>
  );
};

export default News;
