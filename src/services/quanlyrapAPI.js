import axiosClient from "../services/axiosClient";
const quanlyrapAPI = {
	hethongRap: () => {
		
		return axiosClient.get("/QuanLyRap/LayThongTinHeThongRap");
	},
	lichchieuhethongRap: (category) => {
		const params = { maHeThongRap: category, MaNhom: "GP12" };
		return axiosClient.get("/QuanLyRap/LayThongTinLichChieuHeThongRap", {
			params,
		});
	},
    cumraptheohethongRap: (category1) => {
		const params = { maHeThongRap: category1 };
		return axiosClient.get("/QuanLyRap/LayThongTinCumRapTheoHeThong", {params});
	},
    lichchieuPhim: (category2) => {
        const params = { maPhim: category2 };
		return axiosClient.get("/QuanLyRap/LayThongTinLichChieuPhim", {params});
    }
};
export default quanlyrapAPI;
/*
    cach xai
    import coursesApi from "...."
    const {data} = await coursesApi.getCourses()
**/