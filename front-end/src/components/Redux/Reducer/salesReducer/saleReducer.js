import saleTypes from "./saleTypes"

import {handleAddToCalculatedSale,handleAddToCart,handleRemoveFromCart} from "./saleHandler"

const INITIAL_STATE={
    saleItems:[],
    calculatedSaleItem:[],   
}

const addToSaleReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
    case saleTypes.ADD_TO_SALES: 
     return{
         ...state,
           saleItems:handleAddToCart({
               prevCartItem:state.saleItems,
               nextCartItem:action.payLoad,
           })
        }
     
     case saleTypes.REMOVE_SALES_ITEM:
     return{
         ...state,
         saleItems:handleRemoveFromCart({
             prevCartItem:state.saleItems,
             saleItemToRemove:action.payLoad
         })
     };
     
     case saleTypes.ADD_CALCULATED_SALE_ITEM: 
     return{
         ...state,
         calculatedSaleItem: handleAddToCalculatedSale({
               prevCalculatedSaleItem:state.calculatedSaleItem,
               nextCalculatedSaleItem:action.payLoad,
           })
        }
   
     
     case saleTypes.SALES_EMPTY:
     return{
         ...state,
         saleItems:[]
     }
     
    default: return state
    }
    
}

export default addToSaleReducer;