import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
<<<<<<< HEAD
import Adminlayout from "./layouts/Adminlayout";
import "./styles";
import Footer from "./components/Footer/index";
=======
import Adminlayout from './layouts/Adminlayout';
import Applayout from "./layouts/Applayout";
import './styles';
>>>>>>> 6f94f8a1a4668a91f80890795f2e22be62ed4d20

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Route Admin */}

        <Route path="/admin">
          <Adminlayout>
            {/* <Switch>
                <Redirect exact from="/admin" to="/admin/courses" />
                <Route path="/admin/courses">
                  <AdminCourses />
                </Route>
                <Route path="/admin/users">
                  <AdminUsers />
                </Route>
              </Switch> */}
<<<<<<< HEAD
          </Adminlayout>
        </Route>
        <Route path="/">
          <Footer />
        </Route>
        {/* Route Main */}
        {/* <Route path="/">
=======
            </Adminlayout>
          </Route>
          {/* Route Main */}
        <Route path="/">
>>>>>>> 6f94f8a1a4668a91f80890795f2e22be62ed4d20
         
          
          <Applayout >
            {/* <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/courses/:category">
                <Coursess />
              </Route>
              <Route path="/course/:courseId">
                <Course />
              </Route>
            </Switch> */}
          </Applayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
