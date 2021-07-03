import axiosClient from "../services/axiosClient";
const coursesApi = {
	MovieList: () => {
		const params = { MaNhom: "GP12" };
		return axiosClient.get("/QuanLyPhim/LayDanhSachPhim",{params} );
	},
	
};
export default coursesApi;
/*
    cach xai
    import coursesApi from "...."
    const {data} = await coursesApi.getCourses()
**/