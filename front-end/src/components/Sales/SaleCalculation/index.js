import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import { addCalculatedSaleItem } from '../../Redux/Reducer/salesReducer/saleAction'
import {createStructuredSelector} from "reselect"
import { selectCartItems, selectCartItemCount, selectCartTotalAmount  } from '../../Redux/Reducer/salesReducer/saleUtils'
import "./index.css"


const mapState=createStructuredSelector({
  calculatedSaleItem:selectCartItems,
  totalItems: selectCartItemCount,
  totalAmount:selectCartTotalAmount
  })
const  SaleCalculation=({getItem})=> {
  const dispatch=useDispatch();
    const [qty,setQty]=useState(1)
    const [discount,setDiscount]=useState("")
    // const [finalPrice,setFinalPrice]=useState(0)
    const {calculatedSaleItem,totalAmount} = useSelector(mapState);
    
    const [values,setValues]=useState({
        name: "",
        countInStock: "",
        price: "",
       description: "",
   
      });
      
      const handleChange = (e) => {
        const {name,value}=e.target
        setValues({
          ...values,
          [name]:value,
        });
      };
useEffect(()=>{
    if(getItem){
      setValues({
        name:getItem.name,
        price:getItem.price,
        countInStock:getItem.countInStock,
        description:getItem.description,
      })
    }
      
  },[getItem,setValues])

const handleSubmit=(e)=>{
  e.preventDefault();
  const {price}=values
  // let finalPrice
  if(discount){
    const finalPrice=((price*qty)*discount/100)
    dispatch(addCalculatedSaleItem(getItem.product,qty,discount,finalPrice))
  }else{
   const  finalPrice=(price*qty)
    dispatch(addCalculatedSaleItem(getItem.product,qty,discount,finalPrice))
  }

 
  setValues({
    name:"",
    price:"",
    countInStock:"",
    description:"",
  })
  setDiscount("")
  // setFinalPrice(0)
 
}

// console.log(calculatedSaleItem,"calculatedSaleItem")
  return (
    <div className="calculated-sale">
    <form className="saleForm" onSubmit={handleSubmit}>
      <div className="form_div desc">
          <label htmlFor="description">Item Description</label>
          <input 
          type="text"
          name="description"
          id="description"
          value={values.description}
          onChange={handleChange}
          required/>
        </div>
        
        <div>
      <div className="form_div sub_input">
          <label htmlFor="price">Selling Price</label>
          <input 
          type="number"
          name="price"
          id="price"
          value={values.price}
          onChange={handleChange}
          min="0"
          required/>
        </div>
        <div className="form_div sub_input">
        <label htmlFor="quantity">Quantity In Stock</label>
              <select value={qty} onChange={e=>setQty(e.target.value)}>
            
              {[...Array(getItem && getItem.countInStock).keys()].map(x=>
                <option key={x + 1} value={x + 1}>
                       {x + 1}
                </option>
              )}
              </select>
            </div>
      <div className="form_div sub_input">
          <label htmlFor="discount">Discount  %</label>
          <input 
           type="number"
          name="discount"
          id="discount"
          value={discount}
          onChange={(e)=>setDiscount(e.target.value)}
       
         />
        </div>
        </div>
        
        <div>
      <div className="form_div sub_input">
          <label htmlFor="pack_size">Pack Size</label>
          <input 
          type="number"
          name="pack_size"
          id="pack_size"
          onChange={handleChange}
        
         />
        </div>
      <div className="form_div sub_input">
          <label htmlFor="shelve_number">Shelve Number</label>
          <input 
           type="number"
          name="shelve_number"
          id="shelve_number"
      
         />
        </div>
        </div>
        {/* <div></div> */}
        <div class="formSubmit-btn">
        <button type="submit"  className="action-btn primary">Submit</button>
        </div>
        </form>
        <div>
        <table class="table-wrap">
     <thead className="table ">
            <tr>
              <th><span className="empty-span">{' '}</span></th>
              <th>Date</th>
              <th>ITEM NAME</th>
              <th>ITEM DESCRIPTION</th>
              <th>UNIT PRICE</th>
              <th>Quantity</th>
              <th>Discount(%)</th>
              <th>SubTotal</th>
            </tr>
          </thead>
          {  calculatedSaleItem &&  calculatedSaleItem.map(item=>(
            <tbody >
              <tr>
              <td><span className="empty-span">{' '}</span></td>
              <td>Date</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.qty}</td> 
              <td>{item.discount ? item.discount: 0}</td> 
              <td>{
             item.discount ? ((item.price*item.qty)*item.discount/100).toFixed(2) :(item.price*item.qty).toFixed(2) 
                }</td>
               </tr>
       </tbody>
   ))}
        
     </table>
     <div className="Grand-total">
     <h3>Grand Total <span class="total-input">{totalAmount.toFixed(2)}</span></h3>
     </div>
        </div>
       
    </div>
  )
}

export default SaleCalculation
