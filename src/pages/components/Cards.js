import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import  Box from '@material-ui/core/Box';
import  {Container, Grid, requirePropFactory}  from '@material-ui/core';
import Signal from './../../assets/Signal.PNG';
import Vol from './../../assets/Vol.jpg';
import Cat from './../../assets/Cat.png';
import violations from './../../assets/violations.PNG';
import {useState} from 'react';

const useStyles = makeStyles({
  root: {
    marginLeft:10,
  },
  media: {
    height: 245,
  },
  title:
    { 
        textAlign:'center',
        fontWeight:'Bold',
        marginTop:15,

    },

   button: {

   paddingTop:10,
   paddingBottom:10,
    paddingLeft:30,
   paddingRight:30,
   marginBottom:12

   },
 
});


export default function MediaCard() {
  const classes = useStyles();
  const [readMore_1,setReadMore_1]=useState(false);
  const [readMore_2,setReadMore_2]=useState(false);
  const [readMore_3,setReadMore_3]=useState(false);
  const [readMore_4,setReadMore_4]=useState(false);
  const extraContent1=  
  
    <div>
     
      <Typography  className="extra-content2" variant="body1" color="textSecondary" align="center" >
      Each signal at the intersection of roads is alloted time slot 
      considering the traffic on ground. The signal side with more traffic
      is alotted with relatively higher time.
      </Typography>
      
  </div>
    const extraContent2=  
  
    <div>
     
      <Typography  className="extra-content2" variant="body1" color="textSecondary" align="center" >
      The analyser counts the number of vehicles in each categeory 
      which are detected, which in turn helps calculating the overall volume of 
      the traffic in each lane.
      </Typography>
      
  </div>
    const extraContent3=  
  
    <div>
     
      <Typography  className="extra-content2" variant="body1" color="textSecondary" align="center" >
      The categorization purely targets the type of vehicles in Pakistan.
      These vehicles are categorized into four groups that include 
      HTV, LTV, Rikshaw as well as Bike.
      </Typography>
      
  </div>
    const extraContent4=  
  
    <div>
     
      <Typography  className="extra-content2" variant="body1" color="textSecondary" align="center" >
      Voilations detector of the system analyzes different types of violations by vehicles
      on roads across the intersection of signal, such as signal breakage and lane assist. 
      </Typography>
      
  </div>
  
  const  linkName_1=readMore_1?'Show Less':'Learn More';
  const linkName_2=readMore_2?'Show Less':'Learn More';
  const linkName_3=readMore_3?'Show Less':'Learn More';
  const linkName_4=readMore_4?'Show Less':'Learn More';

  return (
    <>
    <Grid className= {classes.container} container direction="row"  >
      <Grid item item xs="12"  md="6" lg="3" >
      <Card className={classes.root} >
        <CardActionArea>  
          <CardMedia className={classes.img, classes.media}
            image={Signal}
            title="hello" 
          />
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom variant="h6">
              Adaptive Traffic Signals
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p" gutterBottom align="center">
              Signal timings adapt to traffic conditions  
            </Typography>
          </CardContent>
          <Box color="textSecondary">
              <a className="read-more-link" >  
              </a>
              {readMore_1 && extraContent1}
            </Box> 
          </CardActionArea>
            <CardActions> 
            <Box  ml={13}>
            
              <Button variant="contained" color="primary" className= {classes.button} onClick={()=>{setReadMore_1(!readMore_1)}}>
              {linkName_1}
              </Button>  
            </Box> 
          </CardActions>
      </Card>
      </Grid>
      <Grid item xs="12"  md="6" lg="3">
      <Card className={classes.root}>
        <CardActionArea>  
          <CardMedia className={classes.img, classes.media}
            image={Vol}
            title="hello" 
          />
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom variant="h6">
              Traffic Volume Analyzer
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p" gutterBottom align="center">
              Determing which lane needs more time
            </Typography>
            
          </CardContent>
            <Box color="textSecondary">
              <a className="read-more-link" >  
              </a>
              {readMore_2 && extraContent2}
            </Box> 
          </CardActionArea>
            <CardActions> 
            <Box  ml={13}>
            
              <Button variant="contained" color="primary" className= {classes.button} onClick={()=>{setReadMore_2(!readMore_2)}}>
              {linkName_2}
              </Button>  
            </Box> 
          </CardActions>               
      </Card>
      </Grid>
      <Grid item item xs="12"  md="6" lg="3">
      <Card className={classes.root}>
        <CardActionArea>  
          <CardMedia className={classes.img, classes.media}
            image={Cat}
            title="hello" 
          />
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom variant="h6">
             Traffic Categorizer
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p" gutterBottom align="center">
               Determining traffic type to prioritize 
            </Typography>
          </CardContent>
          <Box color="textSecondary">
        <a className="read-more-link" >  
            </a>
            {readMore_3 && extraContent3}
          </Box> 
        </CardActionArea>
        <CardActions> 
        <Box  ml={13}>
        
          <Button variant="contained" color="primary" className= {classes.button} onClick={()=>{setReadMore_3(!readMore_3)}}>
          {linkName_3}
          </Button>  
        </Box> 
        </CardActions>
      </Card>
      </Grid>
      <Grid item item xs="12"  md="6" lg="3">
      <Card className={classes.root}>
        <CardActionArea>  
          <CardMedia className={classes.img, classes.media}
            image={violations}
            title="hello" 
          />
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom variant="h6">
              Traffic Violations Detector
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p" gutterBottom align='center'>
              Determining lane and signal violations
            </Typography>
          </CardContent>
          <Box color="textSecondary">
              <a className="read-more-link" >  
              </a>
              {readMore_4 && extraContent4}
            </Box> 
          </CardActionArea>
            <CardActions> 
            <Box  ml={13}>
            
              <Button variant="contained" color="primary" className= {classes.button} onClick={()=>{setReadMore_4(!readMore_4)}}>
              {linkName_4}
              </Button>  
            </Box> 
          </CardActions>
      </Card>
      </Grid>
    </Grid>

    
   </>
  );
}
 