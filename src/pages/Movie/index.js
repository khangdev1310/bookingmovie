import React, { useEffect ,useRef  } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MovieCard from "src/components/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "src/redux/action/CoursesActions";
import Slider from "react-slick";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useStyles } from "./styles";
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



export default function MovieTabs() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const { courses1, isLoading, errors } = useSelector(
    (state) => state.coursesReducer
  );
  useEffect(() => {
    dispatch(getCourses());
}, []);
const ref = useRef({});
const next = () => {
  ref.current.slickNext();
};

const previous = () => {
  ref.current.slickPrev();
};

const ArrowLeft = (props) => (
  <div className={`${classes.prevArrow}`} onClick={previous}>
    <ArrowBackIosIcon
      style={{ color: "#544874", transform: "scale(1.5)" }}
      className={classes.hoverSVG}
    />
  </div>
);
const ArrowRight = (props) => (
  <div className={`${classes.nextArrow}`} onClick={next}>
    <ArrowForwardIosIcon
      style={{ color: "#544874", transform: "scale(1.5)" }}
      className={classes.hoverSVG}
    />
  </div>
);

const sliceMovieList1 = [...courses1].slice(0, 15).reverse();
const sliceMovieList2 = [...courses1].slice(16, 31);
const sliceMovieList3 = [...courses1].slice(0,19, courses1.length).reverse();
const sliceMovieList4 = [...courses1];

const renderMovieList3 = () => {
  return sliceMovieList3.map((movie, index) => {
    return <MovieCard movie={movie} key={index} />;
  });
};

const settings = {
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 4,
  dots: false,
  infinite: false,

  speed: 500,
  slidesToScroll: 4,
  prevArrow: <ArrowLeft />,
  nextArrow: <ArrowRight />,
  rows: 2,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        infinite: false,
        dots: false,
      },
    },
    {
      breakpoint: 900,
      settings: {
        centerMode: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 900,
      settings: {
        centerMode: false,
        slidesToShow: 3,
        infinite: false,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: false,
        slidesToShow: 2,
        infinite: false,
        slidesToScroll: 1,
      },
    },
  ],
};


  
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <div className={classes.root}>
      
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Đang Chiếu" {...a11yProps(0)} />
          <Tab label="Sắp Chiếu" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Slider {...settings} ref={ref}>
      {renderMovieList3()}
     
      
     
    </Slider>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Slider {...settings} ref={ref}>
      {renderMovieList3()}
     
      
     
    </Slider>
      </TabPanel>
    </div>
  );
}


