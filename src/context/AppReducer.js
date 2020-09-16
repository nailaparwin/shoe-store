export default (state, action) => {
     switch (action.type){
         
        case 'search_brand':
            
            if (action.payload[0] === '') {
                return{
                    ...state,
                   // _brandValue: '',
                   // _priceRange: [ action.payload[2][0] , action.payload[2][1] ],
                    ShoesList: action.payload[1].ShoesList.filter(                    
                        s => s.price < action.payload[2][1] && s.price > action.payload[2][0] )
                     
                }
            }
            else{
            return{
                ...state,
               // _brandValue: action.payload[0],
               // _priceRange: [ action.payload[2][0] , action.payload[2][1] ],
                ShoesList: action.payload[1].ShoesList.filter(                    
                    s => s.brand === action.payload[0] && s.price < action.payload[2][1] && s.price > action.payload[2][0] )
                 
            }
        }
        case 'search_price':  
            //console.log(action.payload[3].selectedOption);          
            if (action.payload[3].selectedOption === '' || action.payload[3].selectedOption === undefined) {                
                return{
                    ...state,
                    //ShoesList: state.ShoesList.filter(
                    //    Shoeslist => Shoeslist.price < action.payload)
                   // _brandValue: '',
                   // _priceRange: [ action.payload[0] , action.payload[1] ],
                    ShoesList: action.payload[2].ShoesList.filter(
                        Shoeslist => Shoeslist.price < action.payload[1] && Shoeslist.price > action.payload[0])
                }  
            } 
                     
            else
            {  
                return{
                    ...state,
                    //ShoesList: state.ShoesList.filter(
                    //    Shoeslist => Shoeslist.price < action.payload)
                  //  _brandValue: action.payload[3].selectedOption,
                   // _priceRange: [ action.payload[0] , action.payload[1] ],
                    ShoesList: action.payload[2].ShoesList.filter(
                        Shoeslist => Shoeslist.price < action.payload[1] && Shoeslist.price > action.payload[0] && Shoeslist.brand === action.payload[3].selectedOption)
                }  

            } 
         default:             
             return state;
     }
}