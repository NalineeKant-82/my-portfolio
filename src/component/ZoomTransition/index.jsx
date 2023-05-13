/* eslint-disable react/prop-types */
import { Box, Typography, Zoom } from "@mui/material";

const ZoomTransition = ({
  text = [],
  delay = 0,
  sx = {},
  variant = "h1",
  splitBy = " ",
  children,
  gap = 2,
}) => {
  if (children) {
    return (
      <Zoom in={true} style={{ transitionDelay: `${delay}ms` }}>
        {children}
      </Zoom>
    );
  }
  return (
    <Box sx={{ display: "flex", gap }}>
      {text?.split(splitBy).map((item, index) => (
        <Zoom
          key={index}
          in={true}
          style={{ transitionDelay: `${delay * (index + 2)}ms` }}
        >
          <Typography sx={sx} variant={variant}>
            {item}
          </Typography>
        </Zoom>
      ))}
    </Box>
  );
};

export default ZoomTransition;
