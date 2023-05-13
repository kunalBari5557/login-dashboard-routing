import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Toolbar, Typography } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import { useState } from "react";

interface TopbarProps {
  toggleSidebar: () => void;
  sidebarOpen: boolean;
}

const Topbar = ({ toggleSidebar, sidebarOpen }: TopbarProps) => {
  const [active, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!active);
    document.documentElement.classList.toggle("cm_overflow");
    toggleSidebar();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: sidebarOpen
          ? `calc(100% - ${sizeConfigs.sidebar.width})`
          : "100%",
        marginLeft: sidebarOpen ? sizeConfigs.sidebar.width : 0,
        boxShadow: "unset",
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color,
      }}
    >
      {/* <Toolbar sx={{ml:"18rem"}}>
        <MenuIcon className="menu_block" onClick={toggleClass} />
        <Typography variant="h6">
          React sidebar with dropdown
        </Typography>
      </Toolbar> */}
      {sidebarOpen ? (
        <Toolbar>
          <MenuIcon
            sx={{ justifyContent: "flex-start" }}
            className="menu_block"
            onClick={toggleClass}
          />
          <Typography variant="h6">React sidebar with dropdown</Typography>
        </Toolbar>
      ) : (
        <Toolbar sx={{ ml: "18rem" }}>
          <MenuIcon className="menu_block" onClick={toggleClass} />
          <Typography variant="h6">React sidebar with dropdown</Typography>
        </Toolbar>
      )}
    </AppBar>
  );
};

export default Topbar;
