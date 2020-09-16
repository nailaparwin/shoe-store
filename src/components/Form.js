import React from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router';

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

export default function FormPropsTextFields() {
  const navigate = useNavigate();
  const classes = useStyles();

  const { total } = useParams();   

  function handleSubmit(event) {    
    event.preventDefault();
      /*  const par = {
      name: nam,
      otherParam: 'anything you want here',
    } */

   const paramArr = [
      nam, email, phone, address, total
    ] 

    navigate(`/receipt/${paramArr}`);
  }
  
  const [value, setValue] = React.useState('cod');
  const [nam, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
   
  const handleNameChange = (event) => {
      setName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
}

const handlePhoneChange = (event) => {
  setPhone(event.target.value)
}

const handleAddressChange = (event) => {
  setAddress(event.target.value)
}
  return (
     
    <form className={classes.root}  autoComplete="off"  onSubmit={handleSubmit}>
         <h5> Please fill in all required fields </h5>
      <div>
        <TextField required id="standard-required" label="Name" defaultValue="" onChange={handleNameChange} />
        <br/>
        <TextField required id="standard-required" label="Email" defaultValue="" onChange={handleEmailChange} />
        <br/>
        <TextField required id="standard-required" label="Phone Number" defaultValue="" onChange={handlePhoneChange}/>
        <br/>
        <TextField required id="standard-required" label="Shipping Address" defaultValue="" onChange={handleAddressChange}/>               
        <br/><br/><br/>
        <FormControl component="fieldset">
        {/* <FormLabel component="legend">Payment Method</FormLabel> */}
        <RadioGroup row color="default" aria-label="Payment Method" name="pm" value={value} onChange={handleChange}>
            
        <FormControlLabel checked={true} value="Cash on Delivery" control={<Radio />} label="Cash on Delivery" />
        <FormControlLabel disabled value="Credit Card" control={<Radio />} label="Online Payment (not implemented :)" />          
        </RadioGroup>  
        </FormControl>
        
      </div>
      <br/>
         
        <Button className={classes.btnsubmit} variant="raised" type="submit">Submit </Button>      
    </form>
  );
}
