import {createSelector} from "reselect"

export const selectSaleData=(state)=>state.saleData

export const selectCartItems =createSelector(
    [selectSaleData],
    saleData=>saleData.calculatedSaleItem
)

export const selectPaymentMethod=createSelector(
    [selectSaleData],
    saleData=>saleData.paymentMethod
)

export const selectShippingAddress=createSelector(
    [selectSaleData],
    saleData=>saleData.shippingAddress   
)


export const selectCartItemCount =createSelector(
    [selectCartItems],
      calculatedSaleItem=>  calculatedSaleItem.reduce((a,saleItem)=> a + saleItem.qty,0)
)

export const selectCartTotalAmount =createSelector(
    [selectCartItems],
calculatedSaleItem=>  calculatedSaleItem.reduce((a,saleItem)=> a + saleItem.finalPrice,0)
)
