import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/GlobalState';




const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    
  },
  btnsubmit:{
      backgroundColor: 'orange',
  }
}));

export default function Receipt() {
  const classes = useStyles();
  const { paramArr } = useParams();   
  let arr = paramArr.split(',')
  const { emptyCart } = useContext(CartContext);    

  return (
     <>
     <h4> Your order has been placed </h4>
     <h5> will be delivered in 3 working days </h5>
     <h5> Please check your Details below </h5>
     <hr/>
     <p> Name: { arr[0] }</p>
     <p> Phone: { arr[2]}</p>
     <p> Address: { arr[3] } </p>
     <hr/>
     <p> Billing Amount: ${ arr[4]} </p>
     <hr/>
     <button onClick={emptyCart} className={classes.btnsubmit}> Done !! </button>
      </>
  );
}
