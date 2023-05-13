import { Avatar, Button, Drawer, List, Stack, Toolbar } from "@mui/material";
import assets from "../../assets";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";

interface SidebarProps {
  open: boolean;
  toggleSidebar: () => void;
}
const Sidebar = ({ open, toggleSidebar }: SidebarProps) => {
  const navigate = useNavigate();
  const Logout = (): void => {
    navigate("/");
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color,
        },
      }}
    >
      <List disablePadding>
        <Toolbar sx={{ marginBottom: "20px" }}>
          <Stack sx={{ width: "100%" }} direction="row" justifyContent="center">
            <Avatar src={assets.images.logo} />

            {/* <Assets /> */}
          </Stack>
        </Toolbar>
        {appRoutes.map(
          (route, index) =>
            route.sidebarProps && (
              <React.Fragment key={index}>
                {route.child ? (
                  <SidebarItemCollapse item={route} />
                ) : (
                  <SidebarItem item={route} />
                )}
              </React.Fragment>
            )
        )}
      </List>
      <Button
        onClick={Logout}
        sx={{
          marginTop: "auto",
          color: "white",
          fontWeight: "bold",
          backgroundColor: colorConfigs.sidebar.bg,
          "&:hover": {
            backgroundColor: colorConfigs.sidebar.hoverBg,
          },
        }}
        variant="contained"
        startIcon={<ExitToAppIcon />}
      >
        Logout
      </Button>
    </Drawer>
  );
};

export default Sidebar;
