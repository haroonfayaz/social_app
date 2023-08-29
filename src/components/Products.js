import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Box } from "@mui/material";
import axios from 'axios';



const Products = () => {
  const [products,setProducts]=useState([]);

  const  getAllProducts= async()=> {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
      console.log(products)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    getAllProducts();
}, []);
  return (

    <Box  sx={{
          flexGrow: 1,
          padding: "20px",
          background: "#C3EDC0",
        }}>
      <Box
        sx={{
          display: { xs: "block", sm: "block", md: "grid" },
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {products.map((items) => {
          return (
            <Card
              key={items.id}
              image={items.thumbnail}
              name={items.title}
              price={items.price}
              desc={items.description}
              disc={items.discountPercentage}
            />
          );
        })}
      </Box>

    </Box>

  );
};

export default Products;
