import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logoImg from './../../assets/logo.png'
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    maxWidth: 130
  },
}));

const ButtonAppBar= props => {
  const classes = useStyles();
  const { history } = props;
  const handleClick=(pageURL)=>{
    history.push(pageURL);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color='theme.pallete.background' elevation={0}>
        <Toolbar>
          <Grid container spacing={24} justify='space-between' alignItems='center'>
            <Grid item xs={1}>
              <img src={logoImg} alt="logo" className={classes.title} />
            </Grid>
            <Grid item xs={7}>
              <div>
                <Button raised color="accent" onClick={() => handleClick('/')} >
                  <Typography color="primary">
                    Home
                  </Typography>
                </Button>
                <Button raised color="accent"  onClick={() => handleClick('/Features')}>
                  <Typography color="primary">
                    Product Features
                  </Typography>
                </Button>

                <Button raised color="accent"  onClick={() => handleClick('/Demo')}>
                  <Typography color="primary">
                    Request a Demo
                  </Typography>
                </Button>

                <Button raised color="accent"  onClick={() => handleClick('/Dash')}>
                  <Typography color="primary">
                    Admin Dashboard
                  </Typography>
                </Button>

                 
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(ButtonAppBar);
