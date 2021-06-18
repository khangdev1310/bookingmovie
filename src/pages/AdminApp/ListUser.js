import React, { useState, useCallback, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector, useDispatch } from "react-redux";
import {updateUserAccount,deleteUserAccount} from "../../redux/action/admin";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ListUsers = ({ item, id }) => {
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditvalue] = useState(item)
  const [successMessage, setSuccessMessage] = useState('Cập nhật thành công');
  const [errorMessage, setErrorMessage] = useState('Server lỗi, vui lòng thử lại sau ít phút!!');
  const [openSucessDialog, setOpenSucessDialog] = useState(false);
  const [openErrorDialog, setOpenErrorDialog] = useState(false);

  const dispatch = useDispatch();

  const handleOnEdit = () => {
    setOnEdit(true);
  };


  const handleChange = (event) => {
    setEditvalue({
        ...editValue,
        [event.target.name]: event.target.value
    });
  }

  const handleCancelEdit = () => {
    setEditvalue(item);
    setOnEdit(false);
  }
  
  const handleCloseDialog = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSucessDialog(false);
    setOpenErrorDialog(false);
  }

  const handleUpdate =   async () => {
    const data = await dispatch(updateUserAccount(editValue))
    setOnEdit(false);

  }
  console.log(editValue);

  // Xóa user
  const  handleDelete = async () => {
    const data = await dispatch(deleteUserAccount(item.taiKhoan))
  }

 
  if (onEdit) {
    return (
      <tr key={item._id}>
           <th scope="col">
          {" "}
          <input type="checkbox" />
        </th>
        <td>
          <TextField type="text" name="taiKhoan" value={editValue.taiKhoan} onChange={handleChange}/>
        </td>
        <td>
          <TextField type="text" name="matKhau" value={editValue.matKhau} onChange={handleChange}/>
        </td>
        <td>
          <TextField type="text" name="email" value={editValue.email} onChange={handleChange}/>
        </td>
        <td>
          <TextField type="text" name="soDt" value={editValue.soDt} onChange={handleChange}/>
        </td>
        <td>
          <TextField type="text" name="maNhom" value={editValue.maNhom} onChange={handleChange}/>
        </td>
        <td>
          <TextField type="text" name="maLoaiNguoiDung" value={editValue.maLoaiNguoiDung} onChange={handleChange}/>
        </td>
        <td>
          <TextField type="text" name="hoTen" value={editValue.hoTen} onChange={handleChange}/>
        </td>
        <td>
          <button className="btn btn-success" style={{ marginRight: "5px" }} onClick={handleUpdate}>
            <CheckIcon />
          </button>
          <button className="btn btn-danger" onClick={handleCancelEdit}>
            <CloseIcon />
          </button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr key={item._id}>
        <th scope="col">
          {" "}
          <input type="checkbox" />
        </th>
        <td>{item.taiKhoan}</td>
        <td>{item.matKhau}</td>
        <td>{item.email}</td>
        <td>{item.soDt}</td>
        <td>{item.maNhom}</td>
        <td>{item.maLoaiNguoiDung}</td>
        <td>{item.hoTen}</td>
        <td>
          <button
            className="btn btn-success"
            style={{ marginRight: "5px" }}
            onClick={handleOnEdit}
          >
            <EditIcon />
          </button>
          <button className="btn btn-danger" onClick={handleDelete}>
            <DeleteIcon />
          </button>
        </td>
        <Snackbar
              open={openSucessDialog}
              autoHideDuration={2000}
              onClose={handleCloseDialog}
            >
              <Alert onClose={handleCloseDialog} severity="success">
                {successMessage}
              </Alert>
            </Snackbar>

            <Snackbar
              open={openErrorDialog}
              autoHideDuration={2000}
              onClose={handleCloseDialog}
            >
              <Alert onClose={handleCloseDialog} severity="error">
                {errorMessage}
              </Alert>
            </Snackbar>
      </tr>
      
    );
  }
};

export default ListUsers;
