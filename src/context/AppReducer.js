export default (state, action) => {
     switch (action.type){
        case 'reset_shoeslist':
            console.log(action.payload)
            return{
                ...state,
                ShoesList: action.payload[0].ShoesList
            }
        case 'search_brand':
            
            if (action.payload[0] === '') {
                return{
                    ...state,                  
                    ShoesList: action.payload[1].ShoesList.filter(                    
                        s => s.price < action.payload[2][1] && s.price > action.payload[2][0] )
                     
                }
            }
            else{
            return{
                ...state,               
                ShoesList: action.payload[1].ShoesList.filter(                    
                    s => s.brand === action.payload[0] && s.price < action.payload[2][1] && s.price > action.payload[2][0] )
                 
            }
        }
        case 'search_price':                  
            if (action.payload[3].selectedOption === '' || action.payload[3].selectedOption === undefined) {                
                return{
                    ...state,                    
                    ShoesList: action.payload[2].ShoesList.filter(
                        Shoeslist => Shoeslist.price < action.payload[1] && Shoeslist.price > action.payload[0])
                }  
            } 
                     
            else
            {  
                return{
                    ...state,                   
                    ShoesList: action.payload[2].ShoesList.filter(
                        Shoeslist => Shoeslist.price < action.payload[1] && Shoeslist.price > action.payload[0] && Shoeslist.brand === action.payload[3].selectedOption)
                }  

            } 
         default:             
             return state;
     }
}