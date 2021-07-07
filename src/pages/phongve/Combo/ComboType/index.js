import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

import { useSelector, useDispatch } from "react-redux";


const ComboType = ({ combo }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDispatchQuantity = (isAddMinus) => {
    
  };
  return (
    <Grid container spacing={1} style={{ margin: "1rem 0" }}>
      <Grid item xs={9}>
        <Box display="flex">
          <img src="" width="40px" />
          <Box className={classes.wrapperNameCombo}>
            <Typography className={classes.comboTitle}>{combo.ten}</Typography>
            <Typography className={classes.span}>{combo.expl}</Typography>
            <Typography className={classes.comboPrice}>
              {combo.gia} đ
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={{ height: "100%" }}
        >
          <Box
            
          >
            <Typography className={classes.minus}>-</Typography>
          </Box>
          <Box>
            <Typography className={classes.quantity}>
              {combo.quantity}
            </Typography>
          </Box>
          <Box
           
          >
            <Typography className={classes.add}>+</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ComboType;