import axiosClient from "../services/axiosClient";
const quanlyrapAPI = {
	hethongRap: () => {
		
		return axiosClient.get("/QuanLyRap/LayThongTinHeThongRap");
	},
	lichchieuhethongRap: (category) => {
		const params = { maHeThongRap: category, MaNhom: "GP12" };
		return axiosClient.get("/QuanLyRap/LayThongTinLichChieuHeThongRap", {params});
	},
    cumraptheohethongRap: (maHeThongRap) => {
		const params = { maHeThongRap };
		return axiosClient.get("/QuanLyRap/LayThongTinCumRapTheoHeThong", {params});
	},
    
};
export default quanlyrapAPI;
/*
    cach xai
    import coursesApi from "...."
    const {data} = await coursesApi.getCourses()
**/