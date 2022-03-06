import { Box, Container, Typography, Grid } from "@mui/material";
import React from "react";
// import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
// import { NavLink } from 'react-router-dom';
import RedditIcon from "@mui/icons-material/Reddit";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
// import TwitterIcon from "@mui/icons-material/Twitter";
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
const Footer = () => {
  return (
    <Container
      style={{   
        padding: "25px"
      }}
    >  
      <Box>
        <Grid container spacing={2} textAlign="center">
          <Grid item xs={4}  md={4} bgcolor="red">
            About
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis magnam natus provident, alias est iure omnis optio culpa incidunt deleniti explicabo, molestiae illo, officia tempore ad nemo porro. Nemo, reiciendis.
            </p>
          </Grid>
          <Grid item xs={4} md={4} bgcolor="blue">
            Contact
            <div style={{display:"flex", padding:"15px", justifyContent:"space-evenly"}}>
              <FacebookIcon></FacebookIcon>
              <YouTubeIcon></YouTubeIcon>
              <RedditIcon></RedditIcon>
              <TwitterIcon></TwitterIcon>
              <GoogleIcon></GoogleIcon>
            </div>
          </Grid>
          <Grid item xs={4}  md={4} bgcolor="blueviolet">
            Location
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, vel. Minus itaque pariatur incidunt sunt nulla magnam aperiam inventore ad. Atque placeat magnam et excepturi architecto vel rerum ab maiores?
            </p>
          </Grid> 
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
