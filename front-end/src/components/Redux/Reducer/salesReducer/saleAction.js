import saleTypes from "./saleTypes";
import Axios from "axios"


export const addSaleItem=(productId)=>async(dispatch,getState)=>{
    try{
        const {data} = await Axios.get(`/api/products/${productId}`);
        dispatch({
       type:saleTypes.ADD_TO_SALES,
       payLoad:{
           name:data.itemName,
           brand:data.itemBrand,
           price:data.price,
           description:data.description,
           countInStock:data.countInStock,
           product:data._id,
       }
       });

    //adding the saleItems to local storage
   localStorage.setItem("saleItems",JSON.stringify(getState().saleData.saleItems));
    }catch(error){
      console.log(error)  
    } 
}


export const removeSaleItem=(productId)=>async(dispatch,getState)=>{
    dispatch({
        type:saleTypes.REMOVE_SALES_ITEM,
        payLoad:productId
         });
    //updating the local storage 
    localStorage.setItem("saleItems", JSON.stringify(getState().saleData.saleItems));
}


export const addCalculatedSaleItem=(productId,qty,discount,finalPrice)=>async(dispatch,getState)=>{
    try{
        const {data} = await Axios.get(`/api/products/${productId}`);
        dispatch({
       type:saleTypes.ADD_CALCULATED_SALE_ITEM,
       payLoad:{
           name:data.itemName,
           brand:data.itemBrand,
           price:data.price,
           description:data.description,
           countInStock:data.countInStock,
           product:data._id,
           qty,
           discount,
           finalPrice
        
           
       }
       });  
    //adding the saleItems to local storage
localStorage.setItem("calculatedSaleItem",JSON.stringify(getState().saleData.calculatedSaleItem));
    }catch(error){
      console.log(error)  
    }    
}


