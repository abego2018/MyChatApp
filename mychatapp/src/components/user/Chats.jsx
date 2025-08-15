import React from "react";
import { Typography, Box, Container, ListItem } from "@mui/material";

function Chats() {
  return (
    <Container>
      <Box>
        <Typography>List of active chats here</Typography>
      </Box>
      <Box>
        <ListItem>Chat 1</ListItem>
        <ListItem>Chat 2</ListItem>
        <ListItem>Chat 3</ListItem>
        <ListItem>Chat 4</ListItem>
      </Box>
    </Container>
  );
}

export default Chats;
