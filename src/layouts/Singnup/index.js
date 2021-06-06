import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useFormik } from "formik";
import * as Yup from "yup";
import {signup} from '../../redux/actionReducers/signUp';
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useLocation } from 'react-router';
import {  Link as LinkRouter } from "react-router-dom";

import qs from "qs";
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
export default  function DangKy() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { userInfo, isLoading, error } = useSelector((state) => state.signUp);
    const location = useLocation();
    const formik = useFormik({
        initialValues: {
          taiKhoan: "",
          matKhau: "",
          hoTen: "",
          email: "",
          soDt: "",
          maLoaiNguoiDung: "KhachHang",
          maNhom: "GP01",
        },
        validationSchema: Yup.object({
          taiKhoan: Yup.string("Invalid account format").required(
            "Vui lòng điền vào!"
          ),
          matKhau: Yup.string()
            .min(8, "Minimum 8 characters")
            .required("Vui lòng điền vào!"),
          hoTen: Yup.string("Invalid account format").required(
            "Vui lòng điền vào!"
          ),
          email: Yup.string()
            .email("Email không tồn tại")
            .required("Vui lòng điền vào!"),
          soDt: Yup.number()
            .typeError("Số điện thoại không hợp lệ")
            .positive("Số điện thoại không hợp lệ")
            .required("Vui lòng điền vào!"),
        }),
        onSubmit: (values) => {
          dispatch(signup(values));
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
        
        
       
    
        return <Redirect to="/dangnhap" />;
      }
     
    return (
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="account"
                name="taiKhoan"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Tên tài khoản"
                autoFocus
                onChange={formik.handleChange}
                value={formik.values.taiKhoan}
              />
            </Grid>
            {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
                <div className="alert alert-danger ml-2 w-100 mr-2">{formik.errors.taiKhoan}</div>
              ) : null}

            
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="matKhau"
                label="Mật khẩu"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={formik.handleChange}
                value={formik.values.matkhau}
              />
            </Grid>
            {formik.touched.matKhau && formik.errors.matKhau ? (
                <div className="alert alert-danger ml-2 w-100 mr-2">{formik.errors.matKhau}</div>
              ) : null}
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Họ & Tên"
                name="hoTen"
                autoComplete="lname"
                onChange={formik.handleChange}
                value={formik.values.hoTen}
              />
            </Grid>
            {formik.touched.matKhau && formik.errors.matKhau ? (
                <div className="alert alert-danger ml-2 w-100 mr-2">{formik.errors.matKhau}</div>
              ) : null}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </Grid>
            {formik.touched.email && formik.errors.email ? (
                <div className="alert alert-danger ml-2 w-100 mr-2">{formik.errors.email}</div>
              ) : null}

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="soDt"
                label="Số điện thoại "
                
                id="password"
                autoComplete="SDT"
                onChange={formik.handleChange}
                value={formik.values.soDt}
              />
            </Grid>
            {formik.touched.soDt && formik.errors.soDt ? (
                <div className="alert alert-danger ml-2 w-100 mr-2">{formik.errors.soDt}</div>
              ) : null}
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <LinkRouter to="/dangnhap" variant="body2">
                Already have an account? Sign in
              </LinkRouter>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    )
}
