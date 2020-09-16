import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import { CartContext } from '../context/GlobalState';
import { useNavigate } from 'react-router';
import Cart from './Cart';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '40px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    backgroundColor: 'orange',
    height: '40px',
    
  },
  clr:{
    color: 'white',
  },
}));

export default function Header() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [seen, setSeen] = useState(false)
  const { TotalItems } = useContext(CartContext);

  const togglePop = () => {    
    setSeen(!seen)     
   
  };


  return (
    <div className={classes.root}>
      <AppBar position="static" style= {{backgroundColor: 'orange'}}>
        <Toolbar>
        <Button onClick={(e)=>{e.preventDefault(); navigate("/")}} className={classes.clr}> <h4>Home </h4> </Button>
          <Typography variant="h5" className={classes.title}>
            Online Shoe Store
          </Typography>
          
          <div>
            
          <IconButton edge="end"  color="inherit" aria-label="menu" onClick={togglePop}>
          <Badge badgeContent={TotalItems} color="error">
          <AddShoppingCartIcon fontSize="large"/>
          </Badge>
          </IconButton>
          {console.log(seen)}
          {seen ? <Cart toggle={togglePop} /> : null} 
          
          </div>
          
        
        


        </Toolbar>
      </AppBar>
    </div>
  );
}
