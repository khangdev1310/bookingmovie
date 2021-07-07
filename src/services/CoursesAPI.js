import id from "date-fns/locale/id/index.js";
import axiosClient from "../services/axiosClient";
const coursesApi = {
	MovieList: () => {
		const params = { MaNhom: "GP12" };
		return axiosClient.get("/QuanLyPhim/LayDanhSachPhim",{params} );
	},
	MovieDetail: (id) => {
		const params = { MaPhim: id };
		return axiosClient.get("/QuanLyPhim/LayThongTinPhim",{params} );
	},
}	
export default coursesApi;
/*
    cach xai
    import coursesApi from "...."
    const {data} = await coursesApi.getCourses()
**/