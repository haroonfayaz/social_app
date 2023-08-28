import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const CardComp = (props) => {
  return (
    <Box m={1}>
      <Card sx={{width: {xs:"90vw",sm:"90vw",md:345},height:300, background:"#FFF3DA"}}>
        <CardMedia
          component="img"
          alt="product"
          height="200"
          image={props.image}
        />
        <CardContent >
          <Typography variant="h5" sx={{fontWeight:900}}>
            {props.name}
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
