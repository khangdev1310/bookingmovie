import axios from 'axios';
import qs from "qs";


const axiosClient = axios.create({
    baseURL: "https://movie0706.cybersoft.edu.vn/api",
    paramsSerializer: (params) => qs.stringify(params, { skipNulls: true }),
});
axiosClient.interceptors.request.use(
    (config) => {
      // Xử lý trước khi request được gửi lên server
      // Thêm Authorization vào header
      const userInfo = localStorage.getItem("userInfo");
  
      if (userInfo) {
        const { accessToken } = JSON.parse(userInfo);
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
  
      return config;
    },
    (error) => {
      // Xử lý khi request bị lỗi
      return Promise.reject(error);
    }
  );
  axiosClient.interceptors.response.use(
    (response) => {
      // Xử lý kết quả trả về từ server
      return response;
    },
    (error) => {
      // Xử lý nếu kết quả trả về bị lỗi
      if(error.status === 401) {
        // Xử lý logout: clear localStorage, đẩy người dùng về trang login
      }
      if(error.status === 500) {
        // Xử lý thông báo cho người người server đang bị lỗi
        console.log('Sever đang lỗi');
      }
  
      return Promise.reject(error);
    }
  );
export default axiosClient