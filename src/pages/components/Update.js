import React, { useState } from 'react';
import DashFooter from './DashFooter';
import { makeStyles } from '@material-ui/core/styles'
import { Grid}   from '@material-ui/core';
import { Box }  from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Input} from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Spy from './../../assets/Spy.png';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import {withRouter} from 'react-router-dom'
import { auth, db, storage } from '../../firebase.js';

const useStyles = makeStyles({
    root: {
      
     fontWeight: 'Bold',
     letterSpacing: 10,
     fontFamily: 'Segoe UI'
    },
    text:
    {
        fontWeight: 'Light',
        letterSpacing: 1,
        fontFamily: 'Segoe UI'
    },
    input:
    { fontFamily:'sans-serif',
      color:'Black' , 
    },
    link:{
     color:'grey',
    },
    container:
    {
      marginTop: 70,     
      
    },
    img:
    {
        height: '100vh',
        objectFit: 'cover',
    },
    display:
    {
        displayInline:"true",
    },
    logBtn: {

        paddingTop:8,
        paddingBottom:8,
         paddingLeft:60,
        paddingRight:60
     
        }, 
        signBtn: {

            paddingTop:8,
            paddingBottom:8,
             paddingLeft:50,
            paddingRight:50
         
            },  
        main: {

            paddingLeft:0,
           
            },             
  }); 
 const Update = () => {


  
   
  const classes= useStyles();
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
const handleChange = (e) => {
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
            <Grid container justify="center"  >                   
                    <Grid item sm="12" lg="6" >
                                <img src={Spy}  className={classes.img} ></img>
                    </Grid>            
                    <Grid item sm="12" md="6" >
                            <Box mt={20} mb={4}  className={classes.root}> 
                                <Typography   className={classes.root} color="primary" variant="h4" gutterBottom align="center"  >Update Profile</Typography>  
                            </Box>
                            <Box align="center">
                                <Typography  variant="subheading1" className={classes.text}  color="primary"  gutterBottom   >Provide Details to be updated!</Typography>
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
                                            onChange={handleChange}
                                        />
                                        <AddAPhotoIcon color="primary"/> 
                                        </label>
                                        <Button color="primary" variant="outline" component="span" className= {classes.signBtn} onClick={addPhoto}>
                                        <span> Add Photo</span> 
                                        </Button>
                                     
                                    </Grid>
                                </Grid>    
                            </Box>    
                            <form className="profile" >
                               
                                <Box mt={7}>
                              
                                    <Box width={'60%'} ml={20} mb={4}>

                                                <FormControl fullWidth="true" >
                                                    <InputLabel htmlFor="my-input" className={classes.input}>First Name</InputLabel>
                                                    <Input id="my-input" type="text" name="firstName"  onChange={(e)=>{setFirstname(e.target.value)}} />  
                                                    </FormControl> 
                                        </Box> 
                                    <Box width={'60%'} ml={20} mb={4}>
                                            <FormControl fullWidth="true" >
                                                <InputLabel htmlFor="my-input" className={classes.input}>Last Name </InputLabel>
                                                <Input id="my-input" type="text" name="lastName" onChange={(e)=>{setLastname(e.target.value)}}  />  
                                                </FormControl> 
                                    </Box> 
                                {/*  <Box width={'60%'} ml={20} mb={4}>
                                        
                                            <FormControl fullWidth="true" >
                                                <InputLabel htmlFor="my-input" className={classes.input}>Email </InputLabel>
                                                <Input id="my-input" type="email" name="email" onChange={HandleChange} />  
                                                </FormControl> 
                                    </Box>                
                                        <Box width={'60%'} ml={20} >  
                                                <FormControl fullWidth="true"> 
                                                <InputLabel htmlFor="my-input" className={classes.input}>Password</InputLabel>
                                                <Input id="my-input" type="password" name="password" onChange={HandleChange} /> 

                                                </FormControl>  
                                        </Box> 
                                        */  
                                 }           
                                    <Box width={'60%'} ml={20} mt={5} >
                                    <Grid container direction="row" justify="center">       
                                            <Grid item lg="6" >  
                                                <Button variant="contained" size="small" color="primary" className= {classes.signBtn} onClick={update} >
                                                Update
                                            </Button>                          
                                        </Grid>                                                                                                           
                                    </Grid>
                                </Box> 
                                   
                            </Box>
                         </form>
                        
                        </Box >
                      
                </Grid>  
            </Grid>      
              
                

        </>
    ) }
    export default Update;
    