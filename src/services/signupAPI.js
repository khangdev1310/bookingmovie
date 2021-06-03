import axiosClient from './axiosClient'

const signupAPI = {
    getsignupAPI:() => {
        return axiosClient.get("/QuanLyNguoiDung/DangKy");
    }
    
}

export default coursesAPI
