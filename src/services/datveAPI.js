import axiosClient from "./axiosClient";

const datveAPI = {
  danhsachphongVe: (maLichChieu) => {
    const params = { MaLichChieu: maLichChieu};
		return axiosClient.get("QuanLyDatVe/LayDanhSachPhongVe",{params} );
  },
 thongtindatphongVe: () => {
    
		return axiosClient.post("QuanLyDatVe/DatVe" );
  },
  
};

export default datveAPI;