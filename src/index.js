import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Features from './pages/Features';
import Demo from './pages/Demo';
import Dash from './pages/Dash';
import User from './pages/User';
import About from './pages/About';
import  Profile from './pages/Profile';
import Settings from './pages/Settings';



import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";


const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#e1103f',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f8f8f8',
    },
  },
  fontFamily: 'fontsource-roboto' // as an aside, highly recommend importing roboto font for Material UI projects! Looks really nice
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/> 
        <Route path="/Demo"   component={Demo}/>
        <Route path="/Features"  component={Features}/>
        <Route path="/Dash"  component={Dash}/>
        <Route path="/User" component={User}/>   
        <Route path="/About" component={About}/>  
        <Route path="/Profile" component={Profile}/>
        <Route path="/Settings" component={Settings}/>
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
