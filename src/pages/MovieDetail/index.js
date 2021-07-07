import {
    AppBar,
    Box,
    Button,
    Grid,
    InputLabel,
    Paper,
    TextField,
    Typography,
  } from "@material-ui/core";
  import React, { useEffect, useState } from "react";
  import { useStyle } from "./style";
 
  import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
  import PropTypes from "prop-types";
  import Tabs from "@material-ui/core/Tabs";
  import Tab from "@material-ui/core/Tab";
  import { Link } from "react-router-dom";
  import "./style.css";
  import { useParams } from "react-router-dom";
  import GradeIcon from "@material-ui/icons/Grade";
  import SendIcon from "@material-ui/icons/Send";
  import VisibilityIcon from "@material-ui/icons/Visibility";
  import StarIcon from "@material-ui/icons/Star";
  import SubjectIcon from "@material-ui/icons/Subject";
  import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
  import { useSelector, useDispatch } from "react-redux";
 
  import { makeStyles } from "@material-ui/core/styles";
  import Modal from "@material-ui/core/Modal";
  import Backdrop from "@material-ui/core/Backdrop";
  import HighlightOffIcon from "@material-ui/icons/HighlightOff";
  import Fade from "@material-ui/core/Fade";
  import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
  import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
  import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
  import Rating from "@material-ui/lab/Rating";
  import Swal from "sweetalert2";
  import {getCoursesDetails} from '../../redux/action/CoursesActions';
  import StarHalfIcon from "@material-ui/icons/StarHalf";
