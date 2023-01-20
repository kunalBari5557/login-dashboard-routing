import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import { routes } from "../../routes";
import Login from "../../pages/login/login";
import DefaultPage from "../../pages/dashboard/DefaultPage";

function MainRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                {/* <Route path="/" element={<MainLayout />} >
                    {routes}
                </Route > */}
                {/* <Route path="/dashboard" element={<DefaultPage />} /> */}
                {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default MainRoute;










