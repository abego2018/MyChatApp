import React from "react";
import { Container, Box, Typography, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

function Features() {
  var items = [
    {
      name: "Box Item 1",
      description: "This is your.",
    },
    {
      name: "Box Item 2",
      description: "Chance to get .",
    },
    {
      name: "Box Item 3",
      description: "In on the game",
    },
    {
      name: "Box Item 4",
      description: "Jpin the app",
    },
    {
      name: "Box Item 5",
      description: "Start your safe chat",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(items) {
  return (
    <Paper>
      <Box sx={{ p: 2, textAlign: "center" }}>
        <Typography variant="h5" component="div" gutterBottom>
          {items.item.name}
        </Typography>
        <Typography variant="body1">{items.item.description}</Typography>
      </Box>
    </Paper>
  );
}

export default Features;
