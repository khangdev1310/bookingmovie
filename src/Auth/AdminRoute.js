import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {Redirect,Route} from 'react-router-dom'
export default function AdminRoute({child,...props}) {

    const { userInfo, isLoading, error } = useSelector((state) => state.signReducer);
    if(!userInfo){
        return <Redirect to={`/dangnhap`}/>
    }
    

    if(userInfo.maLoaiNguoiDung !== "QuanTri"){
        return <Redirect to="/"/>
    }

    return <Route {...props}>{child}</Route>
}
