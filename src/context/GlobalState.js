import React, { createContext, useReducer } from 'react'
import APPReducer from './AppReducer';
import CartReducer from './CartReducer';

const initialState = {
ShoesList : [
    {
        id: 1,
        name: "adidas edge xt trainers in white",        
        price: 535,                        
        image: process.env.PUBLIC_URL + '/images/adidas1.jpg',
        brand: "Adidas",
        ilist: [process.env.PUBLIC_URL + '/images/adidas11.jpg', process.env.PUBLIC_URL +'/images/adidas12.jpg', process.env.PUBLIC_URL +'/images/adidas13.jpg', process.env.PUBLIC_URL +'/images/adidas14.jpg'],
        blist: [process.env.PUBLIC_URL + '/images/adidas11.png', process.env.PUBLIC_URL +'/images/adidas12.png', process.env.PUBLIC_URL +'/images/adidas13.png', process.env.PUBLIC_URL +'/images/adidas14.png'],
        quantity: 1
    },
    {
        id: 2,
        name: "adidas Originals 3MC trainers in tie dye exclusive to asos",        
        price: 295,                        
        image: process.env.PUBLIC_URL + '/images/adidas2.jpg',
        brand: "Adidas",
        ilist: [process.env.PUBLIC_URL + '/images/adidas21.jpg', process.env.PUBLIC_URL +'/images/adidas22.jpg', process.env.PUBLIC_URL +'/images/adidas23.jpg', process.env.PUBLIC_URL +'/images/adidas24.jpg'],
        blist: [process.env.PUBLIC_URL + '/images/adidas21.png', process.env.PUBLIC_URL +'/images/adidas22.png', process.env.PUBLIC_URL +'/images/adidas23.png', process.env.PUBLIC_URL +'/images/adidas24.png'],
        quantity: 1

    },
    {
        id: 3,
        name: "adidas Originals SL 72 trainers in white",        
        price: 375,                        
        image: process.env.PUBLIC_URL + '/images/adidas3.jpg',
        brand: "Adidas",
        ilist: [process.env.PUBLIC_URL + '/images/adidas31.jpg', process.env.PUBLIC_URL +'/images/adidas32.jpg', process.env.PUBLIC_URL +'/images/adidas33.jpg', process.env.PUBLIC_URL +'/images/adidas34.jpg'],
        blist: [process.env.PUBLIC_URL + '/images/adidas31.png', process.env.PUBLIC_URL +'/images/adidas32.png', process.env.PUBLIC_URL +'/images/adidas33.png', process.env.PUBLIC_URL +'/images/adidas34.png'],
        quantity: 1

    },
    {
        id: 4,
        name: "adidas Running Ultraboost 20 trainers",        
        price: 850,                        
        image: process.env.PUBLIC_URL + '/images/adidas4.jpg',
        brand: "Adidas",
        ilist: [process.env.PUBLIC_URL + '/images/adidas41.jpg', process.env.PUBLIC_URL +'/images/adidas42.jpg', process.env.PUBLIC_URL +'/images/adidas43.jpg', process.env.PUBLIC_URL +'/images/adidas44.jpg'],
        blist: [process.env.PUBLIC_URL + '/images/adidas41.png', process.env.PUBLIC_URL +'/images/adidas42.png', process.env.PUBLIC_URL +'/images/adidas43.png', process.env.PUBLIC_URL +'/images/adidas44.png'],
        quantity: 1
    },
    {
        id: 5,
        name: "New Balance 997 trainers in navy and grey",        
        price: 400,                        
        image: process.env.PUBLIC_URL + '/images/new-balance-1.jpg',
        brand: "New Balance",
        ilist: [process.env.PUBLIC_URL + '/images/nb-11.jpg', process.env.PUBLIC_URL +'/images/nb-12.jpg', process.env.PUBLIC_URL +'/images/nb-13.jpg', process.env.PUBLIC_URL +'/images/nb-14.jpg'],
        blist: [process.env.PUBLIC_URL + '/images/nb-11.png', process.env.PUBLIC_URL +'/images/nb-12.png', process.env.PUBLIC_URL +'/images/nb-13.png', process.env.PUBLIC_URL +'/images/nb-14.png'],
        quantity: 1
    },
    {
        id: 6,
        name: "New Balance 997 trainers in navy",        
        price: 380,                        
        image: process.env.PUBLIC_URL + '/images/new-balance-2.jpg',
        brand: "New Balance",
        ilist: [process.env.PUBLIC_URL + '/images/nb-21.jpg', process.env.PUBLIC_URL +'/images/nb-22.jpg', process.env.PUBLIC_URL +'/images/nb-23.jpg', process.env.PUBLIC_URL +'/images/nb-24.jpg'],
        blist: [process.env.PUBLIC_URL + '/images/nb-21.png', process.env.PUBLIC_URL +'/images/nb-22.png', process.env.PUBLIC_URL +'/images/nb-23.png', process.env.PUBLIC_URL +'/images/nb-24.png'],
        quantity: 1
    },
    {
        id: 7,
        name: "New Balance 373 trainers in red",        
        price: 350,                        
        image: process.env.PUBLIC_URL + '/images/new-balance-3.jpg',
        brand: "New Balance",
        ilist: [process.env.PUBLIC_URL + '/images/nb-31.jpg', process.env.PUBLIC_URL +'/images/nb-32.jpg', process.env.PUBLIC_URL +'/images/nb-33.jpg', process.env.PUBLIC_URL +'/images/nb-34.jpg'],
        blist: [process.env.PUBLIC_URL + '/images/nb-31.png', process.env.PUBLIC_URL +'/images/nb-32.png', process.env.PUBLIC_URL +'/images/nb-33.png', process.env.PUBLIC_URL +'/images/nb-34.png'],
        quantity: 1
    },
    {
        id: 8,
        name: "New Balance 574 trainers in light grey suede",        
        price: 630,                        
        image: process.env.PUBLIC_URL + '/images/new-balance-4.jpg',
        brand: "New Balance",
        ilist: [process.env.PUBLIC_URL + '/images/nb-41.jpg', process.env.PUBLIC_URL +'/images/nb-42.jpg', process.env.PUBLIC_URL +'/images/nb-43.jpg', process.env.PUBLIC_URL +'/images/nb-44.jpg'],
        blist: [process.env.PUBLIC_URL + '/images/nb-41.png', process.env.PUBLIC_URL +'/images/nb-42.png', process.env.PUBLIC_URL +'/images/nb-43.png', process.env.PUBLIC_URL +'/images/nb-44.png'],
        quantity: 1
    },
   
]};

