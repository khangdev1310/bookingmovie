import axiosClient from "./axiosClient";

const usersignAPI = {
  signin: (values) => {
    return axiosClient.post("/QuanLyNguoiDung/DangNhap", values);
  },

  signup: (values) => {
    return axiosClient.post("/QuanLyNguoiDung/DangKy", values);
  },
};

export default usersignAPI;