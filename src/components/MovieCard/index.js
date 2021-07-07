
import React from 'react'
import { Box, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import GradeIcon from "@material-ui/icons/Grade";
export default function MovieCard({movie}) {
  const { hinhAnh, biDanh, tenPhim, maPhim, danhGia } = movie;
    const classes = useStyles();
    return (
      <div className={classes.item}>
        
        <Box className={classes.poster}>
        <img
          src={hinhAnh}
          alt={biDanh}
          width="100%"
          height="350px"
          style={{ borderRadius: "4px" }}
        />
        <Box className={classes.titleContainer}>
          <Typography className={classes.title}>{tenPhim}</Typography>
        </Box>

        <Box display="flex" className={classes.description}>
          <Box
            display="flex"
            alignItems="center"
            className={classes.spacingSpan}
          >
            <GradeIcon style={{ fontSize: "12px", color: "plum" }} />
            <Typography style={{ fontSize: "14px", color: "white"  }}>{danhGia}</Typography>
          </Box>
          <Box className={classes.spacingSpan}>
            <Typography style={{ fontSize: "14px", color: "white"  }}>HD</Typography>
          </Box>
          <Box className={classes.spacingSpan}>
            <Typography style={{ fontSize: "14px", color: "white" }}>16+</Typography>
          </Box>
        </Box>

        <Box className={classes.buyTicketContainer}>
          <Link
            to={`/movie/${movie?.maPhim}`}
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained" className={classes.buyTicketButton}>
              Chi tiết
            </Button>
          </Link>
        </Box>
        <div className={classes.overlay}></div>
      </Box>
      
    </div>
    )
}
