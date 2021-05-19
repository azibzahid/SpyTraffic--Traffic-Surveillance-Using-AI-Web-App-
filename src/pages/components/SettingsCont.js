import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import  {Button, Grid}  from '@material-ui/core';
import  Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { TextField,Select, MenuItem, InputLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Input} from '@material-ui/core';
import Spy from './../../assets/Spy.png';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { auth, db, storage } from '../../firebase.js';



const useStyles = makeStyles({
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
    }
  }); 





const SettingsContent =()=>{
    const classes= useStyles();

    const [monitor, setMonitor] = React.useState('');
    const [open, setOpen] = React.useState(false);
  
    const handleChange = (event) => {
      setMonitor(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true); }

      const [Error, setError]=useState("");
  const [Success, setSuccess]=useState("");
  const [firstName, setFirstname]=useState("");
  const [lastName, setLastname]=useState("");
  const [userimage, setimage] = useState(null);
  const [full_path, setfull_path] = useState("");
  const [progress, setProgress] = useState(0);
  var user= auth.currentUser;

 
   // update user Info
 
//Image field
const ByChange = (e) => {
    e.preventDefault();
    let selected = e.target.files[0];
    setfull_path(URL.createObjectURL(e.target.files[0]));
    console.log(full_path);
    const types = [
      ".png",
      "image/png",
      "image/jpeg",
      ".jpg",
      "image/jpg",
      "image/JPG ",
      "image/PNG1",
    ];
    if (selected && types.includes(selected.type)) {
       
      //user n koi or file inckude ki tou type change or wo type  array m nhi h
      setimage(selected);
      setError(""); //seting up the file
    } else {
      setimage(null);
      setError(    
         " * The file type is not matched "
      );
      setTimeout(() => {
        setError("")
    }, 3000);
    
}
   
  };

  console.log(userimage);
  //Add Photo
  const addPhoto = (e) => {
    
    e.preventDefault();
    console.log("ok");

    const uploadTask = storage
      .ref(`userimage/${userimage.name}`)
      .put(userimage);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        //error
        console.log(error);
      },
      () => {
        storage
          .ref("userimage")
          .child(userimage.name)
          .getDownloadURL()
          .then((url) => {
            db.collection(`UserInfo`)
              .doc(auth.currentUser.uid)
              .update({
                imageUrl: url,
                email: auth.currentUser.email,
              })
              .catch((err) => console.log(err));
            setProgress(0);
            setimage(0);
            setfull_path("");
            setSuccess("Your Photo has been updated Successfully!");
                setTimeout(() => {
                    setSuccess("")
                }, 3000);
          });
       
      }
    );
  }; 
      
      

   
const update =() =>{
   
   if(!user){
    setError("No user Signed In");
    setTimeout(() => {
        setError("")
    }, 3000);
    } 
 //update
 
    else{
    if(firstName)
    {
        db.collection("UserInfo").doc(user.uid).update({
            firstName: firstName,
            })
           .catch(function(err){
            // An error happened.
            setError(err.message);
            setTimeout(() => {
                setError("")
            }, 3000);
          })
    }
    if(lastName)
    {
        db.collection("UserInfo").doc(user.uid).update({
           
            lastName: lastName,
            })
            .then(()=>{
                setSuccess("Your Information has been updated Successfully!");
                setTimeout(() => {
                    setSuccess("")
                }, 3000);
            }
            )
           .catch(function(err){
            // An error happened.
            setError(err.message);
            setTimeout(() => {
                setError("")
            }, 3000);
          })
    }
    
    
}

    
}

      return (
        <>
        <Grid  align="center">
            <Grid item md="4" sm="12" >
                <Box mt={4} mb={4} boxShadow={1} className={classes.root} > 
                    <Typography  className={classes.root} variant="h4" gutterBottom align="center"  >Settings</Typography>
                </Box>
            </Grid>
            </Grid>
            <form  noValidate autoComplete="off">
                <Box className={classes.container}>
                    <Grid container direction="column"  justify="flexstart" alignItems="center">
                              
                    <Grid item sm="12" md="6" >
                            <Box mt={5} mb={4}  className={classes.root}> 
                                <Typography   className={classes.root} color="primary" variant="h4" gutterBottom align="center"  >Update Video</Typography>  
                            </Box>
                            <Box align="center">
                                <Typography  variant="subheading1" className={classes.text}  color="primary"  gutterBottom   >Attatch the demo video</Typography>
                            </Box>
                           <Box  className={classes.main} >  
                           <Box width={'60%'} ml={20} mt={5} >  

                            { Success ? <p style={{color:"white", background:"green"}}> {Success} </p> : <div></div>}
                            { Error ? <p style={{color:"white", background:"red"}}> {Error} </p> : <div></div>}
                            <Grid container direction="row" justify="center"> 
                            <Grid item lg="6" > 
                                    
                                    <label htmlFor="upload-photo">
                                        <input
                                            style={{ display: 'none' }}
                                            id="upload-photo"
                                            name="photoUrl"
                                            type="file"
                                            onChange={ByChange}
                                        />
                                        <AddAPhotoIcon color="primary"/> 
                                        </label>
                                        <Button color="primary" variant="outline" component="span" className= {classes.signBtn} onClick={addPhoto}>
                                        <span> Add Video </span> 
                                        </Button>
                                    </Grid>
                                        
                                    <Grid item >       
                                            <Grid item lg="6" >  
                                                <Button variant="contained" size="small" color="primary" className= {classes.signBtn} onClick={update} >
                                                Update
                                            </Button>                          
                                        </Grid>                                                                                                           
                                    </Grid>
                               
                                </Grid>    
                            </Box>                          
                        </Box >
                      
                </Grid> 
                        
                        </Grid>
                        
                </Box>  

                        
</form>
       
        </>
    )
}
 export default SettingsContent;