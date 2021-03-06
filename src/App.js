import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Adminlayout from "./layouts/Adminlayout";
import "./css/index.css";
import "./styles";

import Applayout from "./layouts/Applayout";

import DangNhap from "./pages/Signin";
import DangKy from "./pages/Singnup";
import Home from './pages/Home';



import LichChieuHome from "./pages/Lichchieu/lichchieuHome";
import Dashboard from "./pages/AdminApp/Dashboard";
import AdminRoute from "./Auth/AdminRoute";
import Detail from "./pages/MovieDetail";


import News from "./pages/News/index";
import PhongVe from './pages/phongve';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Route Admin */}
        <Redirect exact from="/admin" to="admin/dashboard" />
        <Route path="/admin">
          <Adminlayout>
            <Switch>
              <AdminRoute
                path="/admin/dashboard"
                render={(props) => <Dashboard {...props} route="dashboard" />}
              />
              <AdminRoute
                path="/admin/usermanagement"
                render={(props) => (
                  <Dashboard {...props} route="usermanagement" />
                )}
              />
              <AdminRoute
                path="/admin/filmmanagement"
                render={(props) => (
                  <Dashboard {...props} route="filmmanagement" />
                )}
              />
            </Switch>
          </Adminlayout>
        </Route>
        <Route path="/admin-dangnhap">
          <DangNhap />
        </Route>

        
         <Route path="/phongve">
           <PhongVe/>
           </Route>         
        <Route path="/signin">
          <DangNhap />
        </Route>

        <Route path="/signup">
          <DangKy />
        </Route>

        <Route path="/lichchieu">
          <LichChieuHome />
        </Route>
        <Route path="/">
          <Applayout>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/movie/:id">
                <Detail />
              </Route>
            </Switch>

           
            
            {/* <News />  */}
            

          </Applayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
