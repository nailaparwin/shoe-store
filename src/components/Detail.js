import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { CartContext } from '../context/GlobalState';
import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles((theme) => ({
    
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    div: {
        margin: '10px',
    },
    space:{
        marginTop: '80px',
        
    },
    btn:{
        backgroundColor:'orange',
        width:'180px',
        height: '60px',
    },
    
  }));

export default function Detail(){
    const { ShoesList } = useContext(GlobalContext);
    const { id } = useParams();
    //const product = ShoesList[id-1]
    const product = ShoesList.filter(shoe => shoe.id.toString() === id.toString())[0]
    console.log('product', product)
    /* console.log('product', product)
    let product = null;
    function findProduct() {        
        ShoesList.find(function(shoe) {                   
        if(id.toString() === shoe.id.toString()){  
            console.log('id detail', id)             
            product = shoe
            return;
        }        
        });  
    }
    findProduct();     */
    const  [productImage, setProductImage] = useState( product.image )    
    const classes = useStyles();
    const { cartItems, addCart, updateTotalItems } = useContext(CartContext);    
    const [open, setOpen ]= useState(false);

    function ifItemExist(val){
        let found = false;
        // eslint-disable-next-line
        cartItems.find(function(item, index) {            
            if(item.id === val){            
                found = true;}
        });        
        return found;
    }
    function handleClick(param){
        //console.log(param)
        setProductImage(param);
    }

    function handleClose(){
        setOpen(false);
    }

    function handleOpen(){
        setOpen(true);
    }
    useEffect( ()=>{

    },[productImage])

    return (
        
        <div>
            <Grid container spacing={2}>
                <Grid item xs={1}>
                </Grid>

                <Grid item xs={2} className={classes.space}>
                <div className={classes.div}>   
                
                <img src={ product.ilist[0] } alt="" onClick={()=> handleClick(product.blist[0])}/>
                </div>

                <div className={classes.div}>
                <img src={ product.ilist[1] } alt="" onClick={()=> handleClick(product.blist[1])}/>
                </div>

                <div className={classes.div}>
                <img src={ product.ilist[2] } alt="" onClick={()=> handleClick(product.blist[2])}/>
                </div>

                <div className={classes.div}>  
                <img src={ product.ilist[3] } alt="" onClick={()=> handleClick(product.blist[3])}/>
                </div>

                </Grid>
                <Grid item xs={5}>

                <img src={ productImage } alt="" width="300px" height="350px" style={{marginTop:'50px'}} />
                </Grid>
                <Grid item xs={3} className={classes.space}>
                <h3> { product.name } </h3>
                <h4> Brand: { product.brand } </h4>
                <h4> ${ product.price } </h4>
                <button className={classes.btn} onClick={()=>{
                                                         
                            if (!ifItemExist(product.id))  
                            {
                                addCart(product);  
                                updateTotalItems();
                            }
                            else 
                                handleOpen();
                            //alert("item already exist")
                            //console.log('cartItems ',cartItems);
                            //console.log('TotalItems ',TotalItems)
                            }} >
                            <h3> Add To Cart </h3>
                </button>
                </Grid>
                <Grid item xs={1}>
                </Grid>
           </Grid>
           <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} variant="filled" severity="warning">
                Item already exist. You can increase quantity
                </Alert>
            </Snackbar>
        </div>
    )
}
