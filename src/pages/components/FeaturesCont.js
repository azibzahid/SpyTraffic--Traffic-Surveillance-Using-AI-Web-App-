import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import  {Grid}  from '@material-ui/core';
import  Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

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
export default function FeaturesCont() {
   const classes= useStyles();
    return (
        <>
        <Grid  align="center">
            <Grid item xs="6" lg="4"   >
                <Box mt={4} mb={4} flexWrap="wrap" boxShadow={1} className={classes.root} > 
                    <Typography  className={classes.root} variant="h4" gutterBottom align="center"  >Our Product Features</Typography>
                </Box>
            </Grid>
            </Grid>
       
        </>
    

    );
}

