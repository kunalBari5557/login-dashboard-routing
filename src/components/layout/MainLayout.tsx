import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";
import { useState } from "react";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {sidebarOpen && (
        <Box
          component="nav"
          sx={{
            width: sizeConfigs.sidebar.width,
            flexShrink: 0,
            display: { xs: "none", md: "block" },
          }}
        >
          <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Box>
      )}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: sidebarOpen
            ? `calc(100% - ${sizeConfigs.sidebar.width})`
            : "100%",
          minHeight: "100vh",
          backgroundColor: colorConfigs.mainBg,
        }}
      >
        <Topbar toggleSidebar={toggleSidebar} sidebarOpen={false} />

        <Toolbar />
        <Outlet />
      </Box>
      {sidebarOpen && (
        <Box
          component="nav"
          sx={{
            width: "100%",
            display: { xs: "block", md: "none" },
            position: "fixed",
            bottom: 0,
            zIndex: 100,
          }}
        >
          <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Box>
      )}
    </Box>
  );
};

export default MainLayout;
