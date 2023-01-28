import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const CardBox = ({ item }) => {

  const { id, author, price, title, url, detail } = item;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="300" image={url} alt="green iguana"  sx={{ objectFit: "contain" }} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {detail}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add To Cart</Button>
      </CardActions>
    </Card>
  );
};

export default CardBox;
