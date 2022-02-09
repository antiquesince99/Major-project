import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
// import { makeStyles } from '@mui/material';

// import styled from '@emotion/styled/types/base';
// import Box from '@mui/material/Box';

const pages = ['Home','Login','About'];

const Header = () => {
  // const classes = useStyle();   

  return (
    <>
    <AppBar position="static">
      <Container maxWidth="">
      <Toolbar style={{display : 'flex' , justifyContent: "space-between" , alignItems: "center"}}>
        <Typography variant="h5">MerchMaker</Typography>
        <div style={{display: 'flex', justifyContent: "space-evenly", width: "20%"}}>
          {pages.map((page)=>(<Button variant='contained'>{page}</Button>))}
        </div>
        <div>profile</div>
      </Toolbar>
      </Container>
    </AppBar>
    </>
  )
};

export default Header;
