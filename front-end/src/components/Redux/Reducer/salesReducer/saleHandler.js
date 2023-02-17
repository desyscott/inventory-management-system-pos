
//finding out if the item already exist in the cart
export const existingCartItem=({prevCartItem,nextCartItem}) =>{
    return prevCartItem.find(saleItem=>saleItem.product===nextCartItem.product)
}


export const handleAddToCart=({prevCartItem,nextCartItem})=>{ 
//if the item to be added to the cart already exist we just replace it with new one
    const cartItemExits=existingCartItem({prevCartItem,nextCartItem})
    
    if(cartItemExits){
    return prevCartItem.map(saleItem=>saleItem.product === cartItemExits.product ? 
                            nextCartItem:saleItem)
    }
//or else  if the item new and don't exist in our cart
  return [
      ...prevCartItem, 
        nextCartItem,
        ]
}


export const handleRemoveFromCart=({prevCartItem,saleItemToRemove})=>{
    //filter out the product whose id is equal to the payLoad action id
    return prevCartItem.filter(saleItem => saleItem.product !== saleItemToRemove.productId)
}

//finding out if the item already exist in the cart
export const existingCalculatedSaleItem=({prevCalculatedSaleItem,nextCalculatedSaleItem}) =>{
    return prevCalculatedSaleItem.find(calculatedSaleItem=>calculatedSaleItem.product===nextCalculatedSaleItem.product)
}


export const handleAddToCalculatedSale=({prevCalculatedSaleItem,nextCalculatedSaleItem})=>{ 
    //if the item to be added to the cart already exist we just replace it with the same new one
        const calcSaleItemExits=existingCalculatedSaleItem({prevCalculatedSaleItem,nextCalculatedSaleItem})
        
        if(calcSaleItemExits){
        return prevCalculatedSaleItem.map(saleItem=>saleItem.product === calcSaleItemExits.product ? 
                                nextCalculatedSaleItem:saleItem)
        }
    //or else  if the item new and don't exist in our cart
      return [
          ...prevCalculatedSaleItem, 
            nextCalculatedSaleItem,
            ]
    }
