import React, { useState, useCallback, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector, useDispatch } from "react-redux";
import { updateFilm, deleteFilm } from "../../redux/action/admin";
import Snackbar from "@material-ui/core/Snackbar";
import Input from "@material-ui/core/Input";
import MuiAlert from "@material-ui/lab/Alert";
import moment from "moment";
import { TextareaAutosize } from "@material-ui/core";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ListPhim({ item, id, key }) {
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditvalue] = useState(item);
  const [successMessage, setSuccessMessage] = useState("Cập nhật thành công");
  const [errorMessage, setErrorMessage] = useState(
    "Server lỗi, vui lòng thử lại sau ít phút!!"
  );
  const [openSucessDialog, setOpenSucessDialog] = useState(false);
  const [openErrorDialog, setOpenErrorDialog] = useState(false);

  const dispatch = useDispatch();

  const handleOnEdit = () => {
    setOnEdit(true);
  };

  const handleChange = (event) => {
    if (event.target.name === "hinhAnh") {
      setEditvalue({...editValue,hinhAnh: event.target.files[0] });
    } else {
      setEditvalue({
        ...editValue,
        [event.target.name]: event.target.value,
      });
    }
  };


  const handlChangeDate = (e) => {
    setEditvalue({
      ...editValue,
      [e.target.name]: moment(e.target.value).format("DD/MM/YYYY"),
    });
  };

  const handleCancelEdit = () => {
    setOnEdit(false);
  };

  const handleCloseDialog = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSucessDialog(false);
    setOpenErrorDialog(false);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form_data = new FormData();
    for(let key in editValue){
      form_data.append(key, editValue[key])
    }
    const data = await dispatch(updateFilm(form_data));
    setOnEdit(false);
  };

  const handleCloseAdd = () => {
    setEditvalue(item);
    setOnEdit(false);
  };
  // Xóa user
  const handleDelete = async () => {
    const data = await dispatch(deleteFilm(item.maPhim));
  };

  if (onEdit) {
    return (
      <tr key={item._id}>
        <td>
          <TextField
            type="text"
            name="maPhim"
            value={editValue.maPhim}
            onChange={handleChange}
          />
        </td>
        <td>
          <TextField
            type="text"
            name="tenPhim"
            value={editValue.tenPhim}
            onChange={handleChange}
          />
        </td>
        <td>
          <TextField
            type="text"
            name="biDanh"
            value={editValue.biDanh}
            onChange={handleChange}
          />
        </td>
        <td>
          <iframe
            width="100"
            height="100"
            src={item.trailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </td>
        <td>
          <img
            src={item.hinhAnh}
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
          <Input type="file" name="hinhAnh" onChange={handleChange} />
        </td>
        <td>
          <TextareaAutosize
            type="text"
            name="moTa"
            value={editValue.moTa}
            style={{ width: "100%", height: "100px" }}
            onChange={handleChange}
          />
        </td>
        <td>
          <TextField
            type="text"
            name="maNhom"
            value={editValue.maNhom}
            onChange={handleChange}
          />
        </td>
        <td>
          {" "}
          <Input
            type="date"
            name="ngayKhoiChieu"
            min="01-01-1995"
            max="31-12-2030"
            onChange={handlChangeDate}
          />
        </td>
        <td>
          <TextField
            type="text"
            name="danhGia"
            value={editValue.danhGia}
            onChange={handleChange}
          />
        </td>
        <td>
          <button
            className="btn btn-success"
            style={{ marginRight: "5px" }}
            onClick={handleUpdate}
          >
            <CheckIcon />
          </button>
          <button className="btn btn-danger" onClick={handleCloseAdd}>
            <CloseIcon />
          </button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr key={item._id}>
        <td>{item.maPhim}</td>
        <td>{item.tenPhim}</td>
        <td>{item.biDanh}</td>
        <td>
          <iframe
            width="100"
            height="100"
            src={item.trailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </td>
        <td>
          <img
            src={item.hinhAnh}
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        </td>
        <td>{item.moTa}</td>
        <td>{item.maNhom}</td>
        <td>{moment(item.ngayKhoiChieu).format("DD/MM/YYYY")}</td>
        <td>{item.danhGia}</td>
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
      </tr>
    );
  }
}
