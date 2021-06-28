import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Pagination from "@material-ui/lab/Pagination";
import { getFilmByPage, addFilm } from "../../redux/action/admin";
import { TextareaAutosize } from "@material-ui/core";
import ListPhim from "./ListPhim";
import moment from "moment";

export default function FilmManagement() {
  const { FilmInfor, isLoading, error, updateFilmInfor } = useSelector(
    (state) => state.adminFilm
  );
  const dispatch = useDispatch();
  const [getData, setData] = useState([]);
  // Pagination
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const [newFilm, setNewFilm] = useState({
    maPhim: "",
    tenPhim: "",
    biDanh: "",
    trailer: "",
    hinhAnh: {},
    moTa: "",
    maNhom: "",
    ngayKhoiChieu: moment("").format("DD/MM/YYYY"),
    danhGia: "",
  });
  // API film
  useEffect(() => {
    const fetchData = async () => {
      const data = await dispatch(getFilmByPage(page));
      if (data.payload.error) {
        alert(data.payload.error.message);
      } else {
        setData(data.payload.data.items);
      }
    };
    fetchData();
  }, [page, updateFilmInfor]);

  // Add film
  const [addTagFilm, setAddTagFilm] = useState(false);
  const handleAdd = () => {
    setAddTagFilm(!addTagFilm);
  };

  const handleCloseAdd = () => {
    setAddTagFilm(!addTagFilm);
  };
  // Add new film when onchange
  const handleChangeAddNewFilm = (e) => {
    if (e.target.name === "hinhAnh") {
      setNewFilm({ ...newFilm,hinhAnh: e.target.files[0] });
    } else {
      setNewFilm({ ...newFilm, [e.target.name]: e.target.value });
    }
  };

  const handlChangeDate = (e) => {
    setNewFilm({
      ...newFilm,
      [e.target.name]: moment(e.target.value).format("DD/MM/YYYY"),
    });
  };

  const handleAddNewFilm = async (e) => {
    e.preventDefault();
    const form_data = new FormData();
    for(let key in newFilm){
      form_data.append(key, newFilm[key])
    }
    const data = await dispatch(addFilm(form_data));
    setAddTagFilm(!addTagFilm);
  };

  console.log(newFilm);

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
            <th scope="col">Mã phim</th>
            <th scope="col">Tên Phim</th>
            <th scope="col">Bí danh</th>
            <th scope="col">Trailer</th>
            <th scope="col">Hình Ảnh</th>
            <th scope="col">Mô tả</th>
            <th scope="col">Mã nhóm</th>
            <th scope="col">Ngày khởi chiếu</th>
            <th scope="col">Đánh giá</th>
          </tr>
        </thead>
        <tbody>
          {addTagFilm ? (
            <tr>
              <td>
                <TextField
                  type="text"
                  name="maPhim"
                  onChange={handleChangeAddNewFilm}
                />
              </td>
              <td>
                <TextField
                  type="text"
                  name="tenPhim"
                  onChange={handleChangeAddNewFilm}
                />
              </td>
              <td>
                <TextField
                  type="text"
                  name="biDanh"
                  onChange={handleChangeAddNewFilm}
                />
              </td>
              <td>
                <TextField
                  type="text"
                  name="trailer"
                  onChange={handleChangeAddNewFilm}
                />
              </td>
              <td>
                <Input
                  type="file"
                  name="hinhAnh"
                  onChange={handleChangeAddNewFilm}
                />
              </td>
              <td>
                <TextareaAutosize
                  type="text"
                  name="moTa"
                  style={{ width: "100%", height: "100px" }}
                  onChange={handleChangeAddNewFilm}
                />
              </td>
              <td>
                <TextField
                  type="text"
                  name="maNhom"
                  onChange={handleChangeAddNewFilm}
                />
              </td>
              <td>
                <Input
                  type="date"
                  name="ngayKhoiChieu"
                  placeholder="dd-mm-yyyy"
                  min="01-01-1995"
                  max="31-12-2030"
                  onChange={handlChangeDate}
                />
              </td>
              <td>
                <TextField
                  type="text"
                  name="danhGia"
                  onChange={handleChangeAddNewFilm}
                />
              </td>
              <td>
                <button
                  className="btn btn-success"
                  style={{ marginRight: "5px" }}
                  onClick={handleAddNewFilm}
                >
                  <CheckIcon />
                </button>
                <button className="btn btn-danger" onClick={handleCloseAdd}>
                  <CloseIcon />
                </button>
              </td>
            </tr>
          ) : (
            <></>
          )}
          {getData.map((item, index) => (
            <ListPhim item={item} id={index} key={index} />
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