import LichChieuHome from "../Lichchieu/lichchieuHome";

  
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  
  const Detail = (props) => {
    const classes = useStyle();
    const thongTinPhim = useSelector(
      (state) => state.coursesDetailsReducer.movieDetail
    );
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    let [limit, setLimit] = useState(5);
    const dispatch = useDispatch();
    const {id} = useParams();
   
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    useEffect(() => {
      dispatch(getCoursesDetails(id));
        
      
    }, []);
  
    
    
  
    
  
    return (
      <>
        <Box className={classes.bgColor}>
          <Box className={classes.containerForMovie}>
            <div className="background background-filter">
              <Box className="u-non-blurred">
                <Box className={`${classes.container}`}>
                  <Box className={classes.realContainer}>
                    <div className={classes.root}>
                      <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={3}>
                          <Grid item xs={4}>
                            <Box className={classes.containerImage}>
                              <img
                                src={thongTinPhim?.hinhAnh}
                                width="100%"
                                style={{ borderRadius: "10px" }}
                              />
                              <Grid
                                container
                                spacing={3}
                                className={classes.stackContainer}
                              >
                                <Grid item xs={6} className={classes.stackItem}>
                                  <Box
                                    display="flex"
                                    alignItems="center"
                                    flexDirection="column"
                                    onClick={handleOpen}
                                    style={{ cursor: "pointer" }}
                                  >
                                    <PlayCircleFilledIcon
                                      style={{ color: "#FAFAFA" }}
                                    />
                                    <Typography
                                      component="p"
                                      style={{
                                        fontWeight: "300",
                                        fontSize: "14px",
                                        marginTop: "5px",
                                        color: "#FAFAFA",
                                      }}
                                    >
                                      Trailer
                                    </Typography>
                                  </Box>
                                </Grid>
                                <Grid item xs={6} className={classes.stackItem}>
                                  <Box
                                    display="flex"
                                    alignItems="center"
                                    flexDirection="column"
                                  >
                                    <ErrorOutlineIcon
                                      style={{ color: "#FAFAFA" }}
                                    />
                                    <Typography
                                      component="p"
                                      style={{
                                        fontWeight: "300",
                                        fontSize: "14px",
                                        marginTop: "5px",
                                        color: "#FAFAFA",
                                      }}
                                    >
                                      Chi tiết
                                    </Typography>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          </Grid>
                          <Grid item xs={8}>
                            <Box display="flex" className={classes.describeTitle}>
                              <Grid container spacing={1}>
                                <Grid item xs={9}>
                                  <Box style={{ paddingRight: "1rem" }}>
                                    <Typography className={classes.mainTitle}>
                                      {thongTinPhim?.tenPhim}
                                    </Typography>
                                    <Typography
                                      style={{ margin: "0.1rem 0 0.8rem 0" }}
                                    >
                                      Thời lượng: 113 phút
                                    </Typography>
                                    <Box
                                      display="flex"
                                      alignItems="flex-start"
                                      justifyItems="flex-start"
                                      className={classes.reviewContainer}
                                    >
                                      <Box>
                                        <VisibilityIcon />
                                        <Typography>3325</Typography>
                                      </Box>
                                      <Box>
                                        <StarIcon />
                                        <Typography>325</Typography>
                                      </Box>
                                      <Box>
                                        <SubjectIcon />
                                        <Typography>325</Typography>
                                      </Box>
                                    </Box>
                                    <Box style={{ margin: "1rem 0" }}>
                                      <Typography
                                        className={classes.fontForProduction}
                                      >
                                        Nhà sản xuất:{" "}
                                        <Typography display="inline">
                                          Mike Tyson
                                        </Typography>
                                      </Typography>
                                      <Typography
                                        className={classes.fontForProduction}
                                      >
                                        Quốc gia:{" "}
                                        <Typography display="inline">
                                          Mỹ
                                        </Typography>
                                      </Typography>
                                      <Typography
                                        className={classes.fontForProduction}
                                      >
                                        Thể loại:{" "}
                                        <Typography display="inline">
                                          Hành động
                                        </Typography>
                                      </Typography>
                                    </Box>
                                  </Box>
                                </Grid>
                                <Grid
                                  item
                                  xs={3}
                                  className={classes.hideOnMobileScore}
                                >
                                  <Box
                                    display="flex"
                                    style={{
                                      flexDirection: "column",
                                      justifyContent: "flex-start",
                                      // alignItems: "center",
                                      height: "100%",
                                    }}
                                  >
                                    <div
                                      className={`c100 p${
                                        thongTinPhim?.danhGia.length > 0
                                          ? thongTinPhim?.danhGia
                                          : thongTinPhim?.danhGia + "0"
                                      }`}
                                    >
                                      <span>{thongTinPhim?.danhGia}</span>
                                      <div className="slice">
                                        <div className="bar"></div>
                                        <div className="fill"></div>
                                      </div>
                                    </div>
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "center",
                                      }}
                                    >
                                      <GradeIcon />
                                      <GradeIcon />
                                      <GradeIcon />
                                    </div>
                                    <div style={{ marginTop: "0.5rem" }}>
                                      <Typography style={{ textAlign: "center" }}>
                                         đánh
                                        giá
                                      </Typography>
                                    </div>
                                  </Box>
                                </Grid>
                              </Grid>
                              <Box>
                                <Typography>&nbsp;</Typography>
                                <Typography className={classes.fontForProduction}>
                                  Nội dung
                                </Typography>
                                <Typography>{thongTinPhim?.moTa}</Typography>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </Box>
                </Box>
              </Box>
            </div>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <div className={classes.exitIcon} onClick={handleClose}>
                    <HighlightOffIcon
                      style={{
                        color: "#FAFAFA",
                        fontSize: "3rem",
                      }}
                    />
                  </div>
                  <iframe
                    width="100%"
                    height="100%"
                    src={thongTinPhim?.trailer}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </Fade>
            </Modal>
          </Box>
          {/*Mobile */}
          <Box className={classes.forMobile}>
            <Box className={classes.containerImageMobile}>
              <img src={thongTinPhim?.hinhAnh} width="100%" />
              <div className={classes.overlay}></div>
              <div className={classes.playButton} onClick={handleOpen}>
                <PlayCircleOutlineIcon
                  style={{ fontSize: "4rem", color: "#dbdbdb" }}
                />
              </div>
            </Box>
            <Box style={{ color: "#FAFAFA", margin: "1rem" }}>
              <Typography className={classes.ngayKhoiChieuMobile}>
                {new Date(thongTinPhim?.ngayKhoiChieu).toLocaleDateString(
                  "en-GB",
                  { month: "2-digit", day: "2-digit", year: "numeric" }
                )}
              </Typography>
              <Typography className={classes.titleMobile}>
                {thongTinPhim?.tenPhim}
              </Typography>
              <Typography className={classes.subMobile}>
                120 phút - {thongTinPhim?.danhGia} IMDb - 2D/Digital
              </Typography>
            </Box>
          </Box>
          <Box className={classes.containerForTabs}>
            <Box className={classes.tabs}>
              <AppBar position="static" className={classes.bgNavTab}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="simple tabs example"
                  centered
                >
                  <Tab label="Lịch chiếu" {...a11yProps(0)} />
                  <Tab label="Đánh giá" {...a11yProps(1)} />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                <Box className={classes.container}>
                  <Grid container spacing={1}>
                    <LichChieuHome/>
                  </Grid>
                </Box>
              </TabPanel>
              <TabPanel value={value} index={1}>
                
              </TabPanel>
            </Box>
          </Box>
        </Box>
      </>
    );
  };
  export default Detail;