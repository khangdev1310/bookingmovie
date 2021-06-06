import axiosClient from "./axiosClient";

const thongtinlichphimAPI = {
  thongtinlichChieu: (maPhim) => {
    return axiosClient(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
  },

  
};

export default thongtinlichphimAPI;