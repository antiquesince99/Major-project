import React from 'react'
import Grid from '@mui/material/Grid'

const Customizer = () => {
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
        <Grid container  style={{height:"100vh", width:"100vw"}}>
            <Grid md={2} bgcolor="violet">
                1
            </Grid>
            <Grid md={8} bgcolor="red">
                2
            </Grid>
            <Grid md={2} bgcolor="purple"> 
                3
            </Grid>
            <Grid md={12}>
                4
            </Grid>
        </Grid>

    </div>
  )
}

export default Customizer