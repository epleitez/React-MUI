import React from "react";
import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material";

const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia 
          component="img"
          height="140"
          image='https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60'
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can change data without reloading the page. Its key feature is the ability to build reusable UI components.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
          <Button size="small" color="secondary">
            Share
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
