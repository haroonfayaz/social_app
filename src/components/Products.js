import React from "react";
import Card from "./Card";
import image1 from "../static/image1.jpg";
import image2 from "../static/image2.jpg";
import image3 from "../static/image3.jpg";
import image4 from "../static/image4.jpg";
import image5 from "../static/image5.jpg";
import { Box } from "@mui/material";

const data = [
  {
    name: "Mens",
    image: image1,
    price: 220,
  },
  {
    name: "Watches",
    image: image2,
    price: 1120,
  },
  {
    name: "Perfumes",
    image: image3,
    price: 3220,
  },
  {
    name: "Kids Top",
    image: image4,
    price: 2202,
  },
  {
    name: "Womens",
    image: image5,
    price: 5520,
  },
];
const Products = () => {
  return (
    <Box sx={{ background: "#C3EDC0" }}>
      <Box
        sx={{
          display: { xs: "block", sm: "block", md: "grid" },
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {data.map((items, i) => {
          console.log(items);
          return (
            <Card
              key={i}
              image={items.image}
              name={items.name}
              price={items.price}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Products;
