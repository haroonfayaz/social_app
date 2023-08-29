import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  InputBase,
  Menu,
  Toolbar,
  Typography,
  styled,
} from "@mui/material/";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const navigate = useNavigate();

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
  });
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
  });
  const SearchBox = styled(Box)({
    display: "flex",
    gap: 5,
    borderRadius: 5,
  });

  const Menuitems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
    { name: "Products", path: "/products" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <AppBar sx={{ background: "black" }} position="sticky">
      <StyledToolbar>
        <SocialBox>
          <FacebookIcon />
          <InstagramIcon />
          <WhatsAppIcon />
        </SocialBox>

        <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          {Menuitems.map((items, i) => {
            return (
              <Typography
                variant="h6"
                sx={{ cursor: "pointer" }}
                key={i}
                onClick={() => navigate(items.path)}
              >
                {items.name}
              </Typography>
            );
          })}
        </MenuBox>
        <SearchBox>
          <InputBase
            placeholder="Search..."
            sx={{ background: "white", borderRadius: 2, paddingLeft: 1 }}
          />
        </SearchBox>
        <MenuIcon
          sx={{
            color: "white",
            display: { xs: "block", sm: "block", md: "none" },
            fontSize: "large",
          }}
          onClick={() => setOpen(true)}
        />
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box sx={{ width: 300, height: "90vh" }}>
          <Box m={2}>
            {Menuitems.map((items, i) => {
              return (
                <Typography
                  variant="h6"
                  sx={{ cursor: "pointer" }}
                  key={i}
                  onClick={() => navigate(items.path)}
                >
                  {items.name}
                </Typography>
              );
            })}
          </Box>
        </Box>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
