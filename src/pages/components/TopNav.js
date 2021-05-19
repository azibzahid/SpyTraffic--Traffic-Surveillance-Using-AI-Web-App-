import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import LanguageIcon from '@material-ui/icons/Language';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Box } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { auth, db } from '../../firebase';
import { useHistory } from 'react-router';
import logoImg from './../../assets/logo.png'


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  
  },

 icons:{
     marginLeft:0,

 },
  title: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
  
  
    
    '&:hover': {
      
    },
    marginRight: theme.spacing(2),
    marginLeft: 5,
   
    [theme.breakpoints.up('md')]: {
     marginLeft: theme.spacing(0),
     
    },
  },
  
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
    title: {
      
      maxWidth: 130
    },

}));

export default function TopNav() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [photoUrl, setphotoUrl]=useState();
  const [firstName, setFirstName]=useState("");
  const [lastName, setLastName]=useState("");
  const history = useHistory();
  const user = auth.currentUser;

  
//Retriving user Info    
 //   console.log("  Provider-specific UID: " + user.uid);
        var docRef = db.collection("UserInfo").doc(user?.uid);

    docRef.get().then((doc) => {
        if (doc.exists) {
            setphotoUrl(doc.data().imageUrl);
            setFirstName(doc.data().firstName);
            setLastName(doc.data().lastName);
            console.log("Document data:", photoUrl);
           
            
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    }); 
  
  
 

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  //logging out
  const logOut=e=>{
    e.preventDefault();
    auth.signOut()
    .then(()=>{
      history.push('/')
    })
    .catch(error=>{
      alert(error.message)
    })
  }

//Remove Account
const removeAccount=()=>{
user.delete()
.then(function() {
  alert("Your account has been removed from database");
  history.push('/')
})
.catch((error)=> {
  alert(error.message)
});
}
//Edit Profile
const editProfile=()=>{
  history.push('/Profile')
  }
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}

    >
      <MenuItem onClick={editProfile}>Edit Profile</MenuItem>
      <MenuItem onClick={removeAccount}>Remove Account</MenuItem>
      <MenuItem onClick={logOut}>Log Out</MenuItem>
      <MenuItem onClick={handleMenuClose}>Close</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
     
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <ExpandMoreIcon fontSize="small" color="primary" />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
    
    
     <div className={classes.grow}>
     
        <Toolbar>
        <img src={logoImg} alt="logo" className={classes.title} />
         
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
             
           <Box mt={1.5} ml={3}>
            <Typography variant="h6" color="primary">{firstName? `${firstName} ${lastName}` : user?.email}</Typography>
            </Box>
            <Box mt={0}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <ExpandMoreIcon fontSize="large" color="primary"/>
            </IconButton>
            </Box>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon color="primary"/>
            </IconButton>
          </div>
          <Box mr={2} ml={1}>
           
          <Avatar className={classes.large} alt={user?.email} src={photoUrl}  />
            </Box>
        </Toolbar>
      
      {renderMobileMenu}
      {renderMenu}
    </div>
  
   </>
  );
}