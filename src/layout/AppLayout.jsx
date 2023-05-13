import { Box, Zoom } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import SideBar from "../component/Sidebar";

const AppLayout = () => {
  const enableSideBar = useSelector((state) => state.enableSideBar);
  return (
    <Box sx={{ height: 1, width: 1, display: "flex" }}>
      {enableSideBar && (
        <Zoom in={enableSideBar} style={{ transitionDelay: "50ms" }}>
          <Box
            sx={{
              height: "100%",
              width: "20%",
              minWidth: "300px",
              display: "flex",
              overflow: "auto",
            }}
          >
            <SideBar />
          </Box>
        </Zoom>
      )}
      <Box
        sx={{
          height: "100%",
          width: enableSideBar ? "80%" : "100%",
          minWidth: "300px",
          background: "#071b2f",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
