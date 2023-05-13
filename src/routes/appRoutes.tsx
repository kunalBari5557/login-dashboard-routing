import { RouteType } from "./config";
import DefaultPage from "../pages/dashboard/DefaultPage";
import Error from "../pages/error/Error";
import Users from "../pages/users/Users";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Login from "../pages/login/login";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <DefaultPage />,
    state: "dashboard"
  },
  {
    path: "/dashboard",
    element: <DefaultPage />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardIcon />
    }
  },
  {
    path: "/error",
    element: <Error />,
    state: "error",
    sidebarProps: {
      displayText: "Error",
      icon: <ErrorOutlineIcon />
    }
  },
  {
    path: "/users",
    element: <Users />,
    state: "users",
    sidebarProps: {
      displayText: "Users",
      icon: <GroupAddIcon />
    }
  },
];

export const authData = [
  {
      path: '/',
      element: <Login />,
      state: "login",
  },
]

export default appRoutes;

