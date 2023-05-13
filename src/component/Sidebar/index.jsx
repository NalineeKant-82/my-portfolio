import { Avatar, Box, IconButton, Typography } from "@mui/material";
import NalineeImage from "../../assets/Nalinee.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SideBar = () => {
  const navigate = useNavigate();
  const [sideBarColor, setSideBarColor] = useState({
    home: false,
    aboutme: false,
    whatIdo: false,
    resume: false,
    testimonial: false,
    contact: false,
  });

  const changeSideBarColor = (name) => {
    setSideBarColor({ [name]: true });
    navigate(name != "home" ? `/${name}` : "/");
  };
  return (
    <Box
      sx={{
        height: 1,
        width: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        // gap: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Avatar
          alt="no image to show"
          src={NalineeImage}
          sx={{ width: 0.6, height: 0.75 }}
        />
        <Typography variant="h3" sx={{ display: ["flex", "flex", "none"] }}>
          Nalinee Kant
        </Typography>
        <Typography variant="h5" sx={{ display: ["none", "none", "flex"] }}>
          Nalinee Kant Ranjan
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Typography
          onClick={() => changeSideBarColor("home")}
          variant="h6"
          color={sideBarColor.home ? "green" : "white"}
          sx={{ cursor: "pointer" }}
        >
          Home
        </Typography>
        <Typography
          onClick={() => changeSideBarColor("aboutme")}
          variant="h6"
          color={sideBarColor.aboutme ? "green" : "white"}
          sx={{ cursor: "pointer" }}
        >
          About me
        </Typography>
        <Typography
          onClick={() => changeSideBarColor("whatIdo")}
          variant="h6"
          color={sideBarColor.whatIdo ? "green" : "white"}
          sx={{ cursor: "pointer" }}
        >
          What I Do
        </Typography>
        <Typography
          onClick={() => changeSideBarColor("resume")}
          variant="h6"
          color={sideBarColor.resume ? "green" : "white"}
          sx={{ cursor: "pointer" }}
        >
          Resume
        </Typography>

        <Typography
          onClick={() => changeSideBarColor("testimonial")}
          variant="h6"
          color={sideBarColor.testimonial ? "green" : "white"}
          sx={{ cursor: "pointer" }}
        >
          Testimonial
        </Typography>
        <Typography
          onClick={() => changeSideBarColor("contact")}
          variant="h6"
          color={sideBarColor.contact ? "green" : "white"}
          sx={{ cursor: "pointer" }}
        >
          Contact
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
        }}
      >
        <IconButton>
          <LinkedInIcon />
        </IconButton>
        <IconButton>
          <TwitterIcon />
        </IconButton>
        <IconButton>
          <InstagramIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SideBar;
