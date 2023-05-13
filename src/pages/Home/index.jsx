import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import ZoomTransition from "../../component/ZoomTransition";

const Home = () => {
  const storeValue = useSelector((state) => state.enableSideBar);
  const dispatch = useDispatch();

  const openSideBar = () => {
    dispatch({ type: "enableSideNar" });
    localStorage.setItem("enableSideNar", storeValue);
  };
  console.log(storeValue);
  return (
    <Box sx={{ height: 1, width: 1 }}>
      <Box
        sx={{
          height: 1,
          width: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            width: 1,
          }}
        >
          <ZoomTransition text="Welcome" delay={0} />
          <ZoomTransition text={`I'm Nalinee Kant Ranjan`} delay={200} />
          <ZoomTransition
            text="Based in Bangalore,india"
            gap={1}
            variant="h5"
            delay={250}
          />
          <ZoomTransition delay={600}>
            <Button
              sx={{ borderRadius: "20px", width: "150px" }}
              variant="outlined"
              onClick={openSideBar}
            >
              Hire me
            </Button>
          </ZoomTransition>
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
