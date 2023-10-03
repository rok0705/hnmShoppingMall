import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./pages/ProductAll";
import LoginPage from "./pages/LoginPage";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import PrivateRoute from "./route/PrivateRoute";

// roadmap
//
// 1. main page : show all products
//
// 2. login page :
// a. click login button, navigate to login page
// b. click product detail page, if no login, navigate to login page
// c. on login, show product detail page
//
// 3. product detail page
// a. on click logout button, do logout
// b. on logout, cannot see product detail. show login page.
//
// 4. on login, show logout button. and vice versa.
//
// 5.  product searchable from main page

function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    console.log("useeffect: loginStatus:", loginStatus);
  }, [loginStatus]);

  return (
    <div>
      <NavBar
        loginStatus={loginStatus}
        setLoginStatus={setLoginStatus}
      ></NavBar>
      <Routes>
        <Route path="/" element={<ProductAll />}></Route>
        <Route
          path="/login"
          element={<LoginPage setLogin={setLoginStatus} />}
        ></Route>
        <Route path="/products/:id" element={<PrivateRoute />}></Route>
      </Routes>
    </div>
  );
}

export default App;
