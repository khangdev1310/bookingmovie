import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import AddIcon from "@material-ui/icons/Add";

import {getUserAccountByPage, addUserAccount} from "../../redux/action/admin";

import Pagination from "@material-ui/lab/Pagination";
import "./Admin.css";


import ListUsers from "./ListUser"
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function UserManagement() {
  const { userAccount, isLoading, error, updateUserAccount } = useSelector(
    (state) => state.admin
  );
  const dispatch = useDispatch();
  const [successMessage, setSuccessMessage] = useState("Cập nhật thành công");
  const [errorMessage, setErrorMessage] = useState(
    "Server lỗi, vui lòng thử lại sau ít phút!!"
  );
  const [openSucessDialog, setOpenSucessDialog] = useState(false);
  const [openErrorDialog, setOpenErrorDialog] = useState(false);

  const [getData, setData] = useState([]);
  const [newUser, setNewUser] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "",
    maLoaiNguoiDung: "",
    hoTen: "",
  });
  const handleCloseDialog = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSucessDialog(false);
    setOpenErrorDialog(false);
  };

  // Pagination
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await dispatch(getUserAccountByPage(page));
      if (data.payload.error) {
        alert(data.payload.error.message);
      } else {
        
        setData(data.payload.data.items);
      }
    };
    fetchData();
  }, [page, updateUserAccount]);

  const [addUser, setAddUser] = useState(false);
  const handleAdd = () => {
    setAddUser(!addUser);
  };
  // Add new user

  const handleChangeAddNewUser = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleAddNewUser = async () => {
    const data = await dispatch(addUserAccount({...newUser}));
    if (data.payload.error) {
      setErrorMessage(data.payload.error.message);
      setOpenErrorDialog(true);
    } else {
      setSuccessMessage(data.payload.data.message);
      setOpenSucessDialog(true);
    }
    setAddUser(!addUser);
    console.log(data);
  };

  return (
    <div className="mt-3">
      <div className="row" style={{ marginTop: "70px" }}>
        <button
          className="btn btn-success"
          style={{ padding: "15px", marginLeft: "25px", marginRight: "10px" }}
          onClick={handleAdd}
        >
          <AddIcon />
        </button>
      </div>
      <table class="table" style={{ marginTop: "15px" }}>
        <thead>
          <tr>
            <th scope="col">
              {" "}
              <input type="checkbox" />
            </th>
            <th scope="col">Tài Khoản</th>
            <th scope="col">Mật khẩu</th>
            <th scope="col">Email</th>
            <th scope="col">Số điện thoại</th>
            <th scope="col">Mã nhóm</th>
            <th scope="col">Mã loại người dùng</th>
            <th scope="col">Họ tên</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {addUser ? (
            <tr>
              <th scope="col">
                {" "}
                <input type="checkbox" />
              </th>
              <td>
                <TextField
                  type="text"
                  name="taiKhoan"
                  onChange={handleChangeAddNewUser}
                />
              </td>
              <td>
                <TextField
                  type="text"
                  name="matKhau"
                  onChange={handleChangeAddNewUser}
                />
              </td>
              <td>
                <TextField
                  type="text"
                  name="email"
                  onChange={handleChangeAddNewUser}
                />
              </td>
              <td>
                <TextField
                  type="text"
                  name="soDt"
                  onChange={handleChangeAddNewUser}
                />
              </td>
              <td>
                <TextField
                  type="text"
                  name="maNhom"
                  onChange={handleChangeAddNewUser}
                />
              </td>
              <td>
                <TextField
                  type="text"
                  name="maLoaiNguoiDung"
                  onChange={handleChangeAddNewUser}
                />
              </td>
              <td>
                <TextField
                  type="text"
                  name="hoTen"
                  onChange={handleChangeAddNewUser}
                />
              </td>
              <td>
                <button
                  className="btn btn-success"
                  style={{ marginRight: "5px" }}
                  onClick={handleAddNewUser}
                >
                  <CheckIcon />
                </button>
                <button className="btn btn-danger" onClick={handleAdd}>
                  <CloseIcon />
                </button>
              </td>
            </tr>
          ) : (
            <></>
          )}
          {getData.map((item, index) => (
            <ListUsers item={item} id={index} key={index} />
          ))}
        </tbody>
      </table>
      <div
        style={{ width: "100%  ", margin: "10px auto" }}
        className="Admin-pagination"
      >
        <Pagination
          count={10}
          page={page}
          size="large"
          color="primary"
          onChange={handleChange}
        />
      </div>
      
    </div>
  );
}
