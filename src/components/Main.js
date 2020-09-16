import React, { useContext, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { GlobalContext } from '../context/GlobalState';
import Select from 'react-select';
import { Link } from 'react-router-dom';
//import { Player, ControlBar } from 'video-react';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  rootofpaper: {
    display: 'flex',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridList: {
    width: 800,
    height: 700,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  }
}));

export default function Main() {
  

  const [brandValue, setBrandValue] = useState('');
  const [priceRange, setPriceRange] = useState([0,1000]);
  const { searchBrand, searchPrice } = useContext(GlobalContext);
  const { ShoesList } = useContext(GlobalContext);
  const classes = useStyles();
  
  const listBrands = [
    { label: "Adidas", value: "Adidas", key:1 },
    { label: "New Balance", value: "New Balance", key:2 },
    { label: "Nike", value: "Nike", key:3 },
    
  ];

  const listPrice = [
    { label: "< $300",  value1: 0, value2: 300, key:4 },
    { label: "$300-$500", value1: 300, value2: 500, key:5 },
    { label: "$500-$1000", value1: 500, value2: 1000, key:6 },
    
  ];

  const handleChange = (selectedOption) => {
    setBrandValue({selectedOption});
    //console.log(selectedOption);
    searchBrand(selectedOption, priceRange)
    //console.log(brandValue)
  }

  const handlePriceChange = (p1, p2) => {   
    
    setPriceRange([p1, p2]) 
    searchPrice(p1, p2, brandValue)    
  }

  console.log('brandValue',brandValue)
  const vidRef = useRef(null);
  //vidRef.current.play();

  return (
    
    <div className={classes.root}>
      <Grid container spacing={2}>
       
        <Grid item xs={3}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
            <h3 style={{color: 'orange'}}> Search by Brand</h3>
            <hr></hr>
            {/* <Select width="200px" id="search" 
            onChange={(e) => {
              console.log(e)
              console.log(e.selectedIndex)
              setBrandValue(e.options[e.selectedIndex].value)
              }}>
            <option value="Adidas" selected="">Adidas</option>
            <option value="New Collection" >New Collection</option>
            <option value="Nike" >Nike</option>
            </Select> */}
            <Select  onChange={ (e)=> (e) ? handleChange(e.value) : handleChange('')} options={ listBrands } key={listBrands.key} isClearable={'true'} />
            </Grid >
            <br></br>
            <br></br>
            <Grid item xs={12}>
            <h3 style={{color: 'orange'}}> Search by Price</h3>
            <hr></hr>
            <Select  onChange={ (e)=> (e) ? handlePriceChange(e.value1, e.value2) : handlePriceChange(0, 1000)} options={ listPrice } key={listPrice.key} isClearable={'true'}/>
            </Grid>

            <br></br>
            <br></br>
            <Grid item xs={12}>
            
            <video ref={vidRef}
             autoPlay loop
             src={process.env.PUBLIC_URL + '/images/vid.mp4'}
             width='200px'
             height='300px'
             type="video/mp4"></video>

            

              {/* <Player autoPlay
              playsInline              
              width='200px'
              height='300px'
              src={process.env.PUBLIC_URL + '/images/vid.mp4'}
              >
              <ControlBar autoHide={true} />
              </Player>
            */}
            </Grid>
            <Grid item xs={12}>
              <img src={process.env.PUBLIC_URL + '/images/favs.png'} 
              width="210px" height="400px" alt="" />
            </Grid>
            </Grid>
        </Grid>


        <Grid item xs={9}>
          <Grid container spacing={1}>
          {ShoesList.map((tile) => (
            <Grid item xs={4}>
            <Paper className={classes.paper} key={tile.image} >   
                <Link 
                 to={ '/products/' + tile.id }> 
                <img src={tile.image} alt={tile.name} width="230px" />
                <div> {tile.name}</div>     
                <div> Price : ${tile.price}</div>  
                </Link>                             
             </Paper>
             </Grid>
            ))}
          </Grid>                    
        </Grid>
            
      </Grid>
    </div>
  );
}
