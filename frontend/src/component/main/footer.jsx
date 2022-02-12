import { Box, Container, Typography, Button } from '@mui/material';
import React from 'react';
// import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
// import { NavLink } from 'react-router-dom';
import RedditIcon from '@mui/icons-material/Reddit';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Container style={{display: 'flex', justifyContent:"space-between", padding: "25px" }}> 
    <Box><Typography variant="h5" color="initial">LOCATION</Typography>
    <div style={{display: 'flex', justifyContent:"center", flexDirection:"column" , marginTop:"20px"}}>Some Where in India </div>
    </Box>
    <Box>
    <Typography variant="h5" color="initial">AROUND THE WEB</Typography>
    <div style={{display: 'flex', justifyContent:"space-around", marginTop: "20px"}}>
    <YouTubeIcon></YouTubeIcon>
    <FacebookIcon></FacebookIcon>
    <RedditIcon></RedditIcon>
    </div>
  
    </Box>
    <Box><Typography variant="h5" color="initial">ABOUT</Typography></Box>
    </Container>
  )
};

export default Footer;
