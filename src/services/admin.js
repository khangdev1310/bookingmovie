import axiosClient from "./axiosClient";

const adminAPI = {
  getUser: (pages) => {
    return axiosClient.get(
      `/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP12&soTrang=${pages}&soPhanTuTrenTrang=50`
    );
  },
  updateUser: (values) => {
    return axiosClient.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", values);
  },
  deleteUser: (id) => {
    return axiosClient.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${id}`);
  },
  addUser: (values) => {
    return axiosClient.post("/QuanLyNguoiDung/ThemNguoiDung", values);
  },


  getFilm: (page) => {
    return axiosClient.get(
      `/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP12&soTrang=${page}&soPhanTuTrenTrang=50`
    );
  },
  updateFilm: (values) => {
    return axiosClient.post("/QuanLyPhim/CapNhatPhimUpload", values);
  },
  deleteFilm: (id) => {
    return axiosClient.delete(`/QuanLyPhim/XoaPhim?MaPhim=${id}`);
  },
  addFilm: (values) => {
    return axiosClient.post("/QuanLyPhim/ThemPhimUploadHinh", values);
  },
};
export default adminAPI;
