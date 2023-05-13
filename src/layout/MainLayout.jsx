import { Box } from "@mui/material";
import { useRoutes } from "react-router-dom";
import { routerConfig } from "../router";

const MainLayout = () => {
  const routes = useRoutes(routerConfig);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
      }}
    >
      {routes}
    </Box>
  );
};

export default MainLayout;
