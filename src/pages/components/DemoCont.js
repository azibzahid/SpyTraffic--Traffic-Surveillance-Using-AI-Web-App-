import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import  {Grid}  from '@material-ui/core';
import  Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import Video from './../../assets/f3.mp4';


const useStyles = makeStyles({
    root: {
     fontWeight: 'bold',
      padding: 5, 
    },
    product:
    {
        fontFamily:'Arial Bold',   
    }
  }); 
const DemoCont=()=> {
   const classes= useStyles();
    return (
        <>
        <Grid  align="center">
            <Grid item xs="6" lg="3"  >
                <Box mt={4} mb={4} flexWrap="wrap" boxShadow={1} className={classes.root} > 
                    <Typography  className={classes.root} variant="h4" gutterBottom align="center"  >Product Demo</Typography>
                </Box>
            </Grid>
            
            <video width="45%" height="525" controls src={Video}>
            </video>
            {console.log(Video)}

            </Grid>
       
        </>
    ) }
export default DemoCont