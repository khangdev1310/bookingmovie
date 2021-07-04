import axiosClient from "./axiosClient";

const datveAPI = {
  danhsachphongVe: (id) => {
    const params = { MaLichChieu: "id"};
		return axiosClient.get("QuanLyDatVe/LayDanhSachPhongVe",{params} );
  },
 thongtindatphongVe: (id) => {
    const params = { MaLichChieu: "id"};
		return axiosClient.get("QuanLyDatVe/DatVe",{params} );
  },
  
};

export default datveAPI;