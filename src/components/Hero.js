import { Box, Typography } from "@mui/material";
import React from "react";
import HeroImage from "../static/HeroImage.jpg";
import Categories from "./Categories";

const Hero = () => {
  return (
    <Box>
      <Typography
        variant="h3"
        align="center"
        mt={2}
        sx={{ fontWeight: 900, fontSize: { xs: 30, sm: 50, md: 70 } }}
      >
        Fashions<b style={{ color: "red" }}>Blog</b>
      </Typography>
      <Typography
        variant="body1"
        align="center"
        mb={1}
        sx={{ fontWeight: 200 }}
      >
        We Make the Best of you
      </Typography>
      <Box
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backgroundRepeat: "no repeat",
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 600,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "40%" },
            padding: { xs: 3, sm: 2, md: 5 },
          }}
        >
          <Box sx={{ background: "white", opacity: "0.8" }}>
            <Typography variant="h5" align="center" color="red" pt={8} pb={3}>
              Trending Styles
            </Typography>
            <Typography variant="h4" align="center" sx={{ fontSize: { xs: 20, sm: 30, md: 40 }}}>
              Life is Boring without Fashion!
            </Typography>
            <Typography variant="body1" align="center" pb={5}>
              we love to change your style 
            </Typography>
          </Box>
        </Box>
      </Box>
      <Categories/>
    </Box>
  );
};

export default Hero;
