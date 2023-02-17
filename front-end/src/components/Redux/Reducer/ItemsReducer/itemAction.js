import itemTypes from "./itemTypes"
import Axios from "axios"


export const fetchItemsRequest=()=>async(dispatch)=>{
    dispatch({
        type:itemTypes.FETCH_ITEMS_REQUEST
    })
    try{
        const {data} =await Axios.get("/api/products");
        dispatch({
            type:itemTypes.SET_ITEMS,
            payLoad:data
        }) 
    }catch(error){
        dispatch({
            type:itemTypes.FETCH_ITEMS_FAIL,
            payLoad:error.message
        })
    }
};


export const fetchItemRequest =(itemId)=>async(dispatch)=>{
    dispatch({
        type:itemTypes.FETCH_ITEM_REQUEST,
        payLoad:itemId,
    })
    try{
        const {data} = await Axios.get(`/api/products/${itemId}`);
        dispatch({
            type:itemTypes.SET_ITEM,
            payLoad:data,
        })
     
    }catch(err){
        dispatch({
            type:itemTypes.FETCH_ITEM_FAIL,
            payLoad:err.response && err.response.data.message
             ? err.response.data.message 
             : err.message,
        })
    }
}