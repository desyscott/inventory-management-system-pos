import React,{useState} from 'react'
import {Link} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import { removeSaleItem } from '../Redux/Reducer/salesReducer/saleAction'

import MessageBox from '../MessageBox'
import {AiFillCaretRight} from "react-icons/ai"
import SaleCalculation from "./SaleCalculation/index"
import "./index.css"


  const mapState=({saleData})=>({
    saleItems:saleData.saleItems,
})

const Index=()=>{
  const {saleItems}=useSelector(mapState)
  const [selected,setSelected]=useState()
  const [getItem,setGetItem,]=useState()
  const dispatch =useDispatch()
  
  const RemoveFromSaleHandler=(productId)=>{
    dispatch(removeSaleItem({productId}))
  }
  
  const handleClick=(index,item)=>{
    setSelected(index)
    setGetItem(item)
  }

  return (
    <div className="row">
      <div className="col-1">
     <div className="col-1-nav">
     <h3>Retails</h3>
     </div>
    { saleItems.length === 0?
     (
       <MessageBox> Sales is empty <Link to="/">Go Shopping</Link></MessageBox>
     )
     :
     (
  <table>
     <thead className="table">
            <tr>
              <th><span className="empty-span">{' '}</span></th>
              <th>ITEM NAME</th>
              <th>ITEM DESCRIPTION</th>
              <th>UNIT PRICE</th>
              <th>STOCK LEVEL</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          {saleItems.map((item,index)=>(
            <tbody  onClick={()=>handleClick(index,item)} className={selected===index ? " table-active":""}>
              <tr >
              <td ><span className="empty-span">{' '}{selected===index &&<AiFillCaretRight/> }</span></td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.countInStock}</td>
              <td>
                <button type="button"  className="action-btn danger"
                 onClick={()=>RemoveFromSaleHandler(item.product)}>Remove</button>
               </td>
               </tr>
       </tbody>
          ))}

     </table>)
    }
      </div>
      
      
      
      <div className="col-2">
      <SaleCalculation getItem={getItem} />
      </div>
    </div>
  )
}

export default Index
