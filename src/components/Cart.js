import React, { useContext } from "react";
import { CartContext } from '../context/GlobalState';
import Grid from '@material-ui/core/Grid';
import { useNavigate  } from 'react-router';
import './../App.css';

/* const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
}))

export default function Cart(props) {
  const handleClick = () => {
    props.toggle();
  };


  const classes = useStyles();
  const { cartItems, updateCart } = useContext(CartContext);
  
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={handleClick}>
            <b>&times; </b>
          </span>
          <h4> Cart </h4>
          <Grid container className={classes.root}>                   
            {cartItems.map((item, index) => (
                <>
                <Grid item xs={4}>
                    <img src={item.image} width='100px' height='80px' alt=""/>
                </Grid>
                <Grid item xs={8}>
                <h6> 
                    Price: ${item.price}<br/>  
                    id: {item.id} <br/>             
                    Product: {item.name} <br/>
                    Brand: {item.brand} <br/>
                    Quantity: {item.quantity} {'  '}
                    <button onClick={()=>{}}> - </button> <button onClick={()=>{updateCart(index)}}> + </button>
                </h6>
                </Grid>
            </>            
            ))}
        </Grid>
        </div>
      </div>
    );
  }

 */

  
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function Cart(props) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [scroll, setScroll] = React.useState('paper');
  const { cartItems, updateCart, decreaseCart, removeItem } = useContext(CartContext);
  
  /* const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  }; */

  const handleClose = () => {
    setScroll(scroll)
    setOpen(false);
    props.toggle();
  };

  const handleCheckout = () => {
    
    handleClose();
    navigate("/checkout"); 
  };
  
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Cart</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
          {cartItems.length > 0 ? (                       
          <Grid container >           
            {cartItems.map((item, index) => (
                <>
                <Grid item xs={4}>
                    <img src={item.image} width='100px' height='80px' alt=""/>
                </Grid>
                <Grid item xs={7}>
                <h6> 
                    Price: ${item.price}<br/>  
                    id: {item.id} <br/>             
                    Product: {item.name} <br/>
                    Brand: {item.brand} <br/>
                    Quantity: {item.quantity} {'  '}
                    <button onClick={()=>{decreaseCart(index)}}> - </button> <button onClick={()=>{updateCart(index)}}> + </button>
                     
                </h6>
                </Grid>
                <Grid item xs={1}>
                  <button className="btnchk" onClick={()=>{removeItem(item.id)}}> x </button> 
                </Grid>
            </>            
            ))}
            
        </Grid>
          ):

<h2> Cart is Empty</h2>}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button disabled={!cartItems.length} onClick={handleCheckout} color="primary">
           View Cart
          </Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
