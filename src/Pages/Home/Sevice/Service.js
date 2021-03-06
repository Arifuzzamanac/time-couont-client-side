import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Service = (props) => {
  const {_id, name, price, img} = props.product;
  
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ maxwidth: 345, backgroundColor: '#0b142c'}}>
      <CardMedia
        component="img"
        style={{width:'100%', height:'250px', objectFit:'contain', marginTop:'15px'}}
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="h5" component="div" color="#000000">
          {name}
        </Typography>
        <Typography variant="h6" component="div" color="#808080">
          Price: ${price}
        </Typography>
      </CardContent>
      <CardActions style={{display: "block",alignItem:"center"}}>
      <Link style={{textDecoration:"none", color:"rgb(243, 224, 202)"}} to={`/productDetails/${_id}`}>
        <Button size="large">Details</Button>
        </Link>
      </CardActions>
    </Card>
    </Grid>
  );
};

export default Service;