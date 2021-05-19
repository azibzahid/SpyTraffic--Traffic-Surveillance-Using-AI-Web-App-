import react from 'react';
import { Box }  from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import { Link } from '@material-ui/core';

const useStyles = makeStyles({
    root:{
       marginTop:30,
       marginLeft:300,
        fontFamily:'sans-serif',
    },
}
)


const DashFooter=()=>{
    const classes=useStyles()
    return(
        <Box className={classes.root}>
            <Link href="#" onClick={""} variant="" color="textSecondary" >Terms of use. </Link> 
            <Link href="#" onClick={""} variant="" color="textSecondary" >Privicy policy</Link> 
        </Box>    
        
 
    )
}
export default DashFooter