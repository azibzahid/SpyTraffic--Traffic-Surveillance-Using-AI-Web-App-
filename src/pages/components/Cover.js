import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import cover from './../../assets/cover.jpeg'
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import {withRouter} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  img: {
    width: '100%',
    height: '85vh',
    objectFit: 'cover',
    borderTopLeftRadius: 180,
    borderBottomLeftRadius: 1500,
    borderBottomRightRadius: 250,
  },
  text: {
    paddingLeft: '50px',
    paddingTop: '20px',
    // verticalAlign: 'middle',
    alignItems: 'center',
    // justifyContent: 'center',
    verticalAlign: 'middle',
  },
  button: {
      borderRadius: 100,
  },
  icon: {
      padding: '10px',
  },
}));

const SpacingGrid= props=> {
  const {history} = props;
  const handleClick=(pURL)=>{
    history.push(pURL)
  }

  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (

    <Grid container className={classes.root} spacing={0}>
        <Grid item xs={12} sm={6}>
            <div style={{align:'center'}}>
                    <Grid container justify='left' alignItems='center'>
                    <paper className={classes.text} >
                        <Typography component="div" className={classes.text} alignItems='center'>
                            <Box textAlign="left" color='primary' m={1} fontWeight="fontWeightBold" fontSize="h2.fontSize">
                                <Typography variant="h2" component="h2" color="primary" fontWeight="fontWeightBold">
                                    Traffic Surviellance
                                </Typography>
                                
                            </Box>
                            <Box textAlign="left" m={1} fontWeight="fontWeightBold" fontSize="h2.fontSize" >
                                Using
                            </Box>
                            <Box textAlign="left" m={1} fontWeight="fontWeightBold" fontSize="h2.fontSize">
                               AI 
                            </Box>
                            <Button onClick={()=>handleClick('/Demo')} variant="contained" color="primary" className= {classes.button}>
                                Request a Demo
                            </Button>
                            <br/>
                            <FacebookIcon color="primary" className={classes.icon}></FacebookIcon>
                            <TwitterIcon color="primary" className={classes.icon}></TwitterIcon>
                            <InstagramIcon color="primary" className={classes.icon}></InstagramIcon>
                        </Typography>
                        </paper>
                    </Grid>
            </div>
                
        </Grid>
        <Grid item xs={12} sm={6} >
            <img src={cover} alt='cover' className={classes.img}></img>
        </Grid>
    </Grid>

  );
}

export default withRouter(SpacingGrid);