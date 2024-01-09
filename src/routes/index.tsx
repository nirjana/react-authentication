import { Route, Routes } from "react-router-dom";
import App from "../App";
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login";
import "../styles/_index.scss";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signin" element={<App/>} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Router;
