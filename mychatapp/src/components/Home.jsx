import React, { useState, useEffect } from "react";
import { Container, Box, Typography, Grid, Paper } from "@mui/material";
import Welcome from "./Welcome";
import Features from "./Features";
import AboutApp from "./AboutApp";
import ScrollToTopArrow from "./ScrollToTopArrow";
function Home() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        // Show arrow after scrolling 300px
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        style={{ minHeight: "100vh", padding: 16 }}
      >
        {/* Welcome */}
        <Grid item xs={12} style={{ width: "100%", maxWidth: 800 }}>
          <Paper style={{ padding: 20 }}>
            <Welcome />
          </Paper>
        </Grid>

        {/* About App */}
        <Grid
          id="aboutapp"
          item
          xs={12}
          style={{ width: "100%", maxWidth: 800 }}
        >
          <Paper style={{ padding: 20 }}>
            <AboutApp />
          </Paper>
        </Grid>

        {/* Features */}
        <Grid
          id="features"
          item
          xs={12}
          style={{ width: "100%", maxWidth: 800 }}
        >
          <Paper style={{ padding: 20 }}>
            <Features />
          </Paper>
        </Grid>

        {/* Sign-in/Sign up*/}
        <Grid id="signup" item xs={12} style={{ width: "100%", maxWidth: 800 }}>
          <Paper style={{ padding: 20 }}></Paper>
        </Grid>

        {/* Latest Updates */}
        <Grid id="latest" item xs={12} style={{ width: "100%", maxWidth: 800 }}>
          <Paper style={{ padding: 20 }}></Paper>
        </Grid>
      </Grid>
      {showArrow && (
        <Box
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: 24,
            left: 24,
            cursor: "pointer",
            zIndex: 9999,
          }}
        >
          <ScrollToTopArrow />
        </Box>
      )}
    </>
  );
}

export default Home;
