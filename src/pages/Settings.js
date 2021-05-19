import React from "react";
import SettingsContent from "./components/SettingsCont";
import { Grid } from '@material-ui/core';
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
import UserCont from './components/SettingsCont';

const Settings =()=>{

    return(
        <>
        <Grid container>
            <Grid item lg="2" >
                <SideNav/>
            </Grid> 
            <Grid item lg="10" > 
                <TopNav/>
                <SettingsContent/>
            </Grid>
       </Grid>
        </>
        
  )

}
 export default Settings;
