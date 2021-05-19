import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Link} from '@material-ui/core';
import { MenuItem, MenuList } from '@material-ui/core';
import { Box} from '@material-ui/core';
import { Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import BmIcon from '@material-ui/icons/BookmarksOutlined';
import HelpCenterIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';
import Spy from './../../assets/mlogo.PNG';
import {withRouter} from 'react-router-dom';

const useStyles=makeStyles({
sideNav:{
  height:'100vh',
  background:'Black',
  color:'white',
  
},
img:
{
  flexGrow:1,
  maxWidth: 200,
  objectFit: 'cover',

},
icon:{
  color: "#9e9e9e",
 paddingTop:10,
 paddingBottom:10,
 marginRight:10,

}

})

const SideNav=props=> {
  const {history} = props;
  const handleClick=(pURL)=>{
    history.push(pURL)
  } 
     const classes=useStyles();

      return(
        <>
          <div className={classes.sideNav}>
           <Grid container direction="column">  
           <Grid item >
           <img src={Spy}  className={classes.img} ></img>
           </Grid>
           <Grid item>  
           <MenuList>
          <MenuItem onClick={()=>handleClick('/User')} ><Box className={classes.icon }>  <HomeIcon /> </Box>Home</MenuItem>
          <MenuItem><Box className={classes.icon}>  <BmIcon/> </Box>Saved Locations</MenuItem>
          <MenuItem><Box className={classes.icon}>  <HelpCenterIcon/> </Box>Help Center</MenuItem>
          <MenuItem onClick={()=>handleClick('/Settings')}><Button><Box className={classes.icon}><SettingsIcon/> </Box></Button>Settings </MenuItem>

        </MenuList>
           </Grid>
           </Grid>
          </div>
 
                 </>
            );
       
           

}

export default withRouter(SideNav);