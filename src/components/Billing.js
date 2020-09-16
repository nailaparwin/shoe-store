import React, { useContext } from "react";
import { CartContext } from '../context/GlobalState';
import Grid from '@material-ui/core/Grid';
import { useNavigate } from 'react-router';
import './../App.css';


export default function Cart(props) {
  
  const { cartItems } = useContext(CartContext);
  let tmp = 0;
  let total = 0;
  const navigate = useNavigate();
  
  return (
    <div>
                       
         <h4> View Your Cart Items .. </h4>
          <Grid container >                   
            {cartItems.map((item, index) => (
                <>
                <Grid item xs={2}>
                    
                </Grid>
                <Grid item xs={4}>
                    <img src={item.image} width='300px' height='300px' alt=""/>
                </Grid>
                <Grid item xs={4}>
                <h5> 
                    Price: ${item.price}<br/>  
                    {/* id: {item.id} <br/>              */}
                    Product: {item.name} <br/>
                    Brand: {item.brand} <br/>
                    Quantity: {item.quantity} {'  '}
                </h5>
            <h3> Item Price: ${tmp = item.price * item.quantity}</h3>
            
            <h5 className='hide'> Sub Total: { total = total + tmp }</h5>
                </Grid>
                <Grid item xs={2}>
                    
                </Grid>
            </>            
            ))}
            <Grid item xs={12}>
                <hr/>
            <h3> Total Amount : ${total}</h3>
            <hr/>
            </Grid>
            <Grid item xs={12}>
              <button className='btnchkout' onClick={()=>{navigate(`/form/${total}`)}}><h4> Checkout </h4></button>
            </Grid>
        </Grid>

         
    </div>
  );
}
