import { Navigate, Route,Routes } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import Login from "../../pages/login/login";
import DefaultPage from "../../pages/dashboard/DefaultPage";

type PublicRouteProps = {
  path: string;
  element: React.ReactNode;
};

type PrivateRouteProps = {
  path: string;
  element: React.ReactNode;
};

export const PublicRoutes=()=> {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    );
  }
  
  export const PrivateRoutes=()=> {
    return (
      <Routes>
        <Route path="/" element={<DefaultPage />} />
      </Routes>
    );
  }