const initialCart = {
    TotalItems: 0,
    cartItems : [
        ]}

// create the Global Context
export const GlobalContext = createContext(initialState);
export const CartContext = createContext(initialCart);

//create a provider for global context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(APPReducer, initialState)

        //action
        

        function searchBrand(val, priceRange){
            
            dispatch({
                type: 'search_brand', 
                payload: [val, initialState, priceRange]
            })
        }

        function searchPrice(p1, p2, brandValue){            
            dispatch({
                type: 'search_price', 
                payload: [p1, p2, initialState, brandValue]
            })
        }

        function resetShoesList(){            
            dispatch({
                type: 'reset_shoeslist', 
                payload: [initialState]
            })
        }
        
    return (
        <GlobalContext.Provider value={          
                {                    
                    ShoesList: state.ShoesList, 
                    resetShoesList,
                    searchBrand, 
                    searchPrice
                }            
        }>
            {children}
            </GlobalContext.Provider>
    )
}


export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialCart)

        //action
        

        function addCart(val){
            
            dispatch({
                type: 'add_cart', 
                payload: val
            })
        }
        
        function removeItem(val){
            
            dispatch({
                type: 'remove_cart', 
                payload: val
            })
        }

        function updateCart(id){            
            dispatch({
                type: 'update_cart', 
                payload: id
            })
        }

        function decreaseCart(id){           
            dispatch({
                type: 'decrease_cart', 
                payload: id
            })
        }

        function updateTotalItems(){           
            dispatch({
                type: 'update_total_items', 
                payload: 1
            })
        }

        function emptyCart(){           
            dispatch({
                type: 'empty_cart', 
                payload: 0
            })
        }
    return (
        <CartContext.Provider value={          
                { 
                    TotalItems: state.TotalItems,
                    cartItems: state.cartItems,                      
                    addCart,
                    removeItem,
                    updateCart,
                    decreaseCart,
                    updateTotalItems,
                    emptyCart
                }            
        }>
            {children}
            </CartContext.Provider>
    )
}






