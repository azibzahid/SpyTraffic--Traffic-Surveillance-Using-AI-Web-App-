import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles';
import  {Button, Grid}  from '@material-ui/core';
import  Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { TextField,Select, MenuItem, InputLabel } from '@material-ui/core';
import v1 from './../../assets/v1.mp4';
import v2 from './../../assets/v2.mp4';
import v3 from './../../assets/v3.mp4';
import v4 from './../../assets/v4.mp4';



const useStyles = theme=>({
    root: {
     fontWeight: 'bold',
      padding: 5, 
    },
    product:
    {
        fontFamily:'Arial Bold',   
    }, 
    tf:{
        color:"secondary"
        
    },
    container:{
        marginTop:40,
        marginLeft:70,

    },
    btncont:{
        marginTop:40,
        marginLeft:140,
    },
    btn:{
        paddingTop:15,
        paddingBottom:15,
    },
    
    circle: {
        
        width: "70px",
        height: "70px",
        borderRadius: "50%",
        margin: "10px",
    }
  }); 
  
  
  class UserCont extends React.Component {
   

    constructor(props) {
      super(props);
      this.state = {
        index: -1,
        signals: ["Red", "Red", "Red", "Red"]
      };
  
      this.times = [];
      // Initialize array of random times between 1 second 
      // to 5 second
      
      for(let i = 0; i < 4; i++) {
        this.times.push(Math.floor(Math.random() * (20000 - 1000)) + 10000);
      }
      console.log(this.times);
      this.counter = 0;
    }
  
    componentDidMount() {
      console.log("Component Mounted");
      // Find element with max time in this.times array
      let index = this.times.indexOf(Math.max(...this.times));
  
      // Set color of the first element = Green
      let signals = this.state.signals;
      signals[index] = "Green";
  
      this.setState({
        index: index,
        signals: signals
      });
    }
  
    componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.counter === 4) return;
      let signals = this.state.signals;
      let index = this.state.index;
  
      setTimeout(() => {
        this.times[index] = -1;
  
        // Set current light to red
        signals[index] = "Red";
  
        // Find index of next longest duration traffic light
        index = this.times.indexOf(Math.max(...this.times));
  
        // Check if lights are exhausted
        if(this.times[index] !== -1)
          // Turn this light green
          signals[index] = "Green";
  
        // Keep this a condition to stop updating the state
        // of the componenet
        this.counter++;
  
        this.setState({
          index: index,
          signals: signals
        });
      }, this.times[index]);
  
      console.log("Component Updated");
     
    }
  
    render() {
        const { classes } = this.props;
      return (
        
          <>
          
          <Grid  align="center">
              <Grid item md="4" sm="12" >
                  <Box  mt={4} mb={4} boxShadow={1} className={classes.root} > 
                      <Typography className={classes.root}  variant="h5" gutterBottom align="center"  >Traffic Surviellance</Typography>
                  </Box>
              </Grid>
              
              </Grid>
              <Grid container direction="row"  align="center">
              <Grid item lg="3" md="3" sm="12" >
              {this.state.signals[0] == "Green"?  <div className={classes.circle} style={{ color: "white", background:"green"  }}>{this.state.signals[0]}</div> : <div className={classes.circle} style={{ color: "black", background:"red"}}>{this.state.signals[0]}</div>  }
                  <video  width="90%"  height="" controls="controls" autoplay="autoplay" loop="loop" src={v1}>
              </video>    
              </Grid>
              <Grid item lg="3" md="3" sm="12" >
              {this.state.signals[1] == "Green"?  <div className={classes.circle} style={{ color: "white", background:"green"  }}>{this.state.signals[1]}</div> : <div className={classes.circle} style={{ color: "black", background:"red"}}>{this.state.signals[1]}</div>  }
                  <video  width= "90%"  height="" controls="controls" autoplay="autoplay" loop="loop"  src={v2}>
              </video>    
              </Grid>
              <Grid item lg="3" md="3" sm="12" >
              {this.state.signals[2] == "Green"?  <div className={classes.circle} style={{ color: "white", background:"green"  }}>{this.state.signals[2]}</div> : <div className={classes.circle} style={{ color: "black", background:"red"}}>{this.state.signals[2]}</div>  }
                  <video  width="90%"  height="" controls="controls" autoplay="autoplay" loop="loop" src={v3}>
              </video>    
              </Grid>
              <Grid item lg="3" md="3" sm="12" >
              {this.state.signals[3] == "Green"?  <div className={classes.circle} style={{ color: "white", background:"green"  }}>{this.state.signals[3]}</div> : <div className={classes.circle} style={{ color: "black", background:"red"}}>{this.state.signals[3]}</div>  }
                  <video  width="90%"  height="" controls="controls" autoplay="autoplay" loop="loop" src={v4}>
              </video>    
              </Grid>
              </Grid>
              
         
          </>

      );
    }
  
  }

    
    
export default withStyles(useStyles) (UserCont);

