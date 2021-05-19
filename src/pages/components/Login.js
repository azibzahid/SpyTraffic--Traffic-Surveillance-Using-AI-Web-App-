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
import { Checkbox } from '@material-ui/core';
import { Link } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Spy from './../../assets/Spy.png';
import {useHistory, withRouter} from 'react-router-dom';
import { auth, db } from '../../firebase.js';
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
 const DashCont= ()=> {
    
   const classes= useStyles();
   const [Error, setError] = useState(null);
   const [Success, setSuccess] = useState(null);
   let userId;
   const [newUser, setNewuser] = useState([
    { email: "", password: ""},
  ]);

//   const [email, setEmail]= useState("");
//   const [password, setPassword]= useState("");
 
   const history = useHistory();

   const HandleChange = (e) => {
    const { name, value } = e.target;
    setNewuser({ ...newUser, [name]: value });
  };
  

  //register user
   const signUp=e=>{
    e.preventDefault();
   
    auth

      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((auth) => {
         userId = auth.user.uid;
        const userCredntial = {
          userId: userId,
          firstName: "",
          lastName: "",
         
         
        };
        console.log(db)
        console.log(userCredntial);
        db.collection("UserInfo")
          .doc(userCredntial.userId)
          .set(userCredntial)
          .then(() => {
            history.replace("/User");
          });
      })

      .catch((err) => {
        setError(err.message);
      });
    
  
             
        
    }
         
  
  // Log In user
    const signIn=e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(newUser.email, newUser.password)
        .then(auth=>{

            history.replace('/User')
        })
        .catch(error=>{setError(error.message)
         setTimeout(() => {
           setError("") 
        }, 100000)}) 
    }
//Forgor password Reset
const resetPassword=()=>{
    auth.sendPasswordResetEmail(newUser.email)
    .then(()=> {
        setSuccess("Email has been sent to you for password resetting!");
        setTimeout(() => {
          setSuccess("");  
        }, 3000);
      }).catch(function(error) {
        setError(error.message);
        setTimeout(() => {
            setError("")
        },  3000);
      })
}

   
    return (
        <>
            <Grid container justify="center"  >                   
                    <Grid item sm="12" lg="6" >
                                <img src={Spy}  className={classes.img} ></img>
                    </Grid>            
                    <Grid item sm="12" md="6" >
                            <Box mt={20} mb={4}  className={classes.root}> 
                                <Typography   className={classes.root} color="primary" variant="h4" gutterBottom align="center"  >ADMIN DASHBOARD</Typography>  
                            </Box>
                            <Box align="center">
                                <Typography  variant="subheading1" className={classes.text}  color="primary"  gutterBottom   >Welcome Back! Please login to your account.</Typography>
                            </Box>
                           <Box  className={classes.main} >    
                            <form>
                            
                                <Box mt={7}>   
                                
                                    <Box width={'60%'} ml={20} mb={4}>

                                  {Error? <p style={{ color: "white", background:"red" }}>*{Error}</p> : <div></div>}
                                    {Success ? <p style={{ color: "white", background:"Green" }}>{Success}</p> : <div></div>}


                                            <FormControl fullWidth="true" >
                                                <InputLabel htmlFor="my-input" className={classes.input}>Email </InputLabel>
                                                <Input id="my-input" type="email" name="email"  onChange={HandleChange} required=" " />  
                                                </FormControl> 
                                    </Box>                            
                                        <Box width={'60%'} ml={20} >  
                                                <FormControl fullWidth="true"> 
                                                <InputLabel htmlFor="my-input" className={classes.input}>Password</InputLabel>
                                                <Input id="my-input" type="password" name="password"  onChange={HandleChange} required=" " />
                                                

                                                </FormControl>  
                                        </Box>                      
                                          
                                    <Box width={'60%'} ml={20} >
                                        <Grid container justify="space-between" >
                                            <Grid item  lg="6"  >   
                                                <Box mt={5} mb={4} className={classes.display}>
                                                <FormControlLabel value="end" control={<Checkbox color="primary" />}label="Remember Me" labelPlacement="end"/>            
                                                </Box>                            
                                            </Grid>
                                            <Grid item  lg="6" >   
                                                <Box mt={6} mb={4} ml={5} width="full"  >  
                                                    <Link href="#" onClick={resetPassword} variant="" className={classes.input} >Forgot Password</Link>
                                                </Box>                      
                                            </Grid>                                                          
                                    </Grid>
                                    </Box>
                                    <Box width={'60%'} ml={20} >
                                    <Grid container direction="row" spacing={""}>
                                        
                                        <Grid item  lg="6" >  
                                        
                                                <Button variant="contained" color="primary" className= {classes.logBtn} type="submit" onClick={signIn}>
                                                Login </Button> 
                                           
                                            </Grid>         
                                            <Grid item lg="6" >  
                                                <Button variant="outlined" color="primary" className= {classes.signBtn} type="submit" onClick={signUp}  >
                                                Sign Up
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
    export default DashCont;
    