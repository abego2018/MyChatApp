import React from "react";
import { Typography, Box, Container } from "@mui/material";

function Contacts() {
  return (
    <Container>
      <Box>
        <Typography variant="h5">Here is my list of contacts</Typography>
      </Box>
      <Box>
        <List>
          <ListItem>Contact one</ListItem>
          <ListItem>Contact Two</ListItem>
          <ListItem>Contact Three</ListItem>
          <ListItem>Contact Four</ListItem>
        </List>
      </Box>
    </Container>
  );
}

export default Contacts;
