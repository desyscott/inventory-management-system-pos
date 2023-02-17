import {combineReducers} from "redux"

import itemsReducer from "./Reducer/ItemsReducer/itemReducer"
import addToSaleReducer from "./Reducer/salesReducer/saleReducer";


const rootReducer = combineReducers({
    itemsData:itemsReducer,
    saleData:addToSaleReducer,
})

export default rootReducer;