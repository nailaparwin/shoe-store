export default (state, action) => {
    switch (action.type){
        
       case 'remove_cart':                      
               return{
                   ...state,
                   cartItems: state.cartItems.filter(                    
                       s => s.id !== action.payload ),
                    TotalItems: state.TotalItems -1
                                   
           }           
        case 'add_cart':                            
               return{
                   ...state,
                   cartItems: [
                    ...state.cartItems,
                   {                        
                        id: action.payload.id,
                        name: action.payload.name,        
                        price: action.payload.price,                        
                        image: action.payload.image,
                        brand: action.payload.brand,
                        quantity: action.payload.quantity,
                   }
                   ]
               }         
        case 'update_cart':       
                console.log('action.payload', action.payload);
                const no = state.cartItems[action.payload].quantity
                console.log('no', no);                     
                return{
                    ...state,
                   ...state.cartItems[action.payload].quantity = no + 1,                   
                   cartItems: [...state.cartItems]                 
               }     
        case 'decrease_cart':       
                console.log('action.payload', action.payload);
                const num = (state.cartItems[action.payload].quantity > 1 ? state.cartItems[action.payload].quantity - 1 : 1 )                                                
                return{
                    ...state,
                   ...state.cartItems[action.payload].quantity = num ,                   
                   cartItems: [...state.cartItems]                 
               }     
        case 'update_total_items':
            const newcount = state.TotalItems + 1
            return{
                ...state,
                TotalItems: newcount
            }
        case 'empty_cart':            
            return{
                ...state,
                TotalItems: 0,
                cartItems: []
            }
        default:
            return state;
    }
}