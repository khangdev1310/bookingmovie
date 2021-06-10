import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({
 
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        width: "60%",
        margin: "auto",
        "& .MuiAppBar-colorPrimary": {
          color: "#000",
          backgroundColor: "#fff",
        },
        "& .MuiPaper-elevation4": {
          boxShadow: "none",
        },
        "& .MuiTabs-flexContainer": {
          justifyContent: "center",
          justifyItems: "center",
        },
      },

  prevArrow: {
    fontSize: 0,
    lineHeight: 0,
    position: "absolute",
    top: "46%",
    display: "block",
    width: "20px",
    height: "20px",
    padding: "0",
    transform: "translate(100%, -50%)",
    cursor: "pointer",
    border: "none",
    outline: "none",
    background: "transparent",
    zIndex: "2",

    "&:before": {
      fontFamily: "slick",
      fontSize: "20px",
      lineHeight: "1",
      opacity: "0.75",
    },
  },

  nextArrow: {
    fontSize: 0,
    lineHeight: 0,
    position: "absolute",
    top: "46%",
    right: "0",
    display: "block",
    width: "20px",
    height: "20px",
    padding: "0",
    transform: "translate(-50%, -50%)",
    cursor: "pointer",
    border: "none",
    outline: "none",
    background: "transparent",
    "&:before": {
      fontFamily: "slick",
      fontSize: "20px",
      lineHeight: "1",
      opacity: "0.75",
    },
  },

  hoverSVG: {
    "&:hover": {
      color: "#CCB3DB !important",
    },
  },

  titleContainer: {
    marginLeft: "0rem",
  },

  titleColor: {
    width: "0.2rem",
    height: "2rem",
    backgroundColor: "plum",
    marginRight: "0.5rem",
  },
}));