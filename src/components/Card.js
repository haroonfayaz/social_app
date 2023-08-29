import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const CardComp = (props) => {
  const discountPercentage = props.disc;

  const textStyle = {
    fontWeight: 600,
    textDecoration: discountPercentage > 0 ? "line-through" : "none", // Apply line-through if discount > 0
  };

  return (
    <Box m={1}>
      <Card sx={{width: {xs:"90vw",sm:"90vw",md:345},height:'auto', background:"#FFF3DA"}}>
        <CardMedia
          component="img"
          alt="product"
          height="200"
          image={props.image}
        />
        <CardContent >
          <Typography variant="h6" sx={{fontWeight:900}}>
            {props.name}
          </Typography>
          <Typography variant="body2" sx={textStyle}>
          Discount {props.disc}%
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontWeight:600}}>
          {props.desc}
          </Typography>
        <CardActions>
          <Button variant="contained" size="small">${props.price}</Button>
          
          <Button variant="contained" size="small">Add to cart</Button>
        </CardActions>
        </CardContent>

      </Card>
    </Box>
  );
};

export default CardComp;
