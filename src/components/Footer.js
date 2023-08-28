import { Box, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material/";

const SocialBox = styled(Box)({
  display: "flex",
  gap: 10,
  color: "white",
});

const Footer = () => {
  return (
    <Box sx={{ background: "black", height: "300px" }} mt={3}>
      <Stack direction={{ xs: "row", md: "row" }} p={7}>
        <Box flex={5}>
          <Typography sx={{ fontSize: { xs: 20, sm: 30, md: 40 },textDecoration: "underline" }} variant="h4" color={"white"} align={"center"}>
            Contact Us
          </Typography>
          <Typography sx={{ fontSize: { xs: 15, sm: 18, md: 25 }}} variant="body1" color={"white"} align={"center"}>
                Roop mahal prem galli
          </Typography>
          <Typography sx={{ fontSize: { xs: 15, sm: 18, md: 25 }}} variant="body2" color={"white"} align={"center"}>
                Kholi Number 420
          </Typography>

        </Box>
       
        <Box flex={5}>
          <Typography  sx={{ fontSize: { xs: 20, sm: 30, md: 40 },textDecoration: "underline" }} variant="h4" color={"white"} align={"center"}>
            Categories
          </Typography>
          <Typography  sx={{ fontSize: { xs: 15, sm: 20, md: 25 }}} color={"white"} variant={"body2"} align={"center"}>
            Kids
          </Typography>
          <Typography  sx={{ fontSize: { xs: 15, sm: 20, md: 25 }}} color={"white"} variant={"body2"} align={"center"}>
            Women
          </Typography>
          <Typography sx={{ fontSize: { xs: 15, sm: 20, md: 25 }}}color={"white"} variant={"body2"} align={"center"}>
            Men
          </Typography>
        </Box>
        <Box >
          <Typography sx={{textDecoration: "underline" }} variant="h6" color={"white"} align={"center"}>
            Follow Us
          </Typography>
          <SocialBox>
            <Facebook />
            <Instagram />
            <Twitter />
          </SocialBox>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
