import itemTypes from "./itemTypes"

const INITIAL_STATE = {
   items:[],
    item:{},
    loading:true
}

const itemsReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
       case itemTypes.FETCH_ITEMS_REQUEST:
        return{
            ...state,
            loading:true,
        }
        
       case itemTypes.SET_ITEMS: 
        return{
            ...state,
            items:action.payLoad,
            loading:false,
        }
        
       case itemTypes.FETCH_ITEMS_FAIL:
        return{
            ...state,
            loading:false,
            error:action.payLoad
        }
        
      case itemTypes.FETCH_ITEM_REQUEST:
      return{
          ...state,
          loading:true,
      }
      
      case itemTypes.SET_ITEM:
      return{
        ...state,
        loading:false,
        item:action.payLoad
      }
      
      case itemTypes.FETCH_ITEM_FAIL:
      return{
        ...state,
        loading:false,
       error:action.payLoad
      }
        
        default:return state
    }
    
}
export default itemsReducer;