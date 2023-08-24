import { Box, Stack, styled, Typography } from "@mui/material";
import React from "react";
import kidsimage from "../static/kids.jpg";
import mensimage from "../static/men.jpg";
import womenimage from "../static/women.jpg";

const StyledBox = styled(Box)({
  height: 200,
  width: "100%",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
});
const StyledTypography = styled(Typography)({
  margin: "25% 50px 25% 50px",
  background: "white",
  opacity: "0.8",
});

const Categories = () => {
  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        mt={5}
      >
        <StyledBox sx={{ backgroundImage: `url(${kidsimage})` }}>
          <StyledTypography align="center" variant="h3">
            Kids
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${mensimage})` }}>
          <StyledTypography align="center" variant="h3">
            Men
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${womenimage})` }}>
          <StyledTypography align="center" variant="h3">
            Women
          </StyledTypography>
        </StyledBox>
      </Stack>
    </Box>
  );
};

export default Categories;
