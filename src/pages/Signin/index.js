import React  from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signin1 } from "../../redux/action/userSignAction";

import { useDispatch, useSelector } from "react-redux";
import {  Redirect, useLocation } from "react-router-dom";
import {  Link as LinkRouter } from "react-router-dom";

import qs from "qs";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function DangNhap() {
  const classes = useStyles();
  const { userInfo, isLoading, error } = useSelector((state) => state.signReducer);
  
  const dispatch = useDispatch();
  const location = useLocation();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string("Invalid account format").required("Required!"),
      matKhau: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      dispatch(signin1(values));
      console.log(values);
    },
  });
  if (userInfo) {
    const { redirectTo } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    if (redirectTo) {
      return <Redirect to={redirectTo} />;
     
    }
    
    return <Redirect to="/" />;
  }
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Tên tài khoản"
            name="taiKhoan"
            autoComplete="account"
            onChange={formik.handleChange}
            value={formik.values.taiKhoan}
          />
          {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
            <div className="alert alert-danger  w-100 " >{formik.errors.taiKhoan}</div>
          ) : null}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="matKhau"
            label="Mật khẩu"
            type="matKhau"
            id="matKhau"
            autoComplete="current-password"
            onChange={formik.handleChange}
            value={formik.values.matkhau}
          />
          {formik.touched.matKhau && formik.errors.matKhau ? (
            <div className="alert alert-danger  w-100 " >{formik.errors.matKhau}</div>
          ) : null}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Đăng Nhập
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <LinkRouter to="/dangky" variant="body2">
                {"Don't have an account? Sign Up"}
              </LinkRouter>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